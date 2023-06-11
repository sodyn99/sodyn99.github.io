#!/usr/bin/env python
# coding: utf-8

# In[ ]:


print('Esports scraping ------------------')


# # LCK

# In[16]:


import requests
import pandas as pd

team_full = ['⁠⁠Dplus KIA', '⁠⁠Hanwha Life Esports', '⁠⁠Liiv SANDBOX', '⁠⁠Nongshim RedForce', '⁠⁠T1', '⁠⁠OKSavingsBank BRION', '⁠⁠Gen.G', '⁠⁠DRX', '⁠⁠KT Rolster', '⁠⁠Kwangdong Freecs']
team_short = ['dk', 'hle', 'lsb', 'ns', 't1', 'bro', 'gen', 'drx', 'kt', 'kdf']

def table(league, url):
    
    response = requests.get(url)
    df = pd.read_html(response.text)

    df = df[15]
    df.columns = df.columns.droplevel(0)
    df.drop(['Legend',
             'Unnamed: 3_level_1',
             'Unnamed: 4_level_1',
             'Unnamed: 5_level_1',
             'Unnamed: 7_level_1',],
             axis=1, inplace=True)

    # 순위 생성 및 인덱스 재설정
    df.drop([0, 1, 2, 3], inplace=True)
    df.index = range(1, len(df)+1)
    df.index.name = ''
    df.reset_index(inplace=True)

    # 컬럼명 변경
    df.rename(columns = {'Unnamed: 1_level_1': 'TEAM',
                         'Unnamed: 2_level_1': 'W-L',
                         'Unnamed: 6_level_1': 'POINTS',},
                         inplace=True)

    for i in range(len(team_full)):
        df.replace(team_full[i], team_short[i], inplace=True)

    def path_to_image_html(path):
        return '<img src="/images/esports/lol/lck/'+ path + '-logo.png"/>'+ path

    df_1 = df.iloc[:5]
    df_2 = df.iloc[5:]
    
    df_1.to_html(f'./{league}-standings1.html', index=False, classes=f'{league}-standings', border=0, justify='center', formatters=dict(TEAM=path_to_image_html), escape=False)
    df_2.to_html(f'./{league}-standings2.html', index=False, classes=f'{league}-standings', border=0, justify='center', formatters=dict(TEAM=path_to_image_html), escape=False)

table('lck', 'https://lol.fandom.com/wiki/LCK/2023_Season/Summer_Season')

print('LCK standings done!')


# In[4]:


import pandas as pd
from bs4 import BeautifulSoup
import requests
pd.set_option('mode.chained_assignment',  None)

def list_chunk(lst, n):
    return [lst[i:i+n] for i in range(0, len(lst), n)]

def summer_23_matches(league, url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table', class_='wikitable')
    df = pd.read_html(str(table))[0]

    df.columns = df.columns.droplevel(0)
    df.drop(['P', 'SB', 'VOD'], axis=1, inplace=True)
    df.drop([0], inplace=True)
    df.reset_index(inplace=True, drop=True)

    titles = [span.get('title') for span in table.find_all('span') if span.get('title')]
    titles = list_chunk(titles, 5)
    teams = [a.get('title') for a in table.find_all('a') if a.get('title')]
    
    for i in range(0, len(df)):
        df['Blue'].loc[i] = teams[15*i+2]
        df['Red'].loc[i] = teams[15*i+3]
        df['Winner'].loc[i] = teams[15*i+4]

    for i in range(0, len(df)):
        df['Bans'].loc[i] = titles[4*i]
        df['Bans.1'].loc[i] = titles[4*i+1]
        df['Picks'].loc[i] = titles[4*i+2]
        df['Picks.1'].loc[i] = titles[4*i+3]

    for i in range(0, 5):
        df[f'blueBans{i+1}'] = df['Bans'].str[i]
        df[f'redBans{i+1}'] = df['Bans.1'].str[i]
        df[f'bluePicks{i+1}'] = df['Picks'].str[i]
        df[f'redPicks{i+1}'] = df['Picks.1'].str[i]

    df[[f'bluePlayer{i+1}' for i in range(5)]] = df['Blue Roster'].str.split(',', expand=True)
    df[[f'redPlayer{i+1}' for i in range(5)]] = df['Red Roster'].str.split(',', expand=True)

    df.drop(['Bans', 'Bans.1', 'Picks', 'Picks.1', 'Blue Roster', 'Red Roster' ], axis=1, inplace=True)
    #df['Blue'] = df['Blue'].astype('string')
    df=df.replace({'Dplus KIA': 'dk',
                   'Nongshim RedForce': 'ns',
                   'Hanwha Life Esports': 'hle',
                   'Liiv SANDBOX': 'lsb',
                   'T1': 't1',
                   'OKSavingsBank BRION': 'bro',
                   'BRION': 'bro',
                   'Gen.G': 'gen',
                   'DRX': 'drx',
                   'KT Rolster': 'kt',
                   'Kwangdong Freecs': 'kdf'
                   })
    
    df['Game'] = 1
    df['Match'] = ''
    df['Match'].loc[0] = 2
    df['Set'] = 1
    for i in range(0, len(df)-1):
        if df['Blue'].loc[i] == df['Blue'].loc[i+1] or df['Blue'].loc[i] == df['Red'].loc[i+1]:
            df['Game'].loc[i] = 0
    
    for i in range(0, len(df)-1):
        if df['Game'].loc[i] == 0:
            df['Match'].loc[i+1] = df['Match'].loc[i]
        elif df['Game'].loc[i] == 1:
            if df['Match'].loc[i] == 2:
                df['Match'].loc[i+1] = 1
            elif df['Match'].loc[i] == 1:
                df['Match'].loc[i+1] = 2

    for i in range(0, len(df)-1):     
        if df['Game'].loc[i] == 0:
            if df['Game'].loc[i+1] == 1: df['Set'].loc[i] = 2
            elif df['Game'].loc[i+1] == 0: df['Set'].loc[i] = 3
        elif df['Game'].loc[i] == 1: df['Set'].loc[i] = 1

    df['Coach1'] = 'Coach'
    df['Coach2'] = 'Coach'
    for i in range(0, len(df)):
        if df['Blue'].loc[i] == 't1': df['Coach1'].loc[i] = 'Bengi'
        elif df['Blue'].loc[i] == 'dk': df['Coach1'].loc[i] = 'Acorn'
        elif df['Blue'].loc[i] == 'ns': df['Coach1'].loc[i] = 'Irean'
        elif df['Blue'].loc[i] == 'hle': df['Coach1'].loc[i] = 'Kezman'
        elif df['Blue'].loc[i] == 'lsb': df['Coach1'].loc[i] = 'Ryu'
        elif df['Blue'].loc[i] == 'bro': df['Coach1'].loc[i] = 'Edgar'
        elif df['Blue'].loc[i] == 'gen': df['Coach1'].loc[i] = 'Score'
        elif df['Blue'].loc[i] == 'drx': df['Coach1'].loc[i] = 'Micro'
        elif df['Blue'].loc[i] == 'kt': df['Coach1'].loc[i] = 'Hirai'
        elif df['Blue'].loc[i] == 'kdf': df['Coach1'].loc[i] = 'CvMax'
        if df['Red'].loc[i] == 't1': df['Coach2'].loc[i] = 'Bengi'
        elif df['Red'].loc[i] == 'dk': df['Coach2'].loc[i] = 'Acorn'
        elif df['Red'].loc[i] == 'ns': df['Coach2'].loc[i] = 'Irean'
        elif df['Red'].loc[i] == 'hle': df['Coach2'].loc[i] = 'Kezman'
        elif df['Red'].loc[i] == 'lsb': df['Coach2'].loc[i] = 'Ryu'
        elif df['Red'].loc[i] == 'bro': df['Coach2'].loc[i] = 'Edgar'
        elif df['Red'].loc[i] == 'gen': df['Coach2'].loc[i] = 'Score'
        elif df['Red'].loc[i] == 'drx': df['Coach2'].loc[i] = 'Micro'
        elif df['Red'].loc[i] == 'kt': df['Coach2'].loc[i] = 'Hirai'
        elif df['Red'].loc[i] == 'kdf': df['Coach2'].loc[i] = 'CvMax'
    
    for i in range(0, len(df)):
        if df['Winner'].loc[i] == df['Blue'].loc[i]: df['Winner'].loc[i] = 1
        elif df['Winner'].loc[i] == df['Red'].loc[i]: df['Winner'].loc[i] = 2

    df = df[::-1]

    return df
    
df_spring_23 = summer_23_matches('lck', 'https://lol.fandom.com/wiki/LCK/2023_Season/Spring_Season/Match_History')
df_summer_23 = summer_23_matches('lck', 'https://lol.fandom.com/wiki/LCK/2023_Season/Summer_Season/Match_History')
df = pd.concat([df_spring_23,df_summer_23])
df.to_json(f'./lck/lck-matches.json', orient='records')


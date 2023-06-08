#!/usr/bin/env python
# coding: utf-8

# In[ ]:


print('Esports scraping ------------------')


# # LCK

# In[2]:


import requests
import pandas as pd

def table(league, url):
    response = requests.get(url)
    df = pd.read_html(response.text)

    df = df[16]
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

    # 팀명 변경
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠Dplus KIA', 'dk')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠Hanwha Life Esports', 'hle')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠Liiv SANDBOX', 'lsb')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠Nongshim RedForce', 'ns')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠T1', 't1')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠OKSavingsBank BRION', 'bro')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠Gen.G', 'gen')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠DRX', 'drx')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠KT Rolster', 'kt')
    df['TEAM'] = df['TEAM'].str.replace('⁠⁠Kwangdong Freecs', 'kdf')

    def path_to_image_html(path):
        return '<img src="/images/esports/lol/lck/'+ path + '-logo.png"/>'+ path

    df_1 = df.iloc[:5]
    df_2 = df.iloc[5:]

    df_1.to_html(f'./{league}-standings1.html', index=False, classes=f'{league}-standings', border=0, justify='center', formatters=dict(TEAM=path_to_image_html), escape=False)
    df_2.to_html(f'./{league}-standings2.html', index=False, classes=f'{league}-standings', border=0, justify='center', formatters=dict(TEAM=path_to_image_html), escape=False)


table('lck', 'https://lol.fandom.com/wiki/LCK/2023_Season/Summer_Season')

print('LCK standings done!')


# In[1]:


import requests
import pandas as pd

def table(league, url):
    response = requests.get(url)
    df = pd.read_html(response.text)

    df = df[4]
    df.columns = df.columns.droplevel(0)
    df.drop(['SB',
             'VOD',],
             axis=1, inplace=True)
    
    df.drop([0], inplace=True)

table('lck', 'https://lol.fandom.com/wiki/LCK/2023_Season/Summer_Season/Match_History')

print('LCK matches done!')


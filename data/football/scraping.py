#!/usr/bin/env python
# coding: utf-8

# https://deepnote.com/workspace/danielstpaul-8373ec8d-16a5-47d1-9624-c15bad391755/project/EPL-Web-Scraper-19f51d7b-ae79-4c51-906c-dee0138da144/notebook/epl_web_scraper-106afad12e774bf4a19d2faa3c39f0cd

# In[ ]:


print('Football scraping ------------------')


# # Europe

# In[1]:


import requests
import pandas as pd

def table(league, url):
    response = requests.get(url)
    df = pd.read_html(response.text)

    df[0].drop(['Pts/MP',
                'xG',
                'xGA',
                'xGD',
                'xGD/90',
                # 'Last 5',
                'Attendance',
                'Top Team Scorer',
                'Goalkeeper',
                'Notes',],
                axis=1, inplace=True)

    df[0].rename(columns = {'Rk':'순위',
                            'Squad':'팀',
                            'MP':'경기',
                            'W':'승',
                            'D':'무',
                            'L':'패',
                            'GF':'득점',
                            'GA':'실점',
                            'GD':'득실차',
                            'Pts':'승점'},
                            inplace=True)
    
    df[0].to_html(f'./europe/{league}-standings.html', index=False, classes=f'{league}-standings', border=0, justify='center')

table('premierleague', 'https://fbref.com/en/comps/9/Premier-League-Stats')
table('laliga', 'https://fbref.com/en/comps/12/La-Liga-Stats')
table('bundesliga', 'https://fbref.com/en/comps/20/Bundesliga-Stats')
table('seriea', 'https://fbref.com/en/comps/11/Serie-A-Stats')
table('ligue1', 'https://fbref.com/en/comps/13/Ligue-1-Stats')

print('Europe standings done!')


# In[2]:


import requests
import pandas as pd

def matches(league, url):
    response = requests.get(url)
    df = pd.read_html(response.text)

    df[0].drop(['Time',
                'Attendance',
                'Match Report',
                'xG',
                'xG.1',
                'Venue',
                'Referee',
                'Notes',],
                axis=1, inplace=True)
    df[0] = df[0].dropna()
    df[0]=df[0].astype({'Wk':'int64'})

    df[0].loc[df[0]['Home']=='Tottenham', 'Home'] = '토트넘'
    df[0].loc[df[0]['Away']=='Tottenham', 'Away'] = '토트넘'
    df[0].loc[df[0]['Home']=='Manchester City', 'Home'] = '맨시티'
    df[0].loc[df[0]['Away']=='Manchester City', 'Away'] = '맨시티'
    df[0].loc[df[0]['Home']=='Manchester Utd', 'Home'] = '맨유'
    df[0].loc[df[0]['Away']=='Manchester Utd', 'Away'] = '맨유'
    df[0].loc[df[0]['Home']=='West Ham', 'Home'] = '웨스트햄'
    df[0].loc[df[0]['Away']=='West Ham', 'Away'] = '웨스트햄'
    df[0].loc[df[0]['Home']=='Wolves', 'Home'] = '울버햄튼'
    df[0].loc[df[0]['Away']=='Wolves', 'Away'] = '울버햄튼'
    df[0].loc[df[0]['Home']=='Leicester City', 'Home'] = '레스터'
    df[0].loc[df[0]['Away']=='Leicester City', 'Away'] = '레스터'
    df[0].loc[df[0]['Home']=='Leeds United', 'Home'] = '리즈'
    df[0].loc[df[0]['Away']=='Leeds United', 'Away'] = '리즈'
    df[0].loc[df[0]['Home']=='Newcastle Utd', 'Home'] = '뉴캐슬'
    df[0].loc[df[0]['Away']=='Newcastle Utd', 'Away'] = '뉴캐슬'
    df[0].loc[df[0]['Home']=='Southampton', 'Home'] = '사우샘프턴'
    df[0].loc[df[0]['Away']=='Southampton', 'Away'] = '사우샘프턴'
    df[0].loc[df[0]['Home']=='Everton', 'Home'] = '에버턴'
    df[0].loc[df[0]['Away']=='Everton', 'Away'] = '에버턴'
    df[0].loc[df[0]['Home']=='Aston Villa', 'Home'] = '아스톤 빌라'
    df[0].loc[df[0]['Away']=='Aston Villa', 'Away'] = '아스톤 빌라'
    df[0].loc[df[0]['Home']=='Arsenal', 'Home'] = '아스널'
    df[0].loc[df[0]['Away']=='Arsenal', 'Away'] = '아스널'
    df[0].loc[df[0]['Home']=='Chelsea', 'Home'] = '첼시'
    df[0].loc[df[0]['Away']=='Chelsea', 'Away'] = '첼시'
    df[0].loc[df[0]['Home']=='Liverpool', 'Home'] = '리버풀'
    df[0].loc[df[0]['Away']=='Liverpool', 'Away'] = '리버풀'
    df[0].loc[df[0]['Home']=='Brighton', 'Home'] = '브라이튼'
    df[0].loc[df[0]['Away']=='Brighton', 'Away'] = '브라이튼'
    df[0].loc[df[0]['Home']=='Burnley', 'Home'] = '번리'
    df[0].loc[df[0]['Away']=='Burnley', 'Away'] = '번리'
    df[0].loc[df[0]['Home']=='Crystal Palace', 'Home'] = '크리스탈 팰리스'
    df[0].loc[df[0]['Away']=='Crystal Palace', 'Away'] = '크리스탈 팰리스'
    df[0].loc[df[0]['Home']=='Fulham', 'Home'] = '풀럼'
    df[0].loc[df[0]['Away']=='Fulham', 'Away'] = '풀럼'
    df[0].loc[df[0]['Home']=='Sheffield Utd', 'Home'] = '셰필드'
    df[0].loc[df[0]['Away']=='Sheffield Utd', 'Away'] = '셰필드'
    df[0].loc[df[0]['Home']=='West Brom', 'Home'] = '웨스트 브롬'
    df[0].loc[df[0]['Away']=='West Brom', 'Away'] = '웨스트 브롬'
    df[0].loc[df[0]['Home']=='Bournemouth', 'Home'] = '본머스'
    df[0].loc[df[0]['Away']=='Bournemouth', 'Away'] = '본머스'
    df[0].loc[df[0]['Home']=='Watford', 'Home'] = '왓포드'
    df[0].loc[df[0]['Away']=='Watford', 'Away'] = '왓포드'
    df[0].loc[df[0]['Home']=='Norwich City', 'Home'] = '노리치'
    df[0].loc[df[0]['Away']=='Norwich City', 'Away'] = '노리치'
    df[0].loc[df[0]['Home']=='Cardiff City', 'Home'] = '카디프'
    df[0].loc[df[0]['Away']=='Cardiff City', 'Away'] = '카디프'
    df[0].loc[df[0]['Home']=='Huddersfield', 'Home'] = '허더즈필드'
    df[0].loc[df[0]['Away']=='Huddersfield', 'Away'] = '허더즈필드'
    df[0].loc[df[0]['Home']=='Brighton', 'Home'] = '브라이튼'
    df[0].loc[df[0]['Away']=='Brighton', 'Away'] = '브라이튼'
    df[0].loc[df[0]['Home']=='Brentford', 'Home'] = '브렌트포드'
    df[0].loc[df[0]['Away']=='Brentford', 'Away'] = '브렌트포드'
    df[0].loc[df[0]['Home']=='Bristol City', 'Home'] = '브리스톨'
    df[0].loc[df[0]['Away']=='Bristol City', 'Away'] = '브리스톨'
    df[0].loc[df[0]['Home']=='Barnsley', 'Home'] = '반즐리'
    df[0].loc[df[0]['Away']=='Barnsley', 'Away'] = '반즐리'
    df[0].loc[df[0]['Home']=='Swansea City', 'Home'] = '스완지'
    df[0].loc[df[0]['Away']=='Swansea City', 'Away'] = '스완지'
    df[0].loc[df[0]['Home']=="Nott'ham Forest", 'Home'] = '노팅엄'
    df[0].loc[df[0]['Away']=="Nott'ham Forest", 'Away'] = '노팅엄'
    df[0].loc[df[0]['Home']=='Preston NE', 'Home'] = '프레스턴'
    df[0].loc[df[0]['Away']=='Preston NE', 'Away'] = '프레스턴'

    df[0].to_json(f'./europe/{league}-matches.json', orient='records')#, classes=f'{league}-matches', border=0, justify='center')

matches('premierleague', 'https://fbref.com/en/comps/9/schedule/Premier-League-Scores-and-Fixtures')
matches('laliga', 'https://fbref.com/en/comps/12/schedule/La-Liga-Scores-and-Fixtures')
matches('bundesliga', 'https://fbref.com/en/comps/20/schedule/Bundesliga-Scores-and-Fixtures')
matches('seriea', 'https://fbref.com/en/comps/11/schedule/Serie-A-Scores-and-Fixtures')
matches('ligue1', 'https://fbref.com/en/comps/13/schedule/Ligue-1-Scores-and-Fixtures')

print('Europe matches done!')


# # Asia

# In[3]:


import requests
import pandas as pd

def table(league, url):
    response = requests.get(url)
    df = pd.read_html(response.text)

    df[0].drop(['Pts/MP',
                'Last 5',
                'Attendance',
                'Top Team Scorer',
                'Goalkeeper',
                'Notes',],
                axis=1, inplace=True)
    
    df[0].dropna(axis=0, inplace=True)

    df[0]=df[0].astype({'Rk':'int64',
                        'MP':'int64',
                        'W':'int64',
                        'D':'int64',
                        'L':'int64',
                        'GF':'int64',
                        'GA':'int64',
                        'GD':'int64',
                        'Pts':'int64'})
    
    df[0].rename(columns = {'Rk':'순위',
                            'Squad':'팀',
                            'MP':'경기',
                            'W':'승',
                            'D':'무',
                            'L':'패',
                            'GF':'득점',
                            'GA':'실점',
                            'GD':'득실차',
                            'Pts':'승점'},
                            inplace=True)
    
    df[0].loc[df[0]['팀']=='Ulsan Hyundai', '팀'] = '울산 현대'
    df[0].loc[df[0]['팀']=='Jeonbuk', '팀'] = '전북 현대'
    df[0].loc[df[0]['팀']=='Suw Bluewings', '팀'] = '수원 삼성'
    df[0].loc[df[0]['팀']=='Daegu', '팀'] = '대구 FC'
    df[0].loc[df[0]['팀']=='Pohang', '팀'] = '포항 스틸러스'
    df[0].loc[df[0]['팀']=='Gangwon', '팀'] = '강원 FC'
    df[0].loc[df[0]['팀']=='FC Seoul', '팀'] = 'FC 서울'
    df[0].loc[df[0]['팀']=='Jeju United FC', '팀'] = '제주 유나이티드'
    df[0].loc[df[0]['팀']=='Incheon United', '팀'] = '인천 유나이티드'
    df[0].loc[df[0]['팀']=='Gwangju FC', '팀'] = '광주 FC'
    df[0].loc[df[0]['팀']=='Seongnam FC', '팀'] = '성남 FC'
    df[0].loc[df[0]['팀']=='Sangju Sangmu', '팀'] = '상주 상무'
    df[0].loc[df[0]['팀']=='Busan IPark', '팀'] = '부산 아이파크'
    df[0].loc[df[0]['팀']=='Suwon FC', '팀'] = '수원 FC'
    df[0].loc[df[0]['팀']=='Daejeon Citizen FC', '팀'] = '대전 시티즌'
    df[0].loc[df[0]['팀']=='Ansan Greeners', '팀'] = '안산 그리너스'
    df[0].loc[df[0]['팀']=='Chungnam Asan FC', '팀'] = '충남 아산 FC'
    df[0].loc[df[0]['팀']=='Jeonnam Dragons', '팀'] = '전남 드래곤즈'
    df[0].loc[df[0]['팀']=='Bucheon 1995', '팀'] = '부천 FC 1995'
    df[0].loc[df[0]['팀']=='Gyeongnam FC', '팀'] = '경남 FC'
    df[0].loc[df[0]['팀']=='Seoul E-Land FC', '팀'] = '서울 이랜드'
    df[0].loc[df[0]['팀']=='Anyang', '팀'] = '안양 FC'
    df[0].loc[df[0]['팀']=='Gyeongnam', '팀'] = '경남 FC'
    df[0].loc[df[0]['팀']=='Gyeongju HNP', '팀'] = '경주 한국프로축구단'
    df[0].loc[df[0]['팀']=='Gimcheon Sangmu', '팀'] = '김천 상무'

    df[0].to_html(f'./asia/{league}-standings.html', index=False, classes=f'{league}-standings', border=0, justify='center')

table('kleague1', 'https://fbref.com/en/comps/55/K-League-1-Stats')

print('Asia standings done!')


# In[1]:


import requests
import pandas as pd

def matches(league, url):
    response = requests.get(url)
    df = pd.read_html(response.text)

    df[0].drop(['Time',
                'Attendance',
                'Match Report',
                'Venue',
                'Referee',
                'Notes',],
                axis=1, inplace=True)
    df[0] = df[0].dropna()
    df[0]=df[0].astype({'Wk':'int64'})

    df[0].loc[df[0]['Home']=='Ulsan Hyundai', 'Home'] = '울산 현대'
    df[0].loc[df[0]['Away']=='Ulsan Hyundai', 'Away'] = '울산 현대'
    df[0].loc[df[0]['Home']=='Jeonbuk', 'Home'] = '전북 현대'
    df[0].loc[df[0]['Away']=='Jeonbuk', 'Away'] = '전북 현대'
    df[0].loc[df[0]['Home']=='Suw Bluewings', 'Home'] = '수원 삼성'
    df[0].loc[df[0]['Away']=='Suw Bluewings', 'Away'] = '수원 삼성'
    df[0].loc[df[0]['Home']=='Daegu', 'Home'] = '대구 FC'
    df[0].loc[df[0]['Away']=='Daegu', 'Away'] = '대구 FC'
    df[0].loc[df[0]['Home']=='Pohang', 'Home'] = '포항 스틸러스'
    df[0].loc[df[0]['Away']=='Pohang', 'Away'] = '포항 스틸러스'
    df[0].loc[df[0]['Home']=='Gangwon', 'Home'] = '강원 FC'
    df[0].loc[df[0]['Away']=='Gangwon', 'Away'] = '강원 FC'
    df[0].loc[df[0]['Home']=='FC Seoul', 'Home'] = 'FC 서울'
    df[0].loc[df[0]['Away']=='FC Seoul', 'Away'] = 'FC 서울'
    df[0].loc[df[0]['Home']=='Jeju United FC', 'Home'] = '제주 유나이티드'
    df[0].loc[df[0]['Away']=='Jeju United FC', 'Away'] = '제주 유나이티드'
    df[0].loc[df[0]['Home']=='Incheon United', 'Home'] = '인천 유나이티드'
    df[0].loc[df[0]['Away']=='Incheon United', 'Away'] = '인천 유나이티드'
    df[0].loc[df[0]['Home']=='Gwangju FC', 'Home'] = '광주 FC'
    df[0].loc[df[0]['Away']=='Gwangju FC', 'Away'] = '광주 FC'
    df[0].loc[df[0]['Home']=='Seongnam FC', 'Home'] = '성남 FC'
    df[0].loc[df[0]['Away']=='Seongnam FC', 'Away'] = '성남 FC'
    df[0].loc[df[0]['Home']=='Sangju Sangmu', 'Home'] = '상주 상무'
    df[0].loc[df[0]['Away']=='Sangju Sangmu', 'Away'] = '상주 상무'
    df[0].loc[df[0]['Home']=='Busan IPark', 'Home'] = '부산 아이파크'
    df[0].loc[df[0]['Away']=='Busan IPark', 'Away'] = '부산 아이파크'
    df[0].loc[df[0]['Home']=='Suwon FC', 'Home'] = '수원 FC'
    df[0].loc[df[0]['Away']=='Suwon FC', 'Away'] = '수원 FC'
    df[0].loc[df[0]['Home']=='Daejeon Citizen FC', 'Home'] = '대전 시티즌'
    df[0].loc[df[0]['Away']=='Daejeon Citizen FC', 'Away'] = '대전 시티즌'
    df[0].loc[df[0]['Home']=='Ansan Greeners', 'Home'] = '안산 그리너스'
    df[0].loc[df[0]['Away']=='Ansan Greeners', 'Away'] = '안산 그리너스'
    df[0].loc[df[0]['Home']=='Chungnam Asan FC', 'Home'] = '충남 아산 FC'
    df[0].loc[df[0]['Away']=='Chungnam Asan FC', 'Away'] = '충남 아산 FC'
    df[0].loc[df[0]['Home']=='Jeonnam Dragons', 'Home'] = '전남 드래곤즈'
    df[0].loc[df[0]['Away']=='Jeonnam Dragons', 'Away'] = '전남 드래곤즈'
    df[0].loc[df[0]['Home']=='Bucheon 1995', 'Home'] = '부천 FC 1995'
    df[0].loc[df[0]['Away']=='Bucheon 1995', 'Away'] = '부천 FC 1995'
    df[0].loc[df[0]['Home']=='Gyeongnam FC', 'Home'] = '경남 FC'
    df[0].loc[df[0]['Away']=='Gyeongnam FC', 'Away'] = '경남 FC'
    df[0].loc[df[0]['Home']=='Seoul E-Land FC', 'Home'] = '서울 이랜드'
    df[0].loc[df[0]['Away']=='Seoul E-Land FC', 'Away'] = '서울 이랜드'
    df[0].loc[df[0]['Home']=='Anyang', 'Home'] = '안양 FC'
    df[0].loc[df[0]['Away']=='Anyang', 'Away'] = '안양 FC'
    df[0].loc[df[0]['Home']=='Gyeongju HNP', 'Home'] = '경주 한국프로축구단'
    df[0].loc[df[0]['Away']=='Gyeongju HNP', 'Away'] = '경주 한국프로축구단'
    df[0].loc[df[0]['Home']=='Gimcheon Sangmu', 'Home'] = '김천 상무'
    df[0].loc[df[0]['Away']=='Gimcheon Sangmu', 'Away'] = '김천 상무'

    df[0].to_json(f'./asia/{league}-matches.json', orient='records')

matches('kleague1', 'https://fbref.com/en/comps/55/schedule/K-League-1-Scores-and-Fixtures')

print('Asia matches done!')


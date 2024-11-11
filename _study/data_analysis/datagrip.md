---
layout: posts
title: "DataGrip"
category: data_analysis

---

# DataGrip 설치

DataGrip은 JetBrains사에서 만든 데이터베이스 관리 툴이다. 데이터베이스 관리를 위한 툴은 많이 있지만, 내가 가장 선호하는 것은 DataGrip이다.

원래는 유료인데, 학생이라면 학생용 라이센스를 받아 무료로 사용할 수 있다.

[https://www.jetbrains.com/community/education/#students](https://www.jetbrains.com/community/education/#students){:target="_blank"}에서 학생용 라이센스를 신청할 수 있다.

라이센스를 받았다면, [https://www.jetbrains.com/ko-kr/products/download](https://www.jetbrains.com/ko-kr/products/download){:target="_blank"}에서 DataGrip을 다운로드 받아 설치하자.

설치가 완료 후, DataGrip을 실행하고, 로그인 하면 라이센스가 자동으로 등록된다.

# 데이터베이스 연결

DataGrip을 실행하고, `Database`를 클릭하면 데이터베이스를 연결할 수 있는 창이 나온다.

`+` 버튼을 클릭하고, `Data Source`를 선택하면 데이터베이스 종류를 선택할 수 있다.

우선 누락된 드라이버를 설치한다.

데이터베이스 종류를 선택하고, `호스트`, `포트`, `사용자`, `비밀번호`, `데이터베이스`를 입력한 후 연결 테스트를 눌러보자.

외부 서버의 데이터베이스를 연결할 때는 SSH 터널링을 설정할 수 있다.

# 데이터베이스 탐색

데이터베이스를 연결하면, 데이터베이스 탐색기에서 데이터베이스의 구조를 볼 수 있다.

눈 모양 아이콘을 클릭하고 `데이터베이스 및 스키마`를 활성화하자.

# 쿼리 실행

쿼리를 실행하려면, 데이터베이스를 선택한 후 `Ctrl + Shift + Q`를 눌러 `쿼리 콘솔`을 열거나,

`SQL 파일`을 만들어, 쿼리를 실행, 저장할 수 있다.

쿼리 결과는 하단에 나타난다.

<img class="modal" src="/study/data_analysis/images/datagrip-1.png" alt=""/>

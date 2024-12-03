var store = [{
        "title": "6G 동향",
        "excerpt":"5G 서비스는 과도기라는 말을 들을 정도로 어려움을 겪었다. 통신사들 자체의 서비스적인 측면을 떠나서 한국의 경우 이미 4G에 대한 만족도가 높은 상황에서 5G에 큰 메리트를 느끼기 어려웠다 라고 볼 수 있을 것 같다. 4G가 상용화 되면서 OTT나 Youtube 같은 서비스들이 사용자들에게 새로운 경험을 선사했는데, 5G는 아직까지도 대다수의 사람들에게 신선함을 주는 대표적인...","categories": ["blog"],
        "tags": [],
        "url": "/blog/2024-02-22-6g-%EB%8F%99%ED%96%A5/",
        "teaser": null
      },{
        "title": "AI-RAN Alliance",
        "excerpt":"2024 MWC에서 삼성전자, 엔비디아(Nvidia), 암(Arm), 소프트뱅크(SoftBank), 에릭슨(Ericsson), 노키아(Nokia), 마이크로소프트(Microsoft), 미국 노스이스턴대학 등 통신 및 소프트웨어 기업 10개사와 1개 대학이 모여 ‘AI-RAN Alliance’를 공식 출범했다. 주요 통신 장비 제조업체들이 모여 AI 경쟁력을 강화하고 본격적으로 6G에 대비하기 위한 움직임으로 보인다. ‘AI-RAN Alliance’는 ‘AI for RAN’, ‘AI and RAN’, ‘AI on RAN’ 이렇게...","categories": ["blog"],
        "tags": [],
        "url": "/blog/2024-03-02-ai-ran/",
        "teaser": null
      },{
        "title": "GISC 2024",
        "excerpt":"11월 4일 부터 6일 까지 3일간 서울 엘타워에서 GISC가 열렸다. 일정 상 두번째 날만 참석을 했는데, 듣지 못한 세션들은 유튜브에 올라오길 기다리고 있다. 차세대통신: 인공지능과 함께 진화하는 미래 통신 사실 이 세션을 듣기 위해 GISC에 참석했다 해도 과언이 아니다. 구글 검색만으로는 최신 정보를 완벽히 얻기 어렵기 때문에, 현직 전문가들에게 직접...","categories": ["blog"],
        "tags": [],
        "url": "/blog/2024-11-11-gisc-2024/",
        "teaser": null
      },{
        "title": "이건희 에세이: 생각 좀 하며 세상을 보자",
        "excerpt":"  ","categories": ["blog"],
        "tags": [],
        "url": "/blog/2024-12-03-%EC%9D%B4%EA%B1%B4%ED%9D%AC-%EC%97%90%EC%84%B8%EC%9D%B4/",
        "teaser": null
      },{
        "title": "AIMLFW 환경설정",
        "excerpt":"1. 우분투 환경설정 우분투 설치 완료되면 sudo apt-get update &amp;&amp; sudo apt-get upgrade sudo apt-get install htop htop도 설치해준다. 하도 램 부족 문제를 많이 겪어서 htop은 일단 깔아놓자. 다음으로는 Anaconda를 설치해준다. Anaconda 설치가 필수는 아니지만, 개인적으로는 Anaconda 있는게 훨씬 편하기 때문에, 거의 무조건 설치해주자. wget https://repo.anaconda.com/archive/Anaconda3-2024.06-1-Linux-x86_64.sh # 최신 버전으로 바꿔주자....","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/1/",
        "teaser": null
      },{
        "title": "InfluxDB 사용하기",
        "excerpt":"1. InfluxDB 설치 우선 pod를 생성해준다. helm repo add bitnami https://charts.bitnami.com/bitnami helm install my-release bitnami/influxdb --version 5.13.5 잘 설치되었으면 InfluxDB token을 가져온다. token을 환경변수로 저장해두자. kubectl get secret -n default my-release-influxdb -o jsonpath=\"{.data.admin-user-token}\" | base64 --decode ; echo echo 'export INFLUXDB_TOKEN=&lt;TOKEN&gt;' &gt;&gt; ~/.bashrc source ~/.bashrc 다음으로 Bucket을 만들어준다. kubectl exec...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/2/",
        "teaser": null
      },{
        "title": "모델 학습 pipeline 구축하기",
        "excerpt":"‘Completed’ 상태 파드 일괄 삭제하기   kubectl delete pod --field-selector=status.phase==Succeeded --all-namespaces   ‘Error’ 상태 파드 일괄 삭제하기   kubectl delete pod --field-selector=status.phase==Failed --all-namespaces   ","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/3/",
        "teaser": null
      },{
        "title": "Kserve를 통해 모델 배포하기",
        "excerpt":"Documentation: Install Kserve 위 링크를 참고하여 Kserve를 설치하고 모델을 배포해보자. 아래 내용은 위 링크를 참고하여 작성되었다. Kserve 설치 aimlfw-dep 디렉토리로 가서 bin/install-kserve.sh QoE 모델 배포 먼저 네임스페이스를 생성한다. kubectl create namespace kserve-test qoe.yaml 파일을 생성해서 아래 내용을 넣어준다. apiVersion: \"serving.kserve.io/v1beta1\" kind: \"InferenceService\" metadata: name: qoe-model spec: predictor: tensorflow: storageUri: \"&lt;update...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/4/",
        "teaser": null
      },{
        "title": "Usecase: UAV Path Prediction",
        "excerpt":"데이터 넣기 우선 Bucket을 생성해준다. kubectl exec -it &lt;INFLUXDB_POD_NAME&gt; -- influx bucket create -n UAVData -o primary -t $INFLUXDB_TOKEN UAV_insert.py를 이용해 데이터를 넣어준다. python3 UAV_insert.py # 파일 내 파일 경로, 토큰을 수정해주어야 함 모델 학습 Jupyter Notebook(http://localhost:32088)에 접속하여 UAV_pipeline.ipynb를 실행하여, pipeline을 구축한다. Dashboard(http://localhost:32005)에서 Feature Group을 생성하고, Training Job을 통해 모델을...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/5/",
        "teaser": null
      },{
        "title": "Debug Pod 생성하기",
        "excerpt":"Debug Pod 필요성 모델을 배포하고 나서, 모델이 잘 동작하는지 확인해야 하는 등 모델 학습을 직접 실행할 수 있는 Debug Pod를 만들어보았다. 가장 큰 이유는 처음부터 완벽하게 코드를 짜는것이 아니면 계속 training job을 실행하고, 로그를 확인해야하는 불편함이 있어서다. Debug Pod 생성 우선 Debug-pod 레포지토리를 클론한다. git clone https://github.com/sodyn99/aimlfw-debugging.git Debugging 그리고 config/debug-pod-template.yaml...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/6/",
        "teaser": null
      },{
        "title": "Gerrit Review",
        "excerpt":"환경 설정 Git review를 설치해준다. sudo apt-get update &amp;&amp; sudo apt-get install git git-review Git config 설정을 해주고, git config --global user.name \"&lt;NAME&gt;\" git config --global user.email \"&lt;EMAIL&gt;\" Gerrit에 접속하기 위해 SSH key를 생성해준다. ssh-keygen -t rsa -b 4096 -C \"&lt;EMAIL&gt;\" ~/.ssh에 생성된 id_rsa.pub를 복사하여 Gerrit에 등록해준다. Gerrit에 접속해 ssh...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/7/",
        "teaser": null
      },{
        "title": "Cassandra 데이터 정렬 문제 - 1",
        "excerpt":"AIMLFW를 통해 모델을 학습시키는데, 성능이 예상에 크게 미치지 못하는 문제가 계속 생겼다. 분명 로컬에서 수행한 코드와 동일한 코드를 AIMLFW를 통해 수행했는데, 성능이 훨씬 떨어지는 것이었다. Debug-Pod를 통해 코드(get_data.ipynb)를 실행해보니 feature store sdk에서 받아오는 데이터와 InfluxDB에 넣은 데이터가 다르다는 것을 확인할 수 있었다. InfluxDB에서 데이터를 받아올 때는 동일한 데이터를 받아왔는데, feature...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/8/",
        "teaser": null
      },{
        "title": "Cassandra 데이터 정렬 문제 - 2",
        "excerpt":"Jira 이슈 이전에 설명한 Cassandra 데이터를 가져올 때의 문제에 대한 이슈를 Jira에 등록했고, 답변을 받았다. 커미터 분들이 처음에는 데이터 정렬이 꼭 필요한지에 대한 의문을 제기하셨다. 이에 대해 데이터 정렬이 필요한 이유에 대해 설명했고, 시계열 데이터의 LSTM 모델 사용에 있어서 데이터 정렬이 필요하다는 것에 동의하셨다. 정렬 방식의 경우 __Id를 기준으로 정렬하는...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/9/",
        "teaser": null
      },{
        "title": "Cassandra 데이터 정렬 문제 - 3",
        "excerpt":"2편에서 다루었었던 내용을 보면 정수형 데이터 __Id를 Clustering Key로 설정했었다. Jira에 커미터분께서 _time과 같은 시간 데이터를 Clustering Key로 설정하는 것이 어떤가 하는 의견을 주셨다. _time 받아오기 Dataextraction의 기존 SQLTransform.py에서는 사용자가 선언한 Features만 받아오게 되어있다. 여기에 _time을 받아오는 코드를 추가해주었다. q_features = \"`_time`,\" 아래와 같이 _time 데이터를 성공적으로 받아온 것을 확인할...","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/a/",
        "teaser": null
      },{
        "title": "Federated Learning framework 개발",
        "excerpt":" ","categories": ["aimlfw"],
        "tags": [],
        "url": "/projects/aimlfw/b/",
        "teaser": null
      },{
        "title": "Bluetooth 역사",
        "excerpt":"Bluetooth는 에릭슨, 인텔, IBM, 노키아, 도시바 이렇게 5개의 회사들이 모여 Bluetooth SIG를 설립하면서 시작되었다. Bluetooth 1.0의 경우 IEEE 802.15.1 표준에도 등록이 되어있는데, 그 이후 버전들은 모두 Bluetooth SIG에서 표준화 하고있다. 현재(2024.02)까지 Bluetooth 5.4까지 표준이 제정되어있다. Bluetooth 역사에서 빠질 수 없는 중요한 사건(?)은 Bluetooth 4.0부터 등장한 Bluetooth Low Energy(이하 BLE)라고 할...","categories": ["bluetooth"],
        "tags": [],
        "url": "/projects/bluetooth/1/",
        "teaser": null
      },{
        "title": "Bluetooth 세대별 특징",
        "excerpt":"Bluetooth 1 GFSK 변조 방식을 이용해 최대 1 Mbps, 실제로는 0.7 Mbps의 전송속도와 최대 10 m의 전파 범위를 지원한다. Bluetooth 2 Bluetooth 2.0은 2004년 3월에 발표되었다. 기존에 사용하던 GFSK 변좡식을 그대로 사용할 경우 1 Mbps의 전송속도를 유지하지만, Enhanced Data Rate(EDR)을 통해 최대 3 Mbps, 실제로는 2.1 Mbps의 속도가 지원된다. EDR은...","categories": ["bluetooth"],
        "tags": [],
        "url": "/projects/bluetooth/2/",
        "teaser": null
      },{
        "title": "Bluetooth 관련 법규",
        "excerpt":"블루투스는 무선장치이기 때문에 탑재제품은 판매할 각 나라의 전파법규에 규정되어 있는 법규와 규제를 준수하고 승인을 받아야 한다. 직접 신청해도 되지만, 여러 대행 업체들이 있으니 대행 업체를 알아보는 것도 좋은 방법이다. 한국 우선 한국은 KC 전자파적합성인증제도가 있다. 블루투스 제품의 경우, 기존의 ‘적합인증’에서 ‘지정시험기관 적합등록’으로 완화되었다. ‘지정시험기관 적합등록’의 경우 적합인증 대상이 아닌 방송통신기자재등을...","categories": ["bluetooth"],
        "tags": [],
        "url": "/projects/bluetooth/3/",
        "teaser": null
      },{
        "title": "Bluetooth 다중 연결",
        "excerpt":"Bluetooth 기기 여러 대를 동시에 연결할 수 있을까? Bluetooth를 일상생활에서 항상 활용하는 여러분들도 아마 매번 헷갈려하는 문제일 것이다. 여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다. Blueooth 제품을 만들기 앞서 다중 연결 여부를 고려하는 것은 중요하다. 다중 연결이 필요할 경우 고려해야...","categories": ["bluetooth"],
        "tags": [],
        "url": "/projects/bluetooth/4/",
        "teaser": null
      },{
        "title": "Bluetooth Simulation",
        "excerpt":" ","categories": ["bluetooth"],
        "tags": [],
        "url": "/projects/bluetooth/5/",
        "teaser": null
      },{
        "title": "합격후기",
        "excerpt":"SKT AI Fellowship은 SKT에서 AI기술 분야 실무 과제 프로그램으로 AI 기술/개발에 관심있는 학부생 및 대학원생 누구나 지원할 수 있다! 나는 이번 6기 연구과제 중 5G 관련 과제인 5G Green AI Algorithm 개발에 연구실 동료들과 팀을 이루어 지원하였다. 실제 SKT 기지국 데이터를 사용해 AI 알고리즘을 개발할 수 있다는 것이 매력적이었다. 우선...","categories": ["fellowship"],
        "tags": [],
        "url": "/projects/fellowship/1/",
        "teaser": null
      },{
        "title": "프로젝트",
        "excerpt":" ","categories": ["fellowship"],
        "tags": [],
        "url": "/projects/fellowship/2/",
        "teaser": null
      },{
        "title": "수료식",
        "excerpt":"  관련 기사                                                                                                                           ","categories": ["fellowship"],
        "tags": [],
        "url": "/projects/fellowship/3/",
        "teaser": null
      },{
        "title": "5G 개요",
        "excerpt":"                                                      표준화                                                 기본 철학                                 ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/1/",
        "teaser": null
      },{
        "title": "표준화",
        "excerpt":"표준화 표준화 단체는 크게 2가지로 알면 된다. 바로 ITU와 3GPP이다. ITU는 국제전기통신연합으로 유엔 산하의 국제 기구다. 기술 표준을 제정하는 것 뿐만 아니라 주파수 관리, 위성 관리, 개발도상국 기술 지원 등의 역할을 하고 있다. 3GPP는 유럽의 ETSI, 일본의 TTC, 중국의 CCSA, 한국의 TTA, 미국의 ATIS가 연합하여 설립한 국제 표준화 단체이다. 3GPP의...","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/1/1/",
        "teaser": null
      },{
        "title": "기본 철학",
        "excerpt":"1. 높은 주파수 대역 넓은 대역폭을 위해 mmWave를 사용. &#8618; 높은 대역 But! mmWave를 사용하면, pathloss &uarr; cell coverage &darr; 해결? MIMO, Beamforming, 낮은 주파수 대역과 협력 운용. 2. Ultra-Lean 'Always-on' 신호를 줄이기 위함. always-on? 사용자 트래픽에 상관없이 전송되는 신호(e.g. 기지국 감지 신호, 브로드캐스트 신호, 항상 켜져있는 레퍼런스 시그널 등)....","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/1/2/",
        "teaser": null
      },{
        "title": "5G 개념",
        "excerpt":"                                                      주파수                                                 Sequence                                 ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/2/",
        "teaser": null
      },{
        "title": "주파수",
        "excerpt":" ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/2/1/",
        "teaser": null
      },{
        "title": "Sequence",
        "excerpt":"Sequence 통신 공부를 하며 책에서 자꾸 ‘sequnece’ 거리는데 이게 정확히 뭐지 싶을 때가 있다. 뭐 없을 수도 있다. 아무튼 이 sequence는 수열이니까 말그대로 수를 나열한건데, 예를 들어 reference signal이 그냥 만들어 지는 것은 아닐 것이다. Sequnece generator로 reference signal을 만든 다음 적절한 resource 할당과 매핑 과정을 거쳐 전송이 될 것이다....","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/2/2/",
        "teaser": null
      },{
        "title": "시스템 구조",
        "excerpt":"전체적인 네트워크 구조는 RAN과 Core로 나눠진다.      RAN은 단말과 무선 네트워크 간의 인터페이스 제공, 무선 자원 관리, 단말의 이동성 관리 등을 담당하며, Core는     Reference     최성남, 안철주, 육영수, “기업의 DX와 5G”, 에이콘출판(2023), p. 1-519  ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/3/",
        "teaser": null
      },{
        "title": "전송 구조",
        "excerpt":" ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/4/",
        "teaser": null
      },{
        "title": "채널 사운딩",
        "excerpt":" ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/5/",
        "teaser": null
      },{
        "title": "Transport 채널 프로세싱",
        "excerpt":"PHY와 MAC 레이어 사이에 위치하는 레이어를 Transport 레이어라고 한다. 즉 Transport 채널 프로세싱이라는 것은 MAC 계층에서 내려온 데이터를 PHY 단으로 내보내기 위한 (혹은 그 반대) 일종의 가공 과정이라고 할 수 있겠다.    ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/6/",
        "teaser": null
      },{
        "title": "PHY Control 시그널링",
        "excerpt":"                                                      Downlink                                                 Uplink                                 ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/7/",
        "teaser": null
      },{
        "title": "Downlink",
        "excerpt":" ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/7/1/",
        "teaser": null
      },{
        "title": "Uplink",
        "excerpt":"Uplink Control Information(UCI) Uplink Control을 위한 UCI는 3가지로 볼 수 있다. 단말이 수신한 DL-SCH 전송 블록에 대한 응답인 HARQ Ack/Nack, 단말이 UL-SCH 전송을 위해 Uplink 자원을 요청할 때 보내는 Scheduling Request(SR), 단말이 기지국으로 보내는 Downlink 채널에 대한 채널 상태 보고(CSI Report)가 그것이다. UCI는 PUCCH 또는 PUSCH를 통해 전송된다. DCI의 경우에는...","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/5g/7/2/",
        "teaser": null
      },{
        "title": "ns3 개요",
        "excerpt":"ns3 는 오픈소스 네트워크, 패킷 레벨 시뮬레이터 이다.   기본적으로 C++을 기반으로 하고 있고, discrete-event 네트워크 시뮬레이터이기 때문에 연속된 시간을 시뮬레이션 하는것이 아닌, 지정된 시간에 실행되도록 예약된 이벤트를 추적한다.   자세한 내용은 매뉴얼[1]을 참고하자.     Reference      ns-3.41 Manual  ","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/ns3/1/",
        "teaser": null
      },{
        "title": "ns3 설치",
        "excerpt":"1. Ubuntu 설치 2. ns-3 다운로드 * 최신 버전은 ns-3 공식 문서를 참고하여 다운로드 받길 바란다. ns-3.33 버전 문서[1]를 바탕으로 진행. 필수구성요소 Prerequisite Package/version Code Current version C++ 컴파일러 clang++ 또는 g++(4.9 버전 이상) sudo apt install g++ 11.3.0 Python python3 버전 &gt;= 3.5 sudo apt install python3 3.10.6 Git...","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/ns3/2/",
        "teaser": null
      },{
        "title": "ns3 예제",
        "excerpt":"hello-simulator.cc source code /* -*- Mode:C++; c-file-style:\"gnu\"; indent-tabs-mode:nil; -*- */ /* * This program is free software; you can redistribute it and/or modify * it under the terms of the GNU General Public License version 2 as * published by the Free Software Foundation; * * This program is distributed...","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/ns3/3/",
        "teaser": null
      },{
        "title": "ns3 Logging, CommandLine",
        "excerpt":"Logging $ export 'NS_LOG=UdpEchoClientApplciation=level_all' # 모든 사건(?)을 Log로 출력 $ export 'NS_LOG=UdpEchoClientApplciation=level_all|prefix_time' #시간을 prefix로 출력 $ export 'NS_LOG=*=level_all|prefix_func|prefix_time' 코드에 NS_LOG_COMPONENT_DEFINE (\"HelloExample\") NS_LOG_INFO (\"Hello\"); 가 정의되어 있다면 $ export NS_LOG=HelloExample=info # 출력은 Hello At time +2s ... 시뮬레이션이 끝나면 해당 시뮬레이션에서 사용한 로깅 모듈을 초기화 해주는 것이 좋다. # LOG 초기화...","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/ns3/4/",
        "teaser": null
      },{
        "title": "ns3 기본 요소",
        "excerpt":"여기서 기본 요소라는 건 ns3 시뮬레이션 코드를 이루는 기본적인 요소들을 말한다. first.cc 예제와 함께 보면 훨씬 이해가 쉬울 것이다. 1. Node 우선 node가 있다. 단말과 같이 네트워크 토폴로지의 끝단이라고 보면 된다. NodeContainer nodes; nodes.Create (2); NodeContainer와 Create로 node를 생성할 수 있고, 몇개를 생성할 지 정할수 있다. 2. Channel Channel은 말그대로...","categories": ["communication"],
        "tags": [],
        "url": "/study/communication/ns3/5/",
        "teaser": null
      },{
        "title": "DataGrip",
        "excerpt":"DataGrip 설치 DataGrip은 JetBrains사에서 만든 데이터베이스 관리 툴이다. 데이터베이스 관리를 위한 툴은 많이 있지만, 내가 가장 선호하는 것은 DataGrip이다. 원래는 유료인데, 학생이라면 학생용 라이센스를 받아 무료로 사용할 수 있다. https://www.jetbrains.com/community/education/#students에서 학생용 라이센스를 신청할 수 있다. 라이센스를 받았다면, https://www.jetbrains.com/ko-kr/products/download에서 DataGrip을 다운로드 받아 설치하자. 설치가 완료 후, DataGrip을 실행하고, 로그인 하면 라이센스가...","categories": ["data_analysis"],
        "tags": [],
        "url": "/study/data_analysis/datagrip/",
        "teaser": null
      },{
        "title": "Elasticsearch",
        "excerpt":"                                                      Elasticsearch 개요                                                 Elastic with Chat GPT                                 ","categories": ["data_analysis"],
        "tags": [],
        "url": "/study/data_analysis/elasticsearch/",
        "teaser": null
      },{
        "title": "Elasticsearch 개요",
        "excerpt":"Elastic 소개 과거에는 기업들이 생성한 정형 데이터가 주를 이루었다면, 이제는 개인들이 생성하는 정형/비정형 데이터들을 다루게 되었다. 데이터 규모와 다양성이 커지면서, 검색은 더욱 중요해졌다. 이제는 검색이 그저 사전이나 포털 사이트 같은 일부 서비스에서만 국한되지 않는다. SNS, 쇼핑몰, 게임 부터 마케팅, 개발 까지 검색 기능의 활용 분야는 매우 광범위하다. 이러한 상황에 Elasticsearch는...","categories": ["elasticsearch"],
        "tags": [],
        "url": "/study/data_analysis/elasticsearch/1/",
        "teaser": null
      },{
        "title": "Elastic with Chat GPT",
        "excerpt":"Logstash 실습 진행 NLP 현재 제공되는 클라우드를 어떻게 효율적으로 사용할 수 있을까. ChatGPT 그냥 ChatGPT는 신뢰도를 보장할 수 없음. 서비스 제공자가 직접 신뢰도를 보장해야 함. 답변을 컨트롤할 수 있고, 신뢰도를 보장할 수 있음. Word Embedding NLP는 광대해서 전부 다루기는 어려움. &lt;Word2Vec&gt; 사람의 자연어를 기계가 이해할 수 있게. 단어를 벡터로 치환함....","categories": ["elasticsearch"],
        "tags": [],
        "url": "/study/data_analysis/elasticsearch/2/",
        "teaser": null
      },{
        "title": "R",
        "excerpt":"                                                      R 설치                                 ","categories": ["data_analysis"],
        "tags": [],
        "url": "/study/data_analysis/r/",
        "teaser": null
      },{
        "title": "R 설치",
        "excerpt":"R # update indices sudo apt update -qq # install two helper packages we need sudo apt install --no-install-recommends software-properties-common dirmngr # add the signing key (by Michael Rutter) for these repos # To verify key, run gpg --show-keys /etc/apt/trusted.gpg.d/cran_ubuntu_key.asc # Fingerprint: E298A3A825C0D65DFD57CBB651716619E084DAB9 wget -qO- https://cloud.r-project.org/bin/linux/ubuntu/marutter_pubkey.asc | sudo tee -a...","categories": ["r"],
        "tags": [],
        "url": "/study/data_analysis/r/1/",
        "teaser": null
      },{
        "title": "SQL",
        "excerpt":"                                                      SQL 개요                                                 SQL 함수                                 ","categories": ["data_analysis"],
        "tags": [],
        "url": "/study/data_analysis/sql/",
        "teaser": null
      },{
        "title": "SQL 개요",
        "excerpt":" ","categories": ["sql"],
        "tags": [],
        "url": "/study/data_analysis/sql/1/",
        "teaser": null
      },{
        "title": "SQL 함수",
        "excerpt":"중복 삭제 및 문자열 정리 DISTINCT 중복 데이터를 제외하고 고유한 값으로 목록을 생성한다. SELECT DISTINCT player_id FROM player_address LENGTH 문자열 변수의 길이를 반환한다. SELECT LENGTH(country) AS letters_in_country FROM player_address SELECT country FROM player_address WHERE LENGTH(country) &gt; 2 country USA SUBSTR SELECT country FROM player_address WHERE SUBSTR(coutry,1,2) = 'US' country US...","categories": ["sql"],
        "tags": [],
        "url": "/study/data_analysis/sql/2/",
        "teaser": null
      },{
        "title": "Building Flexible, Low-Cost Wireless Access Networks With Magma",
        "excerpt":" ","categories": ["paper_review"],
        "tags": [],
        "url": "/study/paper_review/magma_001/",
        "teaser": null
      },{
        "title": "Private Cellular Network Deployment: Comparison of OpenAirInterface with Magma Core",
        "excerpt":"이 논문은 LTE 특화망 구축에 오픈소스인 OpenAirInterface와 Magma Core를 사용하는 두 가지 시나리오를 비교하는 내용이다. 단순한 비교 뿐만아니라 테스트베드의 배치과정에서의 시행착오, 가능한 사용 사례에 대한 고려도 함께 설명하고 있다. 앞서 LTE 특화망이라고 했지만, 궁극적으로는 NGN을 목표로 하고 있다. NGN의 새로운 비즈니스 요구 사항에 늘어나는 서비스 제공업체, 소규모 운영자 등이 포함되어...","categories": ["paper_review"],
        "tags": [],
        "url": "/study/paper_review/magma_002/",
        "teaser": null
      },{
        "title": "A Reinforcement Learning Framework for PQoS in a Teleoperated Driving Scenario",
        "excerpt":"RAN-AI ns3-ran-ai Matteo Drago 외 연구진들은 RAN-AI라는 ns3환경에서 시뮬레이션 되는 새로운 엔티티를 개발하였다. 매우 동적인 V2X 시스템에서 QoS는 언제든 예기치 못하게 변경 또는 저하될 수 있다. 사람의 안전과 직결되는 교통수단에서 통신 장애는 치명적인 결과를 초래할 수 있다. 이를 위해 QoS를 사전에 예측하여 그에 따라 애플리케이션을 통제한다는 개념인 PQoS(Predictive Quality of...","categories": ["paper_review"],
        "tags": [],
        "url": "/study/paper_review/mobility_001/",
        "teaser": null
      },{
        "title": "Learning to Optimize: Training Deep Neural Networks for Interference Management",
        "excerpt":"이 논문은 2018년에 발표된 논문으로 최신 논문은 아니지만 인용수도 높고 최적화와 관련해 도움이 많이 될만한 논문이라 한번 리뷰 해 보려고 한다.  ","categories": ["paper_review"],
        "tags": [],
        "url": "/study/paper_review/optimization_001/",
        "teaser": null
      },{
        "title": "Energy-aware Scheduling of Virtualized Base Stations in O-RAN with Online Learning",
        "excerpt":"O-RAN은 OPEX/CAPEX(운영/자본 지출)을 줄이고 다양한 기기에 호스팅 될 수 있다는 장점이 있지만, virtualization된 기지국(vBS)은 예측하기 어려운 성능과 불안정한 에너지 소비라는 단점이 있다. vBS의 자원관리를 최적화하고자 하는 연구는 이전에도 이루어 졌지만, 주로 (i) 제어 장치와 성능 함수의 관계에 대한 모델, (ii) 훈련 데이터에 의존한 model-free 접근 방법, (iii) 강화 학습(Reinforcement Learning)...","categories": ["paper_review"],
        "tags": [],
        "url": "/study/paper_review/oran_001/",
        "teaser": null
      },{
        "title": "Git",
        "excerpt":"Git? Git은 버전 관리 시스템이다. Git 원격 저장소 서비스로 GitHub, GitLab이 가장 많이 사용되는데 여기는 GitHub에 대한 내용을 올릴 예정이다. Github Education 자신이 학생 신분이라면 Github Education을 신청하자. Github Pro 멤버쉽과 함께 PRO 뱃지를 달 수 있다. 우선 설정으로 들어가서 학교 이메일을 추가해야 한다. 추가 완료 했으면 신청 페이지로 들어가...","categories": ["programming"],
        "tags": [],
        "url": "/study/programming/github/1/",
        "teaser": null
      },{
        "title": "Push",
        "excerpt":"Github Repository 생성 [Repository name *] 부분에 아무 이름을 넣고 새로운 리포지토리(원격 저장소)를 만들어준다. Git Push GitHub로 올릴 로컬 디렉토리에서 아래 코드를 순차적으로 따라가면 된다. 1. Git init Git 사용을 위한 초기 설정 git init 2. Git add 변경 사항을 스테이징한다. git add . 3. Git commit 스테이징된 변경 사항을...","categories": ["programming"],
        "tags": [],
        "url": "/study/programming/github/2/",
        "teaser": null
      },{
        "title": "Pull-Request",
        "excerpt":"Branch 생성 git checkout -b develop main 브랜치로 직접 푸시하기 전, 개발 전용(?) 브랜치를 새로 만들어준다. git branch를 통해 변경된 브랜치를 확인할 수 있다. Push 새로 만든 develop 브랜치로 변경 사항을 푸시한다. 푸시가 완료되면 이렇게 새로 브랜치가 만들어지고 변경 사항이 적용된 것을 확인할 수 있다. Pull-Request GitHub에서 이런 메시지가 뜨는데...","categories": ["programming"],
        "tags": [],
        "url": "/study/programming/github/3/",
        "teaser": null
      },{
    "title": "Cloud 개요",
    "excerpt":"클라우드의 반댓말은 온프레미스다. 기존에는 기업들이 온프레미스 서버를 구축해 독자적으로 서버를 운영했다. 당연하게도 서버 구축, 유지 관리 비용이 더 들어갈 수밖에 없었다. AWS와 같은 클라우드 업체는 이미 구축된 서버를 빌려준다. 예를 들어 스타트업이나 본인의 사이트를 운영하는 개인 들은 온프레미스 서버를 구축하고 운영하기가 어렵기 때문에 이런 클라우드 업체를 통해 서버를 대여하고 그...","url": "http://localhost:4000/study/cloud/1/"
  },{
    "title": "6G 개요",
    "excerpt":"#     ","url": "http://localhost:4000/study/communication/6g/1/"
  },{
    "title": "Protocol",
    "excerpt":"#     ","url": "http://localhost:4000/study/communication/computer_network/1/"
  },{
    "title": "딥 러닝",
    "excerpt":"딥 러닝은 인간 두뇌의 구조를 본 따 개발된 인공지능이다. 인간이 사물을 인식하기의 과정은, 먼저 눈으로 보고 그 정보가 여러 뇌를 거치게 되는데 마찬가지로 딥 러닝 또한 여러 계층으로 구성된다. 인간의 신경과 뇌에는 수백만개의 뉴런이 연결되어 있듯 딥 러닝 신경망도 인공 신경 세포 노드를 통해 계층을 구성하고 있다. 딥 러닝의 목표는...","url": "http://localhost:4000/study/ai/2/"
  },{
    "title": "Mathematical Methods for Wireless Communications",
    "excerpt":"Signal Spaces 위 그림은 우리가 흔히 알고 있는 통신 시스템의 구조를 나타낸 것이다. 이러한 통신 시스템을 수학적으로 분석하기 위한 가장 기본적인 개념은 Signal Space 이다. Approximation and Estimation in Signal Spaces Minimum Mean-Squared Error Estimation 추정이라는 단어가 본의 아니게 많이 사용되게 되는데 추정, 추정값, 추정자 등등 헷갈리는 사태를 방지하기 위해...","url": "http://localhost:4000/study/communication/optimization/3/"
  },{
    "title": "Page Not Found",
    "excerpt":"         404   Page Not Found                               ","url": "http://localhost:4000/404.html"
  },{
    "title": "5G",
    "excerpt":"                                                               5G 개요                                                                                                                                                                                                              표준화                                                                                                                                                                                                         기본 철학                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           5G 개념                                                                                                                                                                                                                                                                                                                                                                                               주파수                                                                                                                                                                                                         Sequence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          시스템 구조                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      전송 구조                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      채널 사운딩                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Transport 채널 프로세싱                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      PHY Control 시그널링                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Downlink                                                                                                                                                                                                         Uplink                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ","url": "http://localhost:4000/study/communication/5g/"
  },{
    "title": "6G",
    "excerpt":"                                    6G 개요                                     ","url": "http://localhost:4000/study/communication/6g/"
  },{
    "title": "About",
    "excerpt":"             👤 LEE SUNGJIN      🏫 Kyunghee University     💼 Student.         🌐 Contact Me                                                                &nbsp;Copyright     Copyright 2024. Lee Sung Jin All pictures cannot be copied without permission.    Copyright Attribution    ","url": "http://localhost:4000/about/"
  },{
    "title": "AI",
    "excerpt":"                                    AI 개요                                        딥러닝                        ","url": "http://localhost:4000/study/ai/"
  },{
    "title": "O-RAN SC AIMLFW",
    "excerpt":"                                                      AIMLFW 환경설정                                                 InfluxDB 사용하기                                                 모델 학습 pipeline 구축하기                                                 Kserve를 통해 모델 배포하기                                                 Usecase: UAV Path Prediction                                                 Debug Pod 생성하기                                                 Gerrit Review                                                 Cassandra 데이터 정렬 문제 - 1                                                 Cassandra 데이터 정렬 문제 - 2                                                 Cassandra 데이터 정렬 문제 - 3                                                 Federated Learning framework 개발                                 ","url": "http://localhost:4000/projects/aimlfw/"
  },{
    "title": "AWS",
    "excerpt":"                                    AWS                        ","url": "http://localhost:4000/study/cloud/aws/"
  },{
    "title": "Blog",
    "excerpt":"","url": "http://localhost:4000/blog/"
  },{
    "title": "Bluetooth",
    "excerpt":"                                                      Bluetooth 역사                                                 Bluetooth 세대별 특징                                                 Bluetooth 관련 법규                                                 Bluetooth 다중 연결                                                 Bluetooth Simulation                                 ","url": "http://localhost:4000/projects/bluetooth/"
  },{
    "title": "Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Cloud",
    "excerpt":"                                    Cloud 개요                                        AWS                        ","url": "http://localhost:4000/study/cloud/"
  },{
    "title": "Communication",
    "excerpt":"                                    6G                                        5G                                        Computer Network                                        Optimization                                        ns3                        ","url": "http://localhost:4000/study/communication/"
  },{
    "title": "Computer Network",
    "excerpt":"                                    Protocol                        ","url": "http://localhost:4000/study/communication/computer_network/"
  },{
    "title": "Copyright Attribution",
    "excerpt":"Powered by Jekyll &amp; Minimal Mistakes. Source & License Logo Created by ChatGPT Fonts Font: Suit by Sunn Source/License: SIL Open Font License v1.1 Font: Roboto by Christian Robertson Source/License: Google Fonts Attribution Font: Noto Sans Korean by Google Source/License: Google Fonts Attribution Font: Gasoek One by Jiashuo Zhang Source/License:...","url": "http://localhost:4000/copyright/"
  },{
    "title": "Data Analysis",
    "excerpt":"                                                               DataGrip                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Elasticsearch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Elasticsearch 개요                                                                                                                                                                                                         Elastic with Chat GPT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          R                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                R 설치                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    SQL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      SQL 개요                                                                                                                                                                                                         SQL 함수                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ","url": "http://localhost:4000/study/data_analysis/"
  },{
    "title": "SKT AI Fellowship 6th",
    "excerpt":"                                                      합격후기                                                 프로젝트                                                 수료식                                 ","url": "http://localhost:4000/projects/fellowship/"
  },{
    "title": "GitHub",
    "excerpt":"                                                      Git                                                 Push                                                 Pull-Request                                 ","url": "http://localhost:4000/study/programming/github/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": "ns3",
    "excerpt":"                       {% assign files = site.study | where: \"category\", \"communication\" | where: \"subcategory\", \"ns3\" %}         {% for file in files %}                      {{ file.title }}                           {% endfor %}      ","url": "http://localhost:4000/study/communication/ns3/"
  },{
    "title": "Optimization",
    "excerpt":"                                    Mathematical Methods for Wireless Communications                        ","url": "http://localhost:4000/study/communication/optimization/"
  },{
    "title": "Paper Review",
    "excerpt":"{% assign files = site.study | where: \"category\", \"paper_review\" %}  {% for file in files %}               {% assign extensions = \"jpg,png,gif\" | split: ',' %}         {% for ext in extensions %}                      {% endfor %}                   {{ file.subject }}         {{ file.title }}                 {% endfor %} ","url": "http://localhost:4000/study/paper_review/"
  },{
    "title": "Programming",
    "excerpt":"                                    Github                          ","url": "http://localhost:4000/study/programming/"
  },{
    "title": "Projects",
    "excerpt":"     {% include pages-contents/projects.html %} ","url": "http://localhost:4000/projects/"
  },{
    "title": "Search",
    "excerpt":"","url": "http://localhost:4000/search/"
  },{
    "title": "Study",
    "excerpt":"     {% include pages-contents/study.html %} ","url": "http://localhost:4000/study/"
  },{
    "title": "Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]

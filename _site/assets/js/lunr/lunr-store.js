var store = [{
        "title": "Blog 소개",
        "excerpt":"여기 Blog 페이지에는 많은 것을 올리진 않을 것 같고 일상적인 것들이나 생각 같은 것들만 간단하게 쓸 것같다.  ","categories": ["daily"],
        "tags": [],
        "url": "/daily/blog-%EC%86%8C%EA%B0%9C/",
        "teaser": null
      },{
        "title": "5G-Advanced 및 6G 동향",
        "excerpt":"5G 서비스는 과도기라는 말을 들을 정도로 어려움을 겪었다. 통신사들 자체의 서비스적인 측면을 떠나서 한국의 경우 이미 4G에 대한 만족도가 높은 상황에서 5G에 큰 메리트를 느끼기 어려웠다 라고 볼 수 있을 것 같다. 4G가 상용화 되면서 OTT나 Youtube 같은 서비스들이 사용자들에게 새로운 경험을 선사했는데, 5G는 아직까지도 대다수의 사람들에게 신선함을 주는 대표적인...","categories": ["trends"],
        "tags": [],
        "url": "/trends/6G-%EB%8F%99%ED%96%A5/",
        "teaser": null
      },{
        "title": "2024 MWC",
        "excerpt":"2024년에도 어김없이 찾아온 MWC. 직접 바르셀로나에 가서 보았다면 좋았겠지만, 아쉽게도 그러지 못해서 간단하게나마 이번 MWC에서 주요하게 볼만한 몇가지들을 정리해보고자 한다. 역시나 핵심 화두는 ‘AI’다. 또 AI냐 라고 할만큼 지겨울 수도 있지만 또 워낙 그만큼 중요한 주제이다. 화제가 되는건 역시 삼성이 CES에서도 선보였던 갤럭시 S24와 엣지 AI가 있지만 우리는 이동통신을 위주로...","categories": ["trends"],
        "tags": [],
        "url": "/trends/2024_mwc-copy/",
        "teaser": null
      },{
    "title": "5G 개요",
    "excerpt":"표준화 표준화 단체는 크게 2가지로 알면 된다. 바로 ITU와 3GPP이다. ITU는 국제전기통신연합으로 유엔 산하의 국제 기구다. 기술 표준을 제정하는 것 뿐만 아니라 주파수 관리, 위성 관리, 개발도상국 기술 지원 등의 역할을 하고 있다. 3GPP는 유럽의 ETSI, 일본의 TTC, 중국의 CCSA, 한국의 TTA, 미국의 ATIS가 연합하여 설립한 국제 표준화 단체이다. 3GPP의...","url": "http://localhost:4000/study/communication/5g/1/back/"
  },{
    "title": "기본 철학",
    "excerpt":"1. 높은 주파수 대역 넓은 대역폭을 위해 mmWave를 사용. &#8618; 높은 대역 But! mmWave를 사용하면, pathloss &uarr; cell coverage &darr; 해결? MIMO, Beamforming, 낮은 주파수 대역과 협력 운용. 2. Ultra-Lean 'Always-on' 신호를 줄이기 위함. always-on? 사용자 트래픽에 상관없이 전송되는 신호(e.g. 기지국 감지 신호, 브로드캐스트 신호, 항상 켜져있는 레퍼런스 시그널 등)....","url": "http://localhost:4000/study/communication/5g/1/2/"
  },{
    "title": "5G 개요",
    "excerpt":"                                    표준화                                        기본 철학                        ","url": "http://localhost:4000/study/communication/5g/1/"
  },{
    "title": "6G 개요",
    "excerpt":"#     ","url": "http://localhost:4000/study/communication/6g/1/"
  },{
    "title": "표준화",
    "excerpt":"표준화 표준화 단체는 크게 2가지로 알면 된다. 바로 ITU와 3GPP이다. ITU는 국제전기통신연합으로 유엔 산하의 국제 기구다. 기술 표준을 제정하는 것 뿐만 아니라 주파수 관리, 위성 관리, 개발도상국 기술 지원 등의 역할을 하고 있다. 3GPP는 유럽의 ETSI, 일본의 TTC, 중국의 CCSA, 한국의 TTA, 미국의 ATIS가 연합하여 설립한 국제 표준화 단체이다. 3GPP의...","url": "http://localhost:4000/study/communication/5g/1/1/"
  },{
    "title": "SQL 개요",
    "excerpt":" ","url": "http://localhost:4000/study/data_analysis/sql/1/"
  },{
    "title": "주파수",
    "excerpt":" ","url": "http://localhost:4000/study/communication/5g/2/1/"
  },{
    "title": "Sequence",
    "excerpt":"Sequence 통신 공부를 하며 책에서 자꾸 ‘sequnece’ 거리는데 이게 정확히 뭐지 싶을 때가 있다. 뭐 없을 수도 있다. 아무튼 이 sequence는 수열이니까 말그대로 수를 나열한건데, 예를 들어 reference signal이 그냥 만들어 지는 것은 아닐 것이다. Sequnece generator로 reference signal을 만든 다음 적절한 resource 할당과 매핑 과정을 거쳐 전송이 될 것이다....","url": "http://localhost:4000/study/communication/5g/2/2/"
  },{
    "title": "5G 개념",
    "excerpt":"                                    주파수                                        Sequence                        ","url": "http://localhost:4000/study/communication/5g/2/"
  },{
    "title": "SQL 함수",
    "excerpt":"중복 삭제 및 문자열 정리 DISTINCT 중복 데이터를 제외하고 고유한 값으로 목록을 생성한다. SELECT DISTINCT player_id FROM player_address LENGTH 문자열 변수의 길이를 반환한다. SELECT LENGTH(country) AS letters_in_country FROM player_address SELECT country FROM player_address WHERE LENGTH(country) &gt; 2 country USA SUBSTR SELECT country FROM player_address WHERE SUBSTR(coutry,1,2) = 'US' country US...","url": "http://localhost:4000/study/data_analysis/sql/2/"
  },{
    "title": "시스템 구조",
    "excerpt":"전체적인 네트워크 구조는 RAN과 Core로 나눠진다.    ","url": "http://localhost:4000/study/communication/5g/3/"
  },{
    "title": "Mathematical Methods for Wireless Communications",
    "excerpt":"Signal Spaces 위 그림은 우리가 흔히 알고 있는 통신 시스템의 구조를 나타낸 것이다. 이러한 통신 시스템을 수학적으로 분석하기 위한 가장 기본적인 개념은 Signal Space 이다. Approximation and Estimation in Signal Spaces Minimum Mean-Squared Error Estimation 추정이라는 단어가 본의 아니게 많이 사용되게 되는데 추정, 추정값, 추정자 등등 헷갈리는 사태를 방지하기 위해...","url": "http://localhost:4000/study/communication/optimization/3/"
  },{
    "title": "전송 구조",
    "excerpt":" ","url": "http://localhost:4000/study/communication/5g/4/"
  },{
    "title": "채널 사운딩",
    "excerpt":" ","url": "http://localhost:4000/study/communication/5g/5/"
  },{
    "title": "5G",
    "excerpt":"                                    5G 개요                                                   표준화                     기본 철학                                                                      5G 개념                                                   주파수                     Sequence                                                                      시스템 구조                                        Transmission 구조                                        채널 사운딩                                        Transport 채널 프로세싱                                        PHY Control 시그널링                                                   Downlink                     Uplink                                                      ","url": "http://localhost:4000/study/communication/5g/"
  },{
    "title": "Transport 채널 프로세싱",
    "excerpt":"PHY와 MAC 레이어 사이에 위치하는 레이어를 Transport 레이어라고 한다. 즉 Transport 채널 프로세싱이라는 것은 MAC 계층에서 내려온 데이터를 PHY 단으로 내보내기 위한 (혹은 그 반대) 일종의 가공 과정이라고 할 수 있겠다.    ","url": "http://localhost:4000/study/communication/5g/6/"
  },{
    "title": "6G",
    "excerpt":"                                    6G 개요                                     ","url": "http://localhost:4000/study/communication/6g/"
  },{
    "title": "PHY Control 시그널링 - Downlink",
    "excerpt":" ","url": "http://localhost:4000/study/communication/5g/7/downlink/"
  },{
    "title": "PHY Control 시그널링 - Uplink",
    "excerpt":"Uplink Control Information(UCI) Uplink Control을 위한 UCI는 3가지로 볼 수 있다. 단말이 수신한 DL-SCH 전송 블록에 대한 응답인 HARQ Ack/Nack, 단말이 UL-SCH 전송을 위해 Uplink 자원을 요청할 때 보내는 Scheduling Request(SR), 단말이 기지국으로 보내는 Downlink 채널에 대한 채널 상태 보고(CSI Report)가 그것이다. UCI는 PUCCH 또는 PUSCH를 통해 전송된다. DCI의 경우에는...","url": "http://localhost:4000/study/communication/5g/7/uplink/"
  },{
    "title": "PHY Control 시그널링",
    "excerpt":"                                    Downlink                                        Uplink                        ","url": "http://localhost:4000/study/communication/5g/7/"
  },{
    "title": "SQL",
    "excerpt":"                                    SQL 개요                                        SQL 함수                        ","url": "http://localhost:4000/study/data_analysis/sql/"
  },{
    "title": "About",
    "excerpt":"                      👤 이성진      🏫 경희대학교     📝 전자공학과     🎓 4학년     💼 학생입니다.           👤 LEE SUNGJIN      🏫 Kyunghee University     📝 Electronic Engineering     🎓 Senior     💼 Student.         🌐 Contact Me                                                                &nbsp;Copyright     Copyright 2024. Lee Sung Jin All pictures cannot be copied without permission.    Copyright Attribution    ","url": "http://localhost:4000/about/"
  },{
    "title": "Blog",
    "excerpt":"","url": "http://localhost:4000/blog/"
  },{
    "title": "Bluetooth",
    "excerpt":"                                    Bluetooth 역사                                        Bluetooth 세대별 특징                                                   Version 1                     Version 2                     Version 3                     Version 4                     Version 5                                                                      Bluetooth 관련 법규                                                   한국                     유럽                     미국                     중국                     일본                                                                      Bluetooth 다중 연결                                        시뮬레이션                        ","url": "http://localhost:4000/projects/bluetooth/"
  },{
    "title": "Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Communication",
    "excerpt":"                                    6G                                        5G                                        Optimization                                        Mobility                        ","url": "http://localhost:4000/study/communication/"
  },{
    "title": "Copyright Attribution",
    "excerpt":"Powered by Jekyll &amp; Minimal Mistakes. Source & License Logo Created by ChatGPT Fonts Font: Suit by Sunn Source/License: SIL Open Font License v1.1 Font: Roboto by Christian Robertson Source/License: Google Fonts Attribution Font: Noto Sans Korean by Google Source/License: Google Fonts Attribution Font: Y이드스트릿체 by KT 'Y' Source/License: (주)케이티...","url": "http://localhost:4000/copyright/"
  },{
    "title": "Data Analysis",
    "excerpt":"                                    SQL                          ","url": "http://localhost:4000/study/data_analysis/"
  },{
    "title": "Bluetooth 세대별 특징",
    "excerpt":"Bluetooth 1 GFSK 변조 방식을 이용해 최대 1 Mbps, 실제로는 0.7 Mbps의 전송속도와 최대 10 m의 전파 범위를 지원한다. Bluetooth 2 Bluetooth 2.0은 2004년 3월에 발표되었다. 기존에 사용하던 GFSK 변좡식을 그대로 사용할 경우 1 Mbps의 전송속도를 유지하지만, Enhanced Data Rate(EDR)을 통해 최대 3 Mbps, 실제로는 2.1 Mbps의 속도가 지원된다. EDR은...","url": "http://localhost:4000/projects/bluetooth/generation/"
  },{
    "title": "Bluetooth 역사",
    "excerpt":"Bluetooth는 에릭슨, 인텔, IBM, 노키아, 도시바 이렇게 5개의 회사들이 모여 Bluetooth SIG를 설립하면서 시작되었다. Bluetooth 1.0의 경우 IEEE 802.15.1 표준에도 등록이 되어있는데, 그 이후 버전들은 모두 Bluetooth SIG에서 표준화 하고있다. 현재(2024.02)까지 Bluetooth 5.4까지 표준이 제정되어있다. Bluetooth 역사에서 빠질 수 없는 중요한 사건(?)은 Bluetooth 4.0부터 등장한 Bluetooth Low Energy(이하 BLE)라고 할...","url": "http://localhost:4000/projects/bluetooth/history/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": "KPI",
    "excerpt":"","url": "http://localhost:4000/projects/kpi/"
  },{
    "title": "Bluetooth 관련 법규",
    "excerpt":"블루투스는 무선장치이기 때문에 탑재제품은 판매할 각 나라의 전파법규에 규정되어 있는 법규와 규제를 준수하고 승인을 받아야 한다. 직접 신청해도 되지만, 여러 대행 업체들이 있으니 대행 업체를 알아보는 것도 좋은 방법이다. 한국 우선 한국은 KC 전자파적합성인증제도가 있다. 블루투스 제품의 경우, 기존의 ‘적합인증’에서 ‘지정시험기관 적합등록’으로 완화되었다. ‘지정시험기관 적합등록’의 경우 적합인증 대상이 아닌 방송통신기자재등을...","url": "http://localhost:4000/projects/bluetooth/law/"
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
    "title": "Building Flexible, Low-Cost Wireless Access Networks With Magma",
    "excerpt":"","url": "http://localhost:4000/study/paper_review/magma_001/"
  },{
    "title": "Private Cellular Network Deployment: Comparison of OpenAirInterface with Magma Core",
    "excerpt":"이 논문은 LTE 특화망 구축에 오픈소스인 OpenAirInterface와 Magma Core를 사용하는 두 가지 시나리오를 비교하는 내용이다. 단순한 비교 뿐만아니라 테스트베드의 배치과정에서의 시행착오, 가능한 사용 사례에 대한 고려도 함께 설명하고 있다. 앞서 LTE 특화망이라고 했지만, 궁극적으로는 NGN을 목표로 하고 있다. NGN의 새로운 비즈니스 요구 사항에 늘어나는 서비스 제공업체, 소규모 운영자 등이 포함되어...","url": "http://localhost:4000/study/paper_review/magma_002/"
  },{
    "title": "Bluetooth 다중 연결",
    "excerpt":"Bluetooth 기기 여러 대를 동시에 연결할 수 있을까? Bluetooth를 일상생활에서 항상 활용하는 여러분들도 아마 매번 헷갈려하는 문제일 것이다. 여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다. Blueooth 제품을 만들기 앞서 다중 연결 여부를 고려하는 것은 중요하다. 다중 연결이 필요할 경우 고려해야...","url": "http://localhost:4000/projects/bluetooth/multiple_connection/"
  },{
    "title": "Optimization",
    "excerpt":"                                    Mathematical Methods for Wireless Communications                        ","url": "http://localhost:4000/study/communication/optimization/"
  },{
    "title": "Learning to Optimize: Training Deep Neural Networks for Interference Management",
    "excerpt":"이 논문은 2018년에 발표된 논문으로 최신 논문은 아니지만 인용수도 높고 최적화와 관련해 도움이 많이 될만한 논문이라 한번 리뷰 해 보려고 한다.","url": "http://localhost:4000/study/paper_review/optimization_001/"
  },{
    "title": "Energy-aware Scheduling of Virtualized Base Stations in O-RAN with Online Learning",
    "excerpt":"O-RAN은 OPEX/CAPEX(운영/자본 지출)을 줄이고 다양한 기기에 호스팅 될 수 있다는 장점이 있지만, virtualization된 기지국(vBS)은 예측하기 어려운 성능과 불안정한 에너지 소비라는 단점이 있다. vBS의 자원관리를 최적화하고자 하는 연구는 이전에도 이루어 졌지만, 주로 (i) 제어 장치와 성능 함수의 관계에 대한 모델, (ii) 훈련 데이터에 의존한 model-free 접근 방법, (iii) 강화 학습(Reinforcement Learning)...","url": "http://localhost:4000/study/paper_review/oran_001/"
  },{
    "title": "Paper Review",
    "excerpt":"O-RAN Energy-aware Scheduling of Virtualized Base Stations in O-RAN with Online Learning optimization Learning to Optimize: Training Deep Neural Networks for Interference Management magma Private Cellular Network Deployment: Comparison of OpenAirInterface with Magma Core Comparison of OpenAirInterface and Magma Core, two prominent open-source projects in cellular networks. magma Building Flexible,...","url": "http://localhost:4000/study/paper_review/"
  },{
    "title": "Projects",
    "excerpt":"     {% include pages-contents/projects.html %} ","url": "http://localhost:4000/projects/"
  },{
    "title": "Search",
    "excerpt":"","url": "http://localhost:4000/search/"
  },{
    "title": "Bluetooth Simulation",
    "excerpt":"","url": "http://localhost:4000/projects/bluetooth/simulation/"
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

var store = [{
        "title": "Test 1",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/test-1/",
        "teaser": null
      },{
        "title": "Test 2",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/test-2/",
        "teaser": null
      },{
    "title": "5G 표준화",
    "excerpt":"표준화 단체 표준화 단체는 크게 2가지로 알면 된다. 바로 ITU와 3GPP이다. ITU는 국제전기통신연합으로 유엔 산하의 국제 기구다. 기술 표준을 제정하는 것 뿐만 아니라 주파수 관리, 위성 관리, 개발도상국 기술 지원 등의 역할을 하고 있다. 3GPP는 유럽의 ETSI, 일본의 TTC, 중국의 CCSA, 한국의 TTA, 미국의 ATIS가 연합하여 설립한 국제 표준화 단체이다....","url": "http://localhost:4000/study/communication/5g/1/"
  },{
    "title": "Mathematical Methods for Wireless Communications",
    "excerpt":"Signal Spaces 위 그림은 우리가 흔히 알고 있는 통신 시스템의 구조를 나타낸 것이다. 이러한 통신 시스템을 수학적으로 분석하기 위한 가장 기본적인 개념은 Signal Space 이다. Approximation and Estimation in Signal Spaces Minimum Mean-Squared Error Estimation 추정이라는 단어가 본의 아니게 많이 사용되게 되는데 추정, 추정값, 추정자 등등 헷갈리는 사태를 방지하기 위해...","url": "http://localhost:4000/study/communication/optimization/3/"
  },{
    "title": "5G",
    "excerpt":"                                    5G 표준화                        ","url": "http://localhost:4000/study/communication/5g/"
  },{
    "title": "About",
    "excerpt":"                      👤 이성진      🏫 경희대학교     📝 전자공학과     🎓 4학년     💼 학생입니다.           👤 LEE SUNGJIN      🏫 Kyunghee University     📝 Electronic Engineering     🎓 Senior     💼 Student.         🌐 Contact Me                                                                &nbsp;Copyright     Copyright 2024. Lee Sung Jin All pictures cannot be copied without permission.    Copyright Attribution    ","url": "http://localhost:4000/about/"
  },{
    "title": "Blog",
    "excerpt":"","url": "http://localhost:4000/blog/"
  },{
    "title": "Bluetooth",
    "excerpt":"                                    Bluetooth 역사                                        Bluetooth 세대별 특징                                                   Version 1                     Version 2                     Version 3                     Version 4                     Version 5                                                                      Bluetooth 관련 법규                                                   한국                     유럽                     미국                     중국                     일본                                                                      Bluetooth 다중 연결                                        MATLAB 시뮬레이션                        ","url": "http://localhost:4000/projects/bluetooth/"
  },{
    "title": "Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Communication",
    "excerpt":"                                    5G                                        Optimization                        ","url": "http://localhost:4000/study/communication/"
  },{
    "title": "Copyright Attribution",
    "excerpt":"Powered by Jekyll &amp; Minimal Mistakes. Source & License Logo Logo: 3D monstera plant with holes in its leaves by Icons 8 Source/License: Illustration by Icons 8 from Ouch! Fonts Font: Suit by Sunn Source/License: SIL Open Font License v1.1 Font: Roboto by Christian Robertson Source/License: Google Fonts Attribution Font:...","url": "http://localhost:4000/copyright/"
  },{
    "title": "Bluetooth Generation",
    "excerpt":"Bluetooth 1 GFSK 변조 방식을 이용해 최대 1 Mbps, 실제로는 0.7 Mbps의 전송속도와 최대 10 m의 전파 범위를 지원한다. Bluetooth 2 Bluetooth 2.0은 2004년 3월에 발표되었다. 기존에 사용하던 GFSK 변좡식을 그대로 사용할 경우 1 Mbps의 전송속도를 유지하지만, Enhanced Data Rate(EDR)을 통해 최대 3 Mbps, 실제로는 2.1 Mbps의 속도가 지원된다 EDR은...","url": "http://localhost:4000/projects/bluetooth/generation/"
  },{
    "title": "Bluetooth History",
    "excerpt":"Bluetooth는 에릭슨, 인텔, IBM, 노키아, 도시바 이렇게 5개의 회사들이 모여 Bluetooth SIG를 설립하면서 시작되었다. Bluetooth 1.0의 경우 IEEE 802.15.1 표준에도 등록이 되어있는데, 그 이후 버전들은 모두 Bluetooth SIG에서 표준화 하고있다. 현재(2024.02)까지 Bluetooth 5.4까지 표준이 제정되어있다. Bluetooth 역사에서 빠질 수 없는 중요한 사건(?)은 Bluetooth 4.0부터 등장한 Bluetooth Low Energy(이하 BLE)라고 할...","url": "http://localhost:4000/projects/bluetooth/history/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": "Bluetooth History",
    "excerpt":"블루투스 기기 여러 대를 동시에 연결할 수 있을까? 블루투스를 일상생활에서 항상 활용하는 나도 매번 헷갈려하는 문제다.   여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다.   기본적으로 여러 기기를 동시에 연결하기 위해서는 기기들이 보내는 패킷에 충돌이 일어나면 안된다.  ","url": "http://localhost:4000/projects/bluetooth/law/"
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
    "title": "Bluetooth Multiple Connection",
    "excerpt":"Bluetooth 기기 여러 대를 동시에 연결할 수 있을까? Bluetooth를 일상생활에서 항상 활용하는 여러분들도 아마 매번 헷갈려하는 문제일 것이다. 여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다. BLE 표준 문서는 기본적으로 기본적으로 여러 기기를 **동시**에 연결하기 위해서는 기기들이 보내는 패킷에 충돌이 일어나면...","url": "http://localhost:4000/projects/bluetooth/multiple_connection/"
  },{
    "title": "Optimization",
    "excerpt":"                                    Mathematical Methods for Wireless Communications                        ","url": "http://localhost:4000/study/communication/optimization/"
  },{
    "title": "Paper Review",
    "excerpt":"                                  Magma         Building Flexible, Low-Cost Wireless Access Networks With Magma         How to configure low-cost cellular network using Magma.                                         Magma         Private Cellular Network Deployment: Comparison of OpenAirInterface with Magma Core         Comparison of OpenAirInterface and Magma Core, two prominent open-source projects in cellular networks.        ","url": "http://localhost:4000/study/paper_review/"
  },{
    "title": "Projects",
    "excerpt":"                                   Bluetooth                                                            5G KPI                                                                        ","url": "http://localhost:4000/projects/"
  },{
    "title": "Search",
    "excerpt":"","url": "http://localhost:4000/search/"
  },{
    "title": "Bluetooth Simulation",
    "excerpt":"블루투스 기기 여러 대를 동시에 연결할 수 있을까? 블루투스를 일상생활에서 항상 활용하는 나도 매번 헷갈려하는 문제다.  여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다.  기본적으로 여러 기기를 **동시**에 연결하기 위해서는 기기들이 보내는 패킷에 충돌이 일어나면 안된다.","url": "http://localhost:4000/projects/bluetooth/simulation/"
  },{
    "title": "Study",
    "excerpt":"                                             Communication                                                                            Paper Review                                                                                                  ","url": "http://localhost:4000/study/"
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

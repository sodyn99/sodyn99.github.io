var store = [{
        "title": "Building Flexible, Low-Cost Wireless Access Networks With Magma",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/Building-Flexible,-Low-Cost-Wireless-Access-Networks-With-Magma/",
        "teaser": null
      },{
        "title": "Private cellular network deployment comparison of openairinterface with magma core",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/Private-Cellular-Network-Deployment-Comparison-of-OpenAirInterface-with-Magma-Core/",
        "teaser": null
      },{
    "title": "About",
    "excerpt":"아성가진리 Asungajinli About Me 👤 이성진 🏫 경희대학교 📝 전자공학과 🎓 4학년 💼 학생입니다. 👤 LEE SUNGJIN 🏫 Kyunghee University 📝 Electronic Engineering 🎓 Senior 💼 Student. 🌐 Contact Me             About Blog 🅰️ Font SUIT 🎨 Color ■ &nbsp;#1C192B&nbsp;&nbsp;|&nbsp;&nbsp;Text ■ &nbsp;#24A091&nbsp;&nbsp;|&nbsp;&nbsp;Green ■ &nbsp;#D1F951&nbsp;&nbsp;|&nbsp;&nbsp;Yellow ■ &nbsp;#F0383B&nbsp;&nbsp;|&nbsp;&nbsp;Red ■ &nbsp;#6454ED&nbsp;&nbsp;|&nbsp;&nbsp;Blue Copyright Copyright...","url": "http://localhost:4000/about/"
  },{
    "title": "Blog",
    "excerpt":"","url": "http://localhost:4000/blog/"
  },{
    "title": "Bluetooth",
    "excerpt":"                                    Bluetooth 역사                                        Bluetooth 세대별 특징                                                   Version 1                     Version 2                     Version 3                     Version 4                     Version 5                                                                      Bluetooth 관련 법규                                                   한국                     유럽                     미국                     중국                     일본                                                                      Bluetooth 다중 연결                        ","url": "http://localhost:4000/projects/bluetooth/"
  },{
    "title": "Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Communication",
    "excerpt":"","url": "http://localhost:4000/study/communication/"
  },{
    "title": "Copyright Attribution",
    "excerpt":"Powered by Jekyll &amp; Minimal Mistakes. Source & License Logo Logo: 3D monstera plant with holes in its leaves by Icons 8 Source/License: Illustration by Icons 8 from Ouch! Fonts Font: Suit by Sunn Source/License: SIL Open Font License v1.1 Font: Roboto by Christian Robertson Source/License: Google Fonts Attribution Font:...","url": "http://localhost:4000/copyright/"
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
    "title": "Bluetooth Multiple Connection",
    "excerpt":"블루투스 기기 여러 대를 동시에 연결할 수 있을까? 블루투스를 일상생활에서 항상 활용하는 나도 매번 헷갈려하는 문제다. 여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다. 기본적으로 여러 기기를 **동시**에 연결하기 위해서는 기기들이 보내는 패킷에 충돌이 일어나면 안된다. 따라서 블루투스는 기본적으로 **FDMA** 방식을...","url": "http://localhost:4000/projects/bluetooth/multiple_connection/"
  },{
    "title": "Optimization",
    "excerpt":"","url": "http://localhost:4000/study/communication/optimization/"
  },{
    "title": "Paper Review",
    "excerpt":"","url": "http://localhost:4000/study/paper_review/"
  },{
    "title": "Projects",
    "excerpt":"                                   Bluetooth                                                            5G KPI                                                                        ","url": "http://localhost:4000/projects/"
  },{
    "title": "Search",
    "excerpt":"","url": "http://localhost:4000/search/"
  },{
    "title": "Study",
    "excerpt":"","url": "http://localhost:4000/study/"
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

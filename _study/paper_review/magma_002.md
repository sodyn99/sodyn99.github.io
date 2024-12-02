---
layout: posts
title: "Private Cellular Network Deployment: Comparison of OpenAirInterface with Magma Core"
subject: magma
category: paper_review
---

이 논문은 LTE 특화망 구축에 오픈소스인 OpenAirInterface와 Magma Core를 사용하는 두 가지 시나리오를 비교하는 내용이다. 단순한 비교 뿐만아니라 테스트베드의 배치과정에서의 시행착오, 가능한 사용 사례에 대한 고려도 함께 설명하고 있다.

앞서 LTE 특화망이라고 했지만, 궁극적으로는 NGN을 목표로 하고 있다. NGN의 새로운 비즈니스 요구 사항에 늘어나는 서비스 제공업체, 소규모 운영자 등이 포함되어 더욱 개방적인 시장을 목표로 하고 있으며, 이 논문에서는 그 중 네트워크 커버리지가 충분하지 않은 **시골** 지역에서의 다양한 사용자를 고려하고 있다.

OAI와 Magma-core 프로젝트는 소형 이동 통신 네트워크의 유연한 배치를 지원하기 위한 주요 오픈소스 프로젝트다. OAI는 표준에 호환되는 4G 및 5G의 코어와 RAN 아키텍처가 함께 제공된다. 반면 Magma는 3GPP 호환 장치 뿐 아니라 WiFi 등 다양한 RAT을 지원하여 더 많은 'Software Native' 솔루션을 구축할 수 있게 한다. 다만 독립적인 RAN 솔루션은 제공하지 않는다. 이들에 대한 자세한 설명은 각 프로젝트의 홈페이지나 Github 페이지를 참고하면 되니, 여기서는 생략하겠다.

그럼 두 가지 배치 시나리오를 고려해 볼 수 있다.
1. OAI RAN과 OAI-CN을 함께 배치
2. OAI RAN과 Magma-core를 함께 배치

또한 논의할 두 가지 주제는 다음과 같다.
1. eNodeB와 코어 분리형 E2E 테스트베드 배치 과정과 연결하는 동안 발생하는 인터페이스 문제와 해결책
2. 각 코어 네트워크 솔루션이 더 유용하게 사용될 수 있는 사용 사례에 대한 논의. 여기에는 새로운 비즈니스 모델과 비표준 장치와의 호환성, 적응성, 신뢰성 등 여러 매개변수가 포함된다.

<img class="modal" src="/_pages/study/paper_review/images/magma_002/1.png" alt="<b>[Fig. 1]</b> Architecture of deployed testbed. (a) the red box denotes Smartphone OAI - RAN+Magma - CN, and (b) the blue box shows Smartphone OAI - RAN+OAI - CN. The intersection of two boxes depict OAI-RAN common to both scenarios."/>

[Fig. 1]은 테스트베드의 전반적인 아키텍처를 보여준다.

참고할만한 주요 문제와 해결과정은 다음과 같다.
1. RAN: 오버플로우 문제를 피하기 위해 eNodeB 소프트웨어는 Ubuntu용 저지연 커널과 avx2 명령어를 지원하는 프로세서에 의존했다. <font color="gray">이 문제는 좀 더 알아봐야 할 것 같다.</font>
2. 인터페이스: RAN 및 코어의 IP 발견 문제를 해결하기 위해, 적절한 라우팅 테이블, iptbles의 패킷 전달 규칙, 포드 포워딩을 추가했다.

사용 사례는 Magma-core와 OAI-CN 각각 다르게 적용될 수 있다. OAI-CN은 유연성이 크게 필요하지 않은 3GPP 호환 소규모 네트워크를 구축하는데 사용할 수 있다. 반대로 Magma는 Access Gateway(AGW)를 통해 다양한 RAT을 지원하기 때문에 운영자들이 정책과 HSS 등을 직접 정의할 수 있는 유연성을 가지고 있다. 이를 통해 저렴한 비용으로 네트워크 솔루션을 구축하고자 하는 시골 지역과 같은 사례에 유용하다. 그러나 코드와 문서의 미숙함, 배치 복잡성의 문제가 존재한다. 특히 RAN에 대한 최신 문서가 부족하다.

<img class="modal" src="/_pages/study/paper_review/images/magma_002/2.png" alt="<b>[Fig. 2]</b> Monitoring the performance of the end-to-end connection using Tracer (left side) and MME-log (right-up). Deployed testbed (right-down: 1) Antenna USRP B210, 2) Smartphone (Samsung galaxy S4), 3) Core network, 4) OAI-RAN)."/>

결과는 [Fig. 2]와 같다. 두 시나리오의 전반적인 throughput에 큰 차이는 없지만, OAI-CN은 UL throughput에서 더 좋은 성능을 보였다. CPU의 경우 OAI-CN의 경우 9-10%, Magma-core의 경우 3-4%의 사용량을 보였다. eNodeB는 공통적으로 60% CPU 사용량을 보였다.

---

# 테스트베드 구축

테스트베드 구축은 [github](https://github.com/sodyn99/oai-integration-master){:target="_blank"}를 참고바란다.

<!-- OAI 코어 네트워크를 구축하는데에는 **Ubuntu 22.04**버전을 사용하였다. 자세한 건 [OAI 공식 문서](https://gitlab.eurecom.fr/oai/cn5g/oai-cn5g-fed/-/blob/master/docs/DEPLOY_HOME.md){:target="_blank"}를 참고하자.

우선 Docker를 설치한다. 참고로 나는 wsl2를 사용했는데, wsl2을 사용하고자 하는 경우 wsl2 및 docker 설치 방법은 [여기]()를 참고하기 바란다. 설치 후 docker에 권한을 설정해줘야 한다.

```bash
$ sudo usermod -a -G docker $USER
```
```bash
$ docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username:
Password:
```
Docker에 로그인 후 docker hub에서 이미지를 가져온다. 나는 22.04버전이기 때문에 `ubuntu:jammy`를 가져왔다.
```bash
$ docker pull ubuntu:jammy
$ docker pull mysql:8.0
```
```bash
docker pull oaisoftwarealliance/oai-amf:v2.0.1
docker pull oaisoftwarealliance/oai-nrf:v2.0.1
docker pull oaisoftwarealliance/oai-upf:v2.0.1
docker pull oaisoftwarealliance/oai-smf:v2.0.1
docker pull oaisoftwarealliance/oai-udr:v2.0.1
docker pull oaisoftwarealliance/oai-udm:v2.0.1
docker pull oaisoftwarealliance/oai-ausf:v2.0.1
docker pull oaisoftwarealliance/oai-upf-vpp:v2.0.1
docker pull oaisoftwarealliance/oai-nssf:v2.0.1
docker pull oaisoftwarealliance/oai-pcf:v2.0.1
docker pull oaisoftwarealliance/oai-nef:latest
# Utility image to generate traffic
docker pull oaisoftwarealliance/trf-gen-cn5g:latest
```
```bash
$ docker logout
```

```bash
$ git clone --branch v2.0.1 https://gitlab.eurecom.fr/oai/cn5g/oai-cn5g-fed.git
$ cd oai-cn5g-fed
$ git checkout -f v2.0.1

# 서브 모듈 동기화
$ ./scripts/syncComponents.sh
```

Docker compose를 이용해 basic nrf를 자동으로 구축한다.

```bash
$ cd oai-cn5g-fed/docker-compose/
$ docker-compose -f docker-compose-basic-nrf.yaml up -d
$ docker ps
```
```bash
CONTAINER ID   IMAGE                                     COMMAND                  CREATED      STATUS                    PORTS                                    NAMES
ada795e6348f   oaisoftwarealliance/oai-upf:v2.0.1        "/openair-upf/bin/oa…"   8 days ago   Up 17 minutes (healthy)   2152/udp, 8805/udp                       oai-upf
c23a801280fa   oaisoftwarealliance/oai-smf:v2.0.1        "/openair-smf/bin/oa…"   8 days ago   Up 17 minutes (healthy)   80/tcp, 8080/tcp, 8805/udp               oai-smf
a1bcbbd85ec3   oaisoftwarealliance/oai-amf:v2.0.1        "/openair-amf/bin/oa…"   8 days ago   Up 17 minutes (healthy)   80/tcp, 8080/tcp, 9090/tcp, 38412/sctp   oai-amf
a6dded16cf46   oaisoftwarealliance/oai-ausf:v2.0.1       "/openair-ausf/bin/o…"   8 days ago   Up 17 minutes (healthy)   80/tcp, 8080/tcp                         oai-ausf
fee7739568ec   oaisoftwarealliance/oai-udm:v2.0.1        "/openair-udm/bin/oa…"   8 days ago   Up 17 minutes (healthy)   80/tcp, 8080/tcp                         oai-udm
c0cf8f2412f9   oaisoftwarealliance/oai-udr:v2.0.1        "/openair-udr/bin/oa…"   8 days ago   Up 17 minutes (healthy)   80/tcp, 8080/tcp                         oai-udr
85d27d181535   oaisoftwarealliance/trf-gen-cn5g:latest   "/bin/bash -c ' ip r…"   8 days ago   Up 17 minutes (healthy)                                            oai-ext-dn
426acc9ab446   mysql:8.0                                 "docker-entrypoint.s…"   8 days ago   Up 17 minutes (healthy)   3306/tcp, 33060/tcp                      mysql
919aef5eeed7   oaisoftwarealliance/oai-nrf:v2.0.1        "/openair-nrf/bin/oa…"   8 days ago   Up 17 minutes (healthy)   80/tcp, 8080/tcp, 9090/tcp               oai-nrf
```

Docker network 'demo-oai-public-net'이 자동으로 생성된다.

```bash
$ docker network ls
```
```bash
$ docker network inspect demo-oai-public-net
[
    {
        "Name": "demo-oai-public-net",
        "Id": "fbd6af5ccbf4557b826de26db58b1b240701d82cf0afd1a2bd73390a7a8b4c0c",
        "Created": "2024-02-19T01:27:01.107124943Z",
        "Scope": "local",
        "Driver": "bridge",
        ...
            "Config": [
                {
                    "Subnet": "192.168.70.128/26",
                    "Gateway": "192.168.70.129"
                }
            ]
...
```

```bash
$ docker exec oai-amf ping oai-smf
```


## Wireshark

Wireshark를 설치한다.

```bash
$ sudo add-apt-repository ppa:wireshark-dev/stable
$ sudo apt update
$ sudo apt install wireshark
```


## 외부 IP 연결

'가상 스위치 관리자'

```
[WSL2]
networkingMode = bridged
vmSwitch = wsl_externel
```

```
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.220  netmask 255.255.255.0  broadcast 192.168.1.255
        ether 5e:bb:f6:9e:ee:fa  txqueuelen 1000  (Ethernet)
        RX packets 5746  bytes 612210 (612.2 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 32  bytes 3120 (3.1 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
``` -->

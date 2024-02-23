---
layout: posts
title: "5G 개요"
permalink: /study/communication/5g/1/back/
description:
---

# 표준화

표준화 단체는 크게 2가지로 알면 된다. 바로 ITU와 3GPP이다. **ITU**는 국제전기통신연합으로 유엔 산하의 국제 기구다. 기술 표준을 제정하는 것 뿐만 아니라 주파수 관리, 위성 관리, 개발도상국 기술 지원 등의 역할을 하고 있다. **3GPP**는 유럽의 ETSI, 일본의 TTC, 중국의 CCSA, 한국의 TTA, 미국의 ATIS가 연합하여 설립한 국제 표준화 단체이다.

3GPP의 경우 '사실 표준', ITU는 '국제 표준'을 제정한다고 볼 수 있다. 3GPP에서 제정된 표준이 국제적으로 공식화된 표준은 아니지만 실질적으로 인정되는 국제 표준이라는 것이다. ITU에서 통신 기술에 대한 권고 사항이 발표되면, 3GPP에서 그에 맞춘 표준 기술을 개발한다. 예를 들어 5G의 경우 ITU에서는 IMT-2020이라는 권고 사항을 발표하였고, 3GPP에서는 이를 기반으로 5G 표준에 대한 Release 15를 제정했다.

참고로 6G의 경우 3GPP에서는 첫번째 6G 기술 표준이 될 Release 21을 IMT-2030의 후보기술로 제출할 예정이며, 2030년에 6G 표준 개발 및 승인 완료를 목표로 하고 있다<sup><a href='#Reference'>[1]</a></sup>. 6G에 대해서는 따로 페이지를 만들어 다루도록 하겠다.

# 5G Scenario

ITU에서는 IMT-2020에서 5G의 사용 시나리오로 크게 3가지를 제시했다. 바로 초고속, 대용량, 저지연이다. 이를 각각 **eMBB**, **mMTC**, **URLLC** 라고 한다.

<img class="modal img__small" src="/_pages/study/communication/5g/images/1/1.png" alt="<b>[Fig. 2]</b> Shannon’s communication architecture <a href='#Reference'>[2]</a>."/>

5G의 사용 시나리오를 이 3가지로 나눈 것은 5G의 용도를 달리하겠다는 것이다. eMBB의 경우 초고속을 요구하는 시나리오로, 대표적으로 4K UHD 영상 스트리밍, VR/AR, 게임 등이 있다. mMTC는 스마트 시티, 스마트 팩토리, 자율 주행 등이 있고, 마지막으로 URLLC는 저지연을 요구하는 시나리오로 자율 주행, 원격 수술, 산업용 로봇 등이 있다.

이 3가지는 5G에 있어서 워낙 중요한 개념이지만 이정도만 짚고 넘어가고, 각 시나리오에 대해 요구되는 대략적인 KPI는 위 그림을 참고해주기 바란다.

# 5G Key Technologies

5G에는 6가지 핵심 기술들이 있는데, 이 기술들이 5G의 컨셉이라고 생각하면 된다. 위에서 말한 시나리오를 지원하기 위해 LTE와 어떤 점이 달라졌고 새롭게 추가되었는지 생각하면서 들어가보자. LTE를 모른다고 하더라도 겁먹을 필요는 없다. 5G에 대한 큰그림을 그리고 간다고 생각하면 된다.
- New Spectrum and Bandwidth<br>
    새로운 주파수 대역 사용에 관한 것이다. 5G에서는 LTE의 황금주파수라고 불리는 1.8 GHz보다 높은 3.5 GHz와 28 GHz를 사용한다. 좀더 자세히 보자면 3.5 GHz는 면허, 5 GHz는 비면허 대역으로 사용 가능하다. 약 30 GHz ~ 300 GHz 대역을 mmWave라고 부르는데, 28 GHz를 사용하기 위해선 mmWave에 대한 기술이 필요하다. 근데 이 mmWave라는 것이 다루기가 쉽지 않다. 자세한 내용은 나중에 다뤄보도록 하자.
- mMIMO and Beamforming<br>
    mMIMO, 즉 massive MIMO는 기존의 4x4 또는 8x8 MIMO보다 큰 64x64, 128x128 MIMO를 이야기 한다. 그럼 MIMO가 뭐냐 뭐가 좋은거냐. 자세한 건 나중에 다루도록 하고, 안테나 개수를 늘려 채널 용량을 넓힌다고 생각하자. Beamforming은 좀더 직관적으로 이해할 수 있다. 레이저를 쏘듯이 안테나의 방향을 조절해 특정 단말에 전파를 쏘겠다는 건데 이는 간섭을 줄이고, 신호의 출력을 높일 수 있는 방법이다.
- Lean Design<br>
    Lean Design은 최대한 가볍게 하자는 것이다. 예를 들어 LTE에서는 몇가지 Always-on, 즉 항상 켜져있는 신호가 존재한다. 채널 추정에 사용되는 신호 같은 것들이 있는데 주기적으로 계속 보내게 되는 신호를 말한다. 이런 신호를 줄이면 네트워크의 에너지 효율을 올릴 수 있고, Always-on 신호로 인해 발생되는 다른 셀들과의 간섭도 줄일 수 있게 된다.
- Network Slicing<br>
    네트워크 슬라이싱은 eMBB, mMTC, URLLC 같이 용도에 따라 네트워크를 슬라이스, 즉 나누자는 건데 네트워크 자원을 더 효율적으로 사용하기 위함이다.
- CUPS<br>
    Controll Plane과 User Plane을 나누자는 것이다.
- Multi-access Edge Computing<br>
    Mobile Edge Computing이라고도 하는데 네트워크의 가장자리(Edge)에서 컴퓨팅하겠다는 것이다. 이는 네트워크의 지연을 줄이기 위함이다.


---

# <a name="Reference"></a>Reference
1. TTA, "3GPP, 6G 표준화 주요 일정 확정," <i>TTA 보도 자료</i>, 2023년 12월 18일. [Online]. Available: [https://www.tta.or.kr/tta/selectBbsNttView.do?key=76&bbsNo=107&nttNo=13137&searchCtgry=&searchCnd=all&searchKrwd=&integrDeptCode=&pageIndex=1](https://www.tta.or.kr/tta/selectBbsNttView.do?key=76&bbsNo=107&nttNo=13137&searchCtgry=&searchCnd=all&searchKrwd=&integrDeptCode=&pageIndex=1){:target="_blank"}. [Accessed: 19- Feb- 2024].
2. [ETSI](https://www.etsi.org/technologies/5g?tmpl=component){:target="_blank"}
{:.post__reference}
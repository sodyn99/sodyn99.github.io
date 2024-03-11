---
layout: posts
title: "Energy-aware Scheduling of Virtualized Base Stations in O-RAN with Online Learning"
category: optimization
permalink: /study/paper_review/oran_001/
prev: paper_review
---

O-RAN은 OPEX/CAPEX(운영/자본 지출)을 줄이고 다양한 기기에 호스팅 될 수 있다는 장점이 있지만, virtualization된 기지국(vBS)은 예측하기 어려운 성능과 불안정한 에너지 소비라는 단점이 있다. vBS의 자원관리를 최적화하고자 하는 연구는 이전에도 이루어 졌지만, 주로 (i) 제어 장치와 성능 함수의 관계에 대한 모델, (ii) 훈련 데이터에 의존한 model-free 접근 방법, (iii) 강화 학습(Reinforcement Learning) 에 중점을 두고 있다. 그러나 모델 기반의 경우 vBS 자체가 호스팅 플랫폼과 네트워크 조건에 심하게 영향을 받기 때문에 모델들이 실용적이지 못하며, model-free의 경우 네트워크 슬라이싱, 엣지 컴퓨팅 등에 사용되었지만 훈련 데이터의 가용성에 영향을 많이 받는다. 또 강화 학습 기반의 솔루션은 차원의 저주와 함께 성능을 보장하지 못한다. 이밖에도 다목적 Bayesian 기반의 학습이 제안되었지만, 이 역시 여러 제한적인 가정들로 인한 제약이 있다.

이 논문에서는 Exp3 알고리즘<sup><a href='#Reference'>[1]</a></sup>을 기반으로 하는 vBS 제어 방식을 제안한다.

<img class="modal img__small" src="/_pages/study/paper_review/images/oran_001/1.gif" alt="<b>[Fig. 1]</b> O-RAN 호환 architecture 및 workflow."/>

---

# <a name="Reference"></a>Reference
1. P. Auer, N. Cesa-Bianchi, Y. Freund and R. E. Schapire, "The Non-stochastic Multiarmed Bandit Problem", SIAM Journal on Computing, vol. 32, no. 1, pp. 48-77, 2002.
{:.post__reference}
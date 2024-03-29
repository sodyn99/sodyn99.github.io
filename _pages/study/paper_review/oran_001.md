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

이 알고리즘은 vBS 송신 전력, 변조 및 부호화 방식(MCS), 듀티 사이클(또는 에어타임)을 파라미터로 vBS 작동에 대한 threshold를 결정한다. 우선 다운링크에서 시간 $t$ 동안 DL control을 아래와 같이 나타낼 수 있다.

$$
x_{t}^{d}\in \mathcal{P}_{d}\times\mathcal{M}_{d}\times \mathcal{A}_{d}
$$

여기서 $\mathcal{P_d} = \\{ p^d_i, \forall i \in [H] \\}$ 는 최대 허용 vBS 송신 전력을 나타내고, $\mathcal{M_d} = \\{ m^d_i, \forall i \in [I] \\}$ 는 최대 허용 MCS 집합,  $\mathcal{A_d} = \\{ a^d_i, \forall i \in [J] \\}$ 는 듀티 사이클을 나타낸다.

UL control은 $\mathcal{M_u} = \\{ p^u_i, \forall i \in [K] \\}$, $\mathcal{A_u} = \\{ a^u_i, \forall i \in [L] \\}$ 에 대해서 아래와 같이 나타낼 수 있다.

$$
x_{t}^{u}\in \mathcal{M}_{u}\times \mathcal{A}_{u}
$$

따라서 가능한 모든 유한한 조합 $\mathcal{X}$ 를 정의할 수 있고, 시간 $t$ 동안의 정책을 정의할 수 있다.

$$
\begin{align}
  \mathcal{X}=\mathcal{P}_{d}\times\mathcal{M}_{d}\times \mathcal{A}_{d}\times\mathcal{M}_{u}\times \mathcal{A}_{u} \\
  x_{t}=(x_{t}^{d},\ x_{t}^{u})\in \mathcal{X}
\end{align}
$$

유틸리티 함수 $U_t$ 와 보상 함수 $\tilde{f}_{t} : \mathcal{X} \rightarrow \mathbb{R}$ 는 아래와 같이 정의된다. 파라미터 $\delta > 0$ 은 유틸리티와 에너지 비용의 상대적 우선순위를 조정하기 위해 설정된다.

$$
\begin{align}
  U_t\left(x_t\right)=\log \left(1+\frac{R_t^d\left(x_t^d\right)}{d_t^d}\right)+\log \left(1+\frac{R_t^u\left(x_t^u\right)}{d_t^u}\right) \tag{1} \\
  \tilde{f}_{t}(x_{t})=U_{t}(x_{t})-\delta P_{t}(x_{t}) \tag{2}
\end{align}
$$


---

# <a name="Reference"></a>Reference
1. P. Auer, N. Cesa-Bianchi, Y. Freund and R. E. Schapire, "The Non-stochastic Multiarmed Bandit Problem", SIAM Journal on Computing, vol. 32, no. 1, pp. 48-77, 2002.
{:.post__reference}
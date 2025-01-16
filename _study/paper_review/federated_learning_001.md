---
layout: posts
title: "Communication-Efficient Learning of Deep Networks from Decentralized Data"
subject: "federated learning"
category: paper_review
---

본 논문 리뷰에는 개인적인 해석이 포함되어 있음
{: .notice--info}

이 논문은 ***Federated Learning(연합학습)***이라는 학습 방식을 제안한다. 연합학습은 개인 정보 보호에 민감하거나 데이터 양이 많을 경우 로컬에서 계산된 업데이트를 집계하여 공유 모델을 학습하는 분산형 접근 방식이다. 논문은 실험을 통해 unbalanced data\*와 non-IID data\**에 대한 연합학습의 효율성을 입증하며, 기존의 sychronized SGD에 비해 통신 라운드가 10~100배 감소하는 것을 보여준다.

\* unbalanced data(불균형 데이터): 데이터셋의 클래스 간 분포가 한쪽으로 치우침<br>
\** non-IID data(비독립 동일 분포 데이터): 각 노드의 데이터가 서로 다른 성격(분포)을 가짐

# 1. Introduction

논문의 주요 기여점은 다음과 같다.

1. 모바일 장치의 분산 데이터에 대한 문제 식별
2. 간단하고 실용적인 알고리즘 선택
3. 제안된 접근법에 대한 광범위한 경험적 평가

따라서 이에 대한 model averaging을 위한 알고리즘으로 **FedAvg**를 소개한다.<br>
알고리즘에 대한 본격적인 설명에 앞서, 고려해야 할 3가지 요소에 대해 논의한다.

## 1. Federated Learning

연합학습을 통해 해결할 수 있는 이상적인 문제는 다음과 같다.

1. 모바일 장치에서 수집된 **실제 데이터(real-world data)**는, 데이터 센터에서 일반적으로 사용 가능한 프록시 데이터(proxy data)에 비해 명확한 이점을 제공한다(특정 사용자의 실제 환경을 반영).
2. 이러한 데이터(real-world data)는 **개인 정보 보호에 민감**하거나 데이터 양이 많을 수 있기 때문에 순전히 모델 학습을 위해 데이터 센터에 전송하지 않는 것이 좋다.
3. Supervised tasks\*의 경우 사용자 상호작용을 통해 **레이블을 자연스럽게 추론**할 수 있다.<br>
  \* Supervised tasks: supervised learning이 적용될 수 있는 작업 유형

위 문제 상황에 해당되는 두 가지 상황을 생각해 볼 수 있다.<br>
1) **Image classification** (e.g., 여러 번 보거나 공유될 가능성이 높은 사진을 예측하는 경우)<br>
2) **Language model**(e.g., 사용자가 다음에 입력할 단어를 예측하는 경우)<br>
그러나 이러한 상황에 대한 학습 데이터는 개인정보 보호 문제에 민감할 수 있으며(사용자의 사진, 비밀번호, 메시지 등), Wikipedia 및 기타 웹 문서와 같은 일반적인 프록시 데이터 세트와도 크게 다를 수 있다. 마지막으로 레이블 지정은 텍스트의 경우 언어 모델 학습을 위한 자체 레이블 지정, 사진 레이블은 사진 앱과의 자연스러운 사용자 상호 작용을 통해 정의될 수 있다.

## 2. Privacy

연합학습은 데이터 센터 학습에 비해 개인 정보 보호의 이점을 제공할 수 있다. 아무리 데이터가 익명화(anonymized)되었다고 하더라도 다른 데이터셋과 join 하는 등 **완전히 안전하다고 보장할 수 없다**. 연합학습을 통해 전송되는 정보는 특정 모델을 업데이트하기 위한 최소한의 정보만 포함된다. 또한 업데이트 정보는 **일시적(ephemeral)**이어야 한다(특정 모델을 업데이트 후에는 즉시 삭제 되어야 함).

## 3, Federated Optimization

연합학습과 관련된 최적화 문제는 일반적인 분산 최적화 문제와 구별되는 속성을 가진다.

1. **Non-IID**: 특정 클라이언트의 로컬 학습 데이터가 모집단을 대표할 수 없다.
2. **Unbalanced**: 마찬가지로 일부 사용자는 다른 사용자보다 훨씬 더 많은 서비스나 앱을 사용할 수 있기 때문에 로컬 학습 데이터의 양이 달라질 수 있다.
3. **Massively distributed**: 최적화에 참여하는 클라이언트 수가 클라이언트 자체의 평균 데이터 양보다 훨씬 크다.
4. **Limited communication**: 모바일 장치는 종종 오프라인 상태이며, 통신 자체가 느리거나 비싸다.

따라서 최적화 작업에 있어 데이터 자체의 속성 뿐 아니라 통신 제약에 대한 특성에도 주의를 기울여야 한다. 또한 클라이언트 가용성(client availability)(e.g., 미국과 영국의 사용자의 전화는 서로 다른 시간에 연결될 가능성이 높음), 응답하지 않는 클라이언트, 클라이언트 데이터셋이 동적으로 변화하는 등 실제로 연합학습 시스템을 배포하기 위해선 이론적 문제 이외의 다양한 **실질적 문제(practical issues)**를 고려하여야 한다.

그러나 이러한 실질적 문제는 논문의 범위를 벗어난다. 대신 실험에 적합하면서도 클라이언트 가용성, unbalanced, non-IID의 주요 문제를 해결하는 **통제된 환경**을 사용하여 실험을 수행한다.

우선 통신 라운드에서 진행되는 **synchronous 업데이트 방식**(모든 클라이언트가 업데이트를 완료한 후 한번에 동기화)을 가정한다. 실험에 참여하는 **클라이언트 수 $K$를 고정**하고, 각 클라이언트는 고정된 로컬 데이터셋을 갖는다. 각 라운드에서는 **클라이언트의 랜덤 비율 $C$가 선택**되고 서버는 선택된 클라이언트들에게 global state를 전송한다. 일부 클라이언트만 선택한 이유는 **특정 클라이언트 수 이상을 추가해도 성능 향상 효과가 미미**한 것으로 나타났기 때문이다(diminishing returns, 수확체감). 각 클라이언트는 global state와 해당 로컬 데이터를 바탕으로 로컬 업데이트를 수행하고 서버에 전송한다. 서버는 업데이트를 global state에 적용하고 이러한 과정을 반복한다.

최적화 문제는 아래와 같이 정의된다.

$$
\min_{w \in \mathbb{R}^d} f(w) \quad \text{where} \quad f(w) \overset{\text{def}}{=} \frac{1}{n} \sum_{i=1}^n f_i(w)
$$

여기서 $f_i(w)=\ell(x_i, y_i; w)$는 모델 파라미터 $w$에 대한 손실 함수이며, 여기서 $\ell$은 예측 손실 함수(e.g., MSE, cross-entropy)이다. 그럼 이제 **연합학습에서는** 데이터가 분할된 $K$개의 클라이언트가 있다고 가정할 때, 각 클라이언트 $k$는 포인트 인덱스 집합 $\mathcal{P}_k$를 가지며, $n_k$개의 데이터 포인트를 가진다($n_k = \|\mathcal{P}_k\|$). 따라서 위 목적 함수는 아래와 같이 다시 쓸 수 있다.

$$
f(w) = \sum_{k=1}^K \frac{n_k}{n} F_k(w) \quad \text{where} \quad F_k(w) = \frac{1}{n_k} \sum_{i \in \mathcal{P}_k} f_i(w)
$$

다시 말해 클라이언트가 자신의 데이터 포인트 집합을 로컬에서 사용해 평균 손실 $F_k(w)$를 계산한 다음 전체 손실 함수 $f(w)$를 최소화하는 것이 목표이다. IID 상황에서는 클라이언트의 기댓값이 전체 손실 함수와 동일하기 때문에 $\mathbb{E}[P_k(w)] = f(w)$지만, **non-IID 상황에서는 이러한 가정이 성립하지 않는다**.

# 2. FedAvg Algorithm

## 1. FedSGD

딥러닝의 최적화 사례는 SGD(stochastic gradient descent)의 변형이 주를 이루며, 따라서 연합 최적화(federated optimization)을 위한 알고리즘도 SGD에서 출발한다. **FedSGD**는 (단순히) 한 번의 통신 라운드마다 하나의 batch gradient를 계산하는 방식이며, 다음에 살펴볼 FedAvg에서 $E=1$, $B=\infty$(E: epoch, B: batch size)인 경우이다.

매 라운드 $t$마다 $C$-fraction의 클라이언트가 선택되고, 우선 선택된 클라이언트 $k$는 자신의 데이터 $\mathcal{P}_k$를 사용해 로컬 gradient를 계산한다. 지금은 $C=1$이라고 가정한다(즉, 모든 클라이언트가 매 라운드 참여, 선택된 클라이언트 수: $K$).

$$
g_k \leftarrow \nabla F_k(w)
$$

각 클라이언트는 계산된 로컬 그래디언트 $g_k$를 서버에 전송하고, 서버는 전송된 그래디언트를 평균 내어 글로벌 그래디언트를 계산한다.

$$
w_{t+1} \leftarrow w_t - \eta \sum_{k=1}^K \frac{n_k}{n} g_k
$$

전체 손실 함수 $f(w)$에 대해 $\sum_{k=1}^K \frac{n_k}{n} g_k=\nabla f(w_t)$이므로, 위 식은 다시 아래와 같이 쓸 수 있다.

1. $k \in K$ 클라이언트에 대해 $w_k^{t+1} \leftarrow w_t - \eta g_k$ 업데이트
2. 서버에서 $w_{t+1} \leftarrow \frac{1}{K} \sum_{k=1}^K \frac{n_k}{n} w_k^{t+1}$ 업데이트 수행

즉, 각 클라이언트는 로컬 데이터를 사용해 로컬 업데이트를 수행하고, 서버는 클라이언트의 업데이트를 평균 내어 글로벌 업데이트를 수행한다. **FedSGD** 방식은 계산적으로 효율적이지만, 매 라운드 $C \cdot K$개의 클라이언트에서 전체 데이터에 대한 그래디언트를 서버로 보내므로 **통신 비용이 커진다**. 본 논문은 FedSGD의 통신 비용 문제를 해결하기 위해 **FedAvg**를 제안한다.

## 2. FedAvg

FedAvg 알고리즘은 FedSGD의 통신 비용 문제를 해결하기 위해 클라이언트가 로컬에서 여러 번의 SGD 업데이트를 수행한 후 결과를 서버로 전송한다.

<img class="modal" style="max-height:22em;" src="/_pages/study/paper_review/images/federated_learning_001/1.png" alt=""/>

우선 $w_0$로 모델 초기화를 수행하고, 각 라운드 별로 아래의 과정을 수행한다.

- **Server executes**:
   - $C$-fraction의 클라이언트를 랜덤하게 선택하고, 선택된 클라이언트 집합은 $S_t$로 나타낸다.
   - 선택된 클라이언트 수는 $m \leftarrow max(C \cdot K, 1)$로 계산된다.<br>
      (즉, $C \cdot K$보다 작은 경우 최소 1개의 클라이언트를 선택한다)
    - 각 클라이언트 $k \in S_t$는 병렬적으로 로컬 업데이트를 수행하고, 업데이트된 모델 $w_{t+1}^k$를 수집한다.<br>
      $w_{t+1}^k \leftarrow \text{ClientUpdate}(k, w_t)$
    - 서버는 클라이언트 업데이트를 평균 내어 글로벌 모델 $w_{t+1}$을 계산한다.<br>
      $w_{t+1} \leftarrow \sum_{k \in S_t} \frac{n_k}{n} w_{t+1}^k$

- **ClientUpdate**:
    - 클라이언트 $k$는 로컬 데이터 $\mathcal{P}_k$를 크기 $\mathcal{B}$의 mini-batch로 나눈다.
    - $E$번의 로컬 epoch 동안 모델을 학습한다.
    - 각 epoch마다 mini-batch $b \in \mathcal{B}$에 대해 로컬 SGD 업데이트를 수행한다.<br>
      $w_{t+1}^k \leftarrow w_t - \eta \nabla \ell(w; b)$
    - $E$번의 epoch 동안 업데이트된 모델 $w$를 반환한다.

<img class="modal img__small" src="/_pages/study/paper_review/images/federated_learning_001/2.png" alt="<b>[Fig. 1]</b> 모델 초기화에 따른 loss 비교"/>

위 그림은 두 모델 $w$와 $w'$의 파라미터를 averaging($\theta w+(1-\theta)w',\ \theta \in [-0.2, 1.2]$)하여 새로운 모델을 생성한 결과이다. 왼쪽 그래프는 서로 다른 초기값으로 학습된 모델이며, 오른쪽 그래프는 동일한 초기값에서 학습된 모델이다. **서로 다른 초기값**을 가지는 경우 파라미터를 단순히 평균 냈을 때(즉, $\theta=0.5$) **손실이 크게 증가**하는 것을 확인할 수 있으며, 오히려 평균을 했을 때 기존 모델보다 더 나쁜 성능을 가질 수 있음을 보여준다. 반면 **동일한 초기값**을 가지는 경우 파라미터를 $\theta=0.5$로 평균했을 때 **손실이 줄어드는** 것을 확인할 수 있다. 이는 동일한 초기값에서 시작한 모델을 파라미터 평균 했을 때 더 나은 성능을 보일 수 있고, 즉 **FedAvg 알고리즘이 효과적**이라는 것을 보여준다.

# 3. Experimental Results

실험에서는 연합학습과 제안된 알고리즘인 FedAvg의 성능을 평가한다. 실험의 목표는 아래와 같이 정리해 볼 수 있다.

1. FedAvg 알고리즘의 효율성과 성능 검증.
2. FedAvg가 non-IID 및 unbalanced 데이터에서 잘 작동될 수 있는지 확인.
3. FedAvg가 기존의 sychronized SGD에 비해 통신 비용을 얼마나 줄일 수 있는지 확인.

논문에서는 3가지 데이터셋을 사용하여 실험을 진행한다. (상세한 모델 구조는 논문 참조)

1. **MNIST (손글씨 숫자 데이터)**
    - 데이터 분포:
        - IID: 데이터를 무작위로 섞은 후 클라이언트에 균등하게 분배
        - Non-IID: 데이터를 숫자 레이블별로 정렬 후 각 클라이언트가 2개의 숫자만 가지도록 분배
    - 모델: 2NN, CNN

2. **CIFAR-10 (이미지 분류 데이터)**
    - 데이터 분포: IID
    - 모델: CNN

3. **Shakespeare (텍스트 모델링)**
    - 셰익스피어 작품의 대사를 각 등장인물별로 나눔 (총 1146명의 등장인물이 각 클라이언트 역할)
    - 데이터 분포: 등장인물별로 unbalanced
    - 모델: LSTM

## 1. Increasing parallelism (병렬성 증가)

<img markdown=1 class="modal img__small" src="/_pages/study/paper_review/images/federated_learning_001/3.png" alt="<b>[Table. 1]</b> Increasing parallelism 실험결과"/>

위 실험 결과는 MNIST 모델 2NN과 CNN에 대해 $C$를 변경했을 때의 결과이며 **목표 test-set 정확도를 달성하기 위한 통신 라운드 수**를 보여준다. Fig. 2의 그래프에 보여지는 가로 회색 선이 목표 test-set 정확도이며 해당 정확도를 넘어서는데 필요한 라운드 수를 측정한다. 실험 결과를 통해 알 수 있는 사항은 다음과 같다.

1. $B=\infty$인 경우, 클라이언트 비율($C$)이 증가시키는 데서 얻는 이점은 작다.($B=\infty$의 경우는 지양해야 함)
2. $B=10$의 경우, 특히 non-IID의 경우 $C\geq0.1$에서 **통신 비용이 크게 감소**한다.
3. 이러한 결과를 바탕으로 **대부분의 후속 실험에서는 $C=0.1$로 고정**
4. $B=\infty$의 경우와 $B=10$의 경우를 비교했을 때, 극적인 속도 향상(speed up)을 보임.

## 2. Increasing computation per client (클라이언트당 계산량 증가)

<div class="post__stage-container">
    <div class="post__stage">
      <img markdown=1 class="modal" src="/_pages/study/paper_review/images/federated_learning_001/4.png" alt="<b>[Table. 2]</b> Increasing computation per client 실험 결과"/>
    </div>
    <div class="post__stage">
      <img markdown=1 class="modal" src="/_pages/study/paper_review/images/federated_learning_001/5.png" alt="<b>[Fig. 2]</b> MNIST CNN(위) 및 Shakespeare LSTM(위)에 대한 Test Accuracy vs. 통신 라운드"/>
    </div>
</div>

이 실험에서는 앞서 말했듯이 $C=0.1$로 고정한 상태에서 각 라운드마다 클라이언트당 계산량을 증가시키며 실험을 진행했다. 대신 $B$를 줄이거나, $E$를 증가시키거나, 두 가지를 동시에 적용했다. 위 그래프(Fig. 2)에서는 각 라운드마다 로컬 SGD 업데이트를 더 많이 수행(즉, $E$를 증가)할수록 통신 비용이 극적으로 감소함을 보여준다. Table. 2는 이러한 속도 향상을 정량적인 결과로 보여준다.

클라이언트당 라운드별 예상 업데이트 횟수($u$)는 아래와 같이 계산되며 이어서 결과를 요약하자면,

$$
u = \frac{nE}{KB}
$$

$n$: 데이터셋 크기, $E$: 로컬 epoch 수, $K$: 클라이언트 수, $B$: 로컬 mini-batch 크기

1. **$u$를 증가시키면** 통신 비용이 크게 감소한다. 이때 $B$를 낮추거나 $E$를 높여야 하는데, $B$를 낮추는 것은 계산 시간에 큰 영향을 미치지 않기 때문에 **$E$ 보다 $B$를 우선적으로** 튜닝해야 한다(epoch를 높일수록 시간이 크게 증가함).
2. MNIST 데이터의 IID 경우, 클라이언트 계산량을 증가시켰을 때 필요한 라운드 수가 CNN의 경우 35배, 2NN의 경우 46배(표에는 안나옴) 감소했다. Non-IID의 경우 이에 비해서는 속도 향상이 다소 작았지만, 2.8~3.7배로 상당한 수준의 속도 향상을 보였다.
3. **완전히 다른 데이터(non-IID)**에 대해 학습된 모델의 파라미터를 단순히 평균 해도 성능이 향상되는 것을 확인할 수 있다. 이는 **FedAvg 알고리즘이 효과적**임을 보여준다.

## 3. Can we over-optimize on the client datasets? (클라이언트 데이터셋에 다해 과도하게 최적화할 수 있을까?)

이는 $E$를 설정할 때 너무 크게 하여 클라이언트가 로컬 데이터를 너무 많이 학습하면, 글로벌 모델의 성능에 부정적인 영향을 줄 수 있는지에 대한 실험이다.

<div class="notice--info" markdown=1>
### 이론적 관점: $E\rightarrow\infty$일 때

1. **Convex problem**<br>
    손실 함수 $f(w)$가 convex일 경우, 손실 함수의 모든 로컬 최적값이 글로벌 최적값과 일치한다.<br>
    따라서 $E\rightarrow\infty$일 때, 모든 클라이언트가 로컬 데이터셋에 대해 무한히 학습하면 글로벌 최적값에 수렴한다.
2. **Non-convex problem**<br>
    non-convex 문제에서는 같은 basin에 초기화된 경우라면 $E\rightarrow\infty$일 때 글로벌 최적값에 수렴할 가능성이 높다.

따라서, 하나의 averaging(첫 통신 라운드)은 합리적인 모델을 생성할 수는 있지만, **추가적인 라운드에서는 더 이상의 글로벌 성능 향상을 기대하기 어렵다**고 볼 수 있다.
</div>

<img markdown=1 class="modal img__small" src="/_pages/study/paper_review/images/federated_learning_001/6.png" alt="<b>[Fig. 3]</b> Epoch 수에 따른 Test Accuracy"/>

위 그래프는 Shakespeare LSTM 모델에 대해 $B=10$, $C=0.1$로 고정하고 $E$를 증가시키며 진행한 실험 결과이다. 로컬 epoch 수가 큰 경우, FedAvg의 성능이 정체 혹은 발산하는 것을 확인할 수 있다. 이에 대해 논문에서는 $E$를 작게 하거나 $B$를 크게 설정하는 것을 제안하고 있다.

## 4. CIFAR experiments

<img markdown=1 class="modal img__small" src="/_pages/study/paper_review/images/federated_learning_001/7.png" alt="<b>[Table. 3]</b> CIFAR10 실험 결과"/>

<div class="post__stage-container">
    <div class="post__stage">
      <img markdown=1 class="modal img__small" src="/_pages/study/paper_review/images/federated_learning_001/8.png" alt="<b>[Fig. 4]</b> CIFAR10 실험에서 Test Accuracy vs. 통신 라운드"/>
    </div>
    <div class="post__stage">
      <img markdown=1 class="modal img__small" src="/_pages/study/paper_review/images/federated_learning_001/9.png" alt="<b>[Fig. 5]</b> CIFAR10 실험에서 Test Accuracy vs. minibatch gradient 계산 수"/>
    </div>
</div>

이 실험에서는 비교 대상 알고리즘으로 중앙집중식 **SGD**($B=10$, 각 mini-batch 업데이트는 통신 라운드 1회로 봄), **FedSGD**($C=0.1$, $E=1$, $B=50$), **FedAvg**($C=0.1$, $E=5$, $B=50$)을 사용했다.

1. FedSGD는 SGD보다 빠른 속도로 수렴하지만, 정확도는 85%에 미치지 못한다.
2. FedAvg는 SGD에 비해 50배 정도 빠르게 정확도 85%에 수렴하며, Fig. 4 그래프에서 FedSGD에 비해서도 속도가 빠른 것을 확인할 수 있다.
3. Fig. 2 그래프에서는 $C=0$인 경우, 즉 한나의 클라이언트만 참여하는 경우 SGD와 FedAvg 모두 정확도가 크게 진동하는 현상이 나타난다. $C$를 증가시킬 경우 이러한 진동 현상이 완화되는 것을 확인할 수 있다.

# 4. 마무리

이상으로 연합학습을 처음으로 제안한 "Communication-Efficient Learning of Deep Networks from Decentralized Data" 논문을 정리해 보았다. 연합학습이 앞으로 어떻게 발전해 나갈지, 또 이를 적용할 수 있는 다양한 분야에서 어떤 성과가 나타날지 기대된다.
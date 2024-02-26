---
layout: posts
title: "PHY Control 시그널링 - Uplink"
permalink: /study/communication/5g/7/uplink/
description:
---

# Uplink Control Information(UCI)

Uplink Control을 위한 UCI는 3가지로 볼 수 있다. 단말이 수신한 DL-SCH 전송 블록에 대한 응답인 **HARQ Ack/Nack**, 단말이 UL-SCH 전송을 위해 Uplink 자원을 요청할 때 보내는 **Scheduling Request(SR)**, 단말이 기지국으로 보내는 Downlink 채널에 대한 채널 상태 보고(**CSI Report**)가 그것이다.

<img class="modal" src="/_pages/study/communication/5g/images/7/uplink/1.png" alt="<b>[Fig. 1]</b> Types of UCI, (a) HARQ Ack/Nack (b) Scheduling Request (c) CSI Report <a href='#Reference'>[1]</a>."/>

UCI는 **PUCCH 또는 PUSCH**를 통해 전송된다. DCI의 경우에는 오로지 PDCCH를 통해서만 전송이 되었는데, 단말의 성능이 제한되어 있기 때문에 이미 할당받은 Uplink 자원이 있어서 PUSCH를 보낼 경우에는 UCI를 PUSCH를 통해 전송을 하고, 그 외에는 PUCCH를 통해 전송한다. PUSCH로 보내는 UCI에는 SR을 제외한 HARQ Ack/Nack, CSI Report가 해당이 되는데, PUSCH를 보낸다는 말은 이미 스케줄링이 되어있다는 것이기 때문에 SR을 보낼 필요가 없다.


# PUCCH

PUCCH를 위한 자원할당은 Payload 크기와 채널 상태에 따라 적합한 **PUCCH format**을 선택하여 이루어지게 된다.

<div class="post__stage-container">
    <div class="post__stage">
        <img class="modal" src="/_pages/study/communication/5g/images/7/uplink/2.png" alt="<b>[Fig. 2]</b> PUCCH formats <a href='#Reference'>[2]</a>."/>
    </div>
    <div class="post__stage">
        <img class="modal" src="/_pages/study/communication/5g/images/7/uplink/6.png" alt="<b>[Fig. 3]</b> PUCCH formats <a href='#Reference'>[3]</a>."/>
    </div>
</div>

**2 bits 이하의 payload**의 경우 PUCCH format 0과 1을 사용하게 된다. HARQ Ack/Nack이나 SR을 보낼 때 사용된다. CSI Report는 보통 bit 수가 많기 때문에(2 bits 초과) PUCCH format 2~4를 사용해 보낸다. PUCCH format 0은 OFDM 심볼 최대 2개까지만 사용할 수 때문에 채널 상태가 좋지 않거나 먼 거리에 있을 경우에는 OFDM 심볼 4~14개를 사용하는 PUCCH format 1을 사용한다.

**Payload가 2 bits를 초과**하는 경우 PUCCH format 2와 3을 사용하는데 마찬가지로 채널 상태가 좋지 않거나 먼 거리에 있을 경우에는 PUCCH format 3를 사용한다. OFDM 심볼을 최대 2개까지만 사용하는 PUCCH format 0, 2를 **short PUCCH format**이라고 하고 심볼 4~14개를 사용하는 PUCCH format 1, 3, 4를 **long PUCCH format**이라고 한다.

PUCCH format 2와 3은 2 bits를 초과하는 payload에 대한 UE multiplexing을 지원하지 않는다. 그에 대한 대안으로 PUCCH format 4는 FDM을 통해 4대 이상의 UE multiplexing을 지원한다.

<div class="post__stage-container">
    <div class="post__stage">
        <img class="modal" src="/_pages/study/communication/5g/images/7/uplink/3.png" alt="<b>[Fig. 4]</b> General description of NR PUCCH <a href='#Reference'>[4]</a>."/>
    </div>
    <div class="post__stage">
        <img class="modal" src="/_pages/study/communication/5g/images/7/uplink/4.png" alt="<b>[Fig. 5]</b> PUCCH formats <a href='#Reference'>[4]</a>."/>
    </div>
</div>

Long PUCCH format은 frequency hopping이 적용돼 할당된 대역폭 양 극단에 위치한다.

PUCCH format 별로 리소스 매핑 과정이 다르다.

## PUCCH format 0

우선 PUCCH format 0의 기본 시퀀스로는 base [시퀀스](/study/communication/5g/2/2/)를 사용한다. 이 기본 시퀀스에 12가지의 위상 회전(phase rotation)에 정보를 싣는다. 즉 base 시퀀스 자체에는 정보가 없는데 이 시퀀스에 서로 다른 12개의 orthogonal한 직교 시퀀스가 존재해서 정보에 의해 시퀀스의 위상이 결정된다.

<img class="modal img__small" src="/_pages/study/communication/5g/images/7/uplink/7.png" alt="<b>[Fig. 6]</b> HARQ와 SR을 이용한 위상 회전의 예 <a href='#Reference'>[5]</a>."/>

12개의 위상 회전 중에서 HACK Ack/Nack이 1 bit일 경우에는 위상 차이가 $2 \pi \cdot 6/12$이고, 2 bits일 경우 $2 \pi \cdot 3/12$인 것이다.

다수의 단말이 같은 시간-주파수 자원을 사용할 경우 서로 다른 기준 위상 회전을 가질 수 있다. 예를 들어 한 단말은 0, $2 \pi \cdot 6/12$를 사용하고, 다른 단말은 $2 \pi \cdot 3/12$ 및 $2 \pi \cdot 9/12$를 사용할 수 있다.

위상 오프셋의 경우 슬롯마다 호핑되도록 설정할 수 있는데, 오프셋의 경우 pseudo random 시퀀스에 의해 결정된다.

<img class="modal img__small" src="/_pages/study/communication/5g/images/7/uplink/5_0.png" alt="<b>[Fig. 6]</b> PUCCH format 0 <a href='#Reference'>[5]</a>."/>

## PUCCH format 1

<img class="modal img__small" src="/_pages/study/communication/5g/images/7/uplink/5_1.png" alt="<b>[Fig. 7]</b> PUCCH formats <a href='#Reference'>[5]</a>."/>

## PUCCH format 2

<img class="modal img__small" src="/_pages/study/communication/5g/images/7/uplink/5_2.png" alt="<b>[Fig. 8]</b> PUCCH formats <a href='#Reference'>[5]</a>."/>

## PUCCH format 3

<img class="modal img__small" src="/_pages/study/communication/5g/images/7/uplink/5_3.png" alt="<b>[Fig. 9]</b> PUCCH formats <a href='#Reference'>[5]</a>."/>

## PUCCH format 4

<img class="modal img__small" src="/_pages/study/communication/5g/images/7/uplink/5_4.png" alt="<b>[Fig. 10]</b> PUCCH formats <a href='#Reference'>[5]</a>."/>

---

# <a name="Reference"></a>Reference

1. “5G Physical Uplink Control Channel (PUCCH) and Uplink Control Information (UCI).” Youtube, MATLAB, 9 Sept. 2019, [https://www.youtube.com/watch?v=Tc_ECMWSH30](https://www.youtube.com/watch?v=Tc_ECMWSH30){:target="_blank"}.
2. “PUCCH Formats in 5G.” Youtube, Wireless Explained, 4 May 2023, [https://www.youtube.com/watch?v=g6IjHANJ180](https://www.youtube.com/watch?v=g6IjHANJ180){:target="_blank"}.
3. MathWorks, "5G NR Uplink with PUCCH Vector Waveform Generation," [Online]. Available: [https://kr.mathworks.com/help/5g/ug/uplink-with-pucch-carrier-waveform-generation.html](https://kr.mathworks.com/help/5g/ug/uplink-with-pucch-carrier-waveform-generation.html){:target="_blank"}. [Accessed: 26- Feb- 2024].
4. NTT DOCOMO, INC., “WI Summary of New Radio Access Technology,” [3GPP TDocs (written contributions) at meeting](https://www.3gpp.org/dynareport?code=TDocExMtg--RP-80--18663.htm){:target="_blank"}, RP-180990, 2018.
5. Erik Dahlman, Stefan Parkvall, Johan Sköld,Chapter 10 - Physical-Layer Control Signaling, Editor(s): Erik Dahlman, Stefan Parkvall, Johan Sköld, 5G NR (Second Edition), Academic Press, 2021, Pages 197-241.
6. ShareTechnote, [5G/NR - PUCCH](https://www.sharetechnote.com/html/5G/5G_PUCCH.html){:target="_blank"}.
{:.post__reference}
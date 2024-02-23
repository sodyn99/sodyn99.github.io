---
layout: posts
title: "Bluetooth 세대별 특징"
permalink: /projects/bluetooth/generation/
---

# Bluetooth 1

GFSK 변조 방식을 이용해 최대 1 Mbps, 실제로는 0.7 Mbps의 전송속도와 최대 10 m의 전파 범위를 지원한다.

# Bluetooth 2

Bluetooth 2.0은 2004년 3월에 발표되었다. 기존에 사용하던 GFSK 변좡식을 그대로 사용할 경우 1 Mbps의 전송속도를 유지하지만, Enhanced Data Rate(EDR)을 통해 최대 3 Mbps, 실제로는 2.1 Mbps의 속도가 지원된다.

EDR은 2 Mbps를 지원하는 π/4-DPSK와 3 Mbps를 지원하는 8-DPSK 변조 방식을 사용한다.

# Bluetooth 3

Bluetooth 3.0은 2009년 4월에 발표되었다. 이전 버전에 비해 8배 가량 향상된 24 Mbps의 속도를 제공한다. 그러나 이 속도는 사실 Wi-Fi 연결을 통해 전송되며 Bluetooth는 연결 설정 및 관리에만 사용된다.이를 High Speed(HS)라고 부르는데 HS가 포함되어 있지 않은 일반 모듈은 Bluetooth 2.0과 같이 3 Mbps이고, 3.0에서 표준화된 새로운 기능들(NFC 통합 기능, Enhanced Power Control 등) 정도만 제공한다.

# Bluetooth 4

BLE가 개발되면서부터 Bluetooth는 Bluetooth BR/EDR(Classic)과 Bluetooth LE로 나뉘게 된다. BR/EDR과 LE는 서로 다른 프로토콜 스택을 가지고 있기 때문에 서로 직접적인 통신이 불가능하다.

<div class="post__stage-container">
    <div class="post__stage">
        <img class="modal" src="/_pages/projects/bluetooth/images/generation/1.png" alt="<b>[Fig. 1]</b> Bluetooth 프로토콜 스택 <a href='#Reference'>[1]</a>."/>
    </div>
    <div class="post__stage">
        <img class="modal" src="/_pages/projects/bluetooth/images/generation/2.png" alt="<b>[Fig. 2]</b> Bluetooth 듀얼모드 <a href='#Reference'>[2]</a>."/>
    </div>
</div>

이에 [Fig. 1]과 같이 BR/EDR과 LE 스택을 모두 가지는 듀얼모드(Dual Mode)가 등장하게 된다.

- **BR/EDR** 통신만 가능한 그룹을 Bluetooth Classic
- **BR/EDR**과 **LE** 모두 가능한 그룹을 Dual Mode 또는 Smart Ready
- **LE**만 가능한 그룹은 Single Mode 또는 Smart 라고 부른다.

<img class="modal" src="/_pages/projects/bluetooth/images/generation/3.png" alt="<b>[Fig. 3]</b> Bluetooth Classic과 LE의 비교 <a href='#Reference'>[3]</a>."/>

BLE는 Advertise mode와 Connection mode 이렇게 2가지 모드를 통해 통신이 이루어진다. Advertise mode에서는 브로드캐스트 방식으로 데이터를 전송하며, Connection mode에서는 브로드캐스트 방식으로 전송된 데이터를 수신하는 디바이스와 1:1로 연결하여 데이터를 주고 받는다.


---

# <a name="Reference"></a>Reference

1. <a href='https://makersweb.net/embedded/14289' target='_blank'>MakersWeb</a>
2. <a href='https://community.silabs.com/s/share/a5U1M000000knyFUAQ/a-short-history-of-the-bluetooth-ble-standard-ble-beacons-and-gatt?language=en_US' target='_blank'>Silicon Labs</a>
3. <a href='https://www.bluetooth.com/learn-about-bluetooth/tech-overview/' target='_blank'>Bluetooth SIG</a>
{:.post__reference}
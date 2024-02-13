---
layout: posts
title: "Bluetooth Multiple Connection"
permalink: /projects/bluetooth/multiple_connection/
---

블루투스 기기 여러 대를 동시에 연결할 수 있을까? 블루투스를 일상생활에서 항상 활용하는 나도 매번 헷갈려하는 문제다.

여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다.

기본적으로 여러 기기를 **동시**에 연결하기 위해서는 기기들이 보내는 패킷에 충돌이 일어나면 안된다. 따라서 블루투스는 기본적으로 **FDMA** 방식을 사용한다. 즉, 주파수 분할 다중 접속 방식이다. 1초당 1600개의 슬롯이 있고 각 슬롯은 625us이다. 이 슬롯들 중에서 기기들은 스캔을 하면서 자신의 주파수를 찾아서 통신을 하게 된다.
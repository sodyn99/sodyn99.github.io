---
layout: posts
title: "Bluetooth Multiple Connection"
permalink: /projects/bluetooth/multiple_connection/
---

Bluetooth 기기 여러 대를 동시에 연결할 수 있을까? Bluetooth를 일상생활에서 항상 활용하는 여러분들도 아마 매번 헷갈려하는 문제일 것이다. 여러 대를 동시에 연결한다는 것은 point-to-point, 즉 일대일 연결을 말하는 것이다. Broadcast 방식의 단방향 전송은 해당하지 않는다.

BLE 표준 문서는 기본적으로

기본적으로 여러 기기를 **동시**에 연결하기 위해서는 기기들이 보내는 패킷에 충돌이 일어나면 안된다. 이를 막기 위해 같은 피코넷을 공유하는 기기들간의 통신은 Time Division Multiplexing(TDM) 방식을 사용한다. TDM은 시간을 나눠서 여러 기기가 동시에 사용할 수 있도록 한다. 이 때, 각 기기는 자신에게 할당된 시간만큼만 사용한다.

# Coexistence And Collocation

우선 그러기 위해서는 Bluetooth의 다중 분할 방식에 대해 알아볼 필요가 있다. 상세한 내용은 Bluetooth Core Specification<sup><a href='#Reference'>[1]</a></sup>의 285 페이지(또는 섹션 7)을 참고하기 바란다.

Bluetooth는 알다시피 2.4 GHz의 ISM 대역을 사용하기 때문에 같은 대역을 사용하는 무선 장치들과의 간섭을 피하는 것이 중요하다. 이를 위해 크게 FDD 방식과 TDD 방식의 다중 분할 방식을 사용한다. Isolation이 충분할 경우 FDD 방식을 채택하고, isolation이 부족하거나 공유 안테나의 경우 TDD 방식을 사용한다.

| Feature                        | Version | Introduced Description                                          |
|--------------------------------|---------|-----------------------------------------------------------------|
| Adaptive Frequency Hopping    | 1.2     | Allows devices to reduce the number of channels used in a piconet in order to avoid interferers |
| HCI Set Host Channel Classification | 1.2     | Allows a Host to inform the local Bluetooth Controller of the channels that are occupied by a collocated technology |
| Enhanced SCO (eSCO)           | 1.2     | Added retransmissions to SCO for the purpose of combating interference |
| MWS Coexistence Signaling (CSA3) | 1.2     | Provides a standardized interface between collocated radios for communicating information necessary to enable some coexistence techniques |
| Piconet Clock Adjust          | 4.1     | Allows a Bluetooth device to align the piconet clock with an external technology, e.g. Long Term Evolution (LTE) |
| Train Nudging                 | 4.1     | Provides a mechanism to improve the success rate of page and inquiry when the slots to receive the respective responses are periodically not available |
| Generalized Interlaced Scanning | 4.1     | Provides a mechanism to improve the success rate of page scan and inquiry scan when some slots are periodically not available for scanning |
| Slot Availability Mask        | 5.0     | Provides a mechanism for two Bluetooth devices to indicate to each other the availability of their time slots |
{:.posts__caption alt="<b>[Table. 1]</b> Interference mitigation features <a href='#Reference'>[1]</a>."}

위 [Table. 1]은 Core Specification에 나와있는 기능을 그대로 가져와 본 것이다. 여기에 있는 기능들을 다 다루지는 않고 중요한 몇가지만 알아보겠다.

## Adaptive Frequency Hopping

Adaptive Frequency Hopping(AFH)는 Bluetooth 장치가 간섭을 일으키지 않게 하기 위한 가장 기본적인 기능이다.



---

# <a name="Reference"></a>Reference

1. Woolley, Martin (7 February 2023). "[Bluetooth® Core Specification Version 5.4](https://www.bluetooth.org/DocMan/handlers/DownloadDoc.ashx?doc_id=556599){:target="_blank"}" (PDF). bluetooth.com. Retrieved 19 February 2024.
{:.post__reference}

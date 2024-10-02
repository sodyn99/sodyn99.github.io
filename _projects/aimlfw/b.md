---
layout: posts
title: "Federated Learning framework 개발"
category: aimlfw
prev: aimlfw
---

# Helm Chart

우선 image `fl-extraction:latest`를 빌드해준다.

```bash
./build.sh
```

다음으로 namespace를 생성해준다.

```bash
kubectl create namespace federated-learning
```

Helm chart를 설치해준다.

```bash
helm install fl-extraction . -n federated-learning
```

Cassandra secret을 생성해준다.

```bash
kubectl create secret generic cassandra --from-literal=cassandra-password=OOcrm4pqFi -n federated-learning
```

Pod가 잘 생성되었는지 확인해준다.

```bash
$ kubectl get pods -n federated-learning

NAME                             READY   STATUS    RESTARTS   AGE
fl-extraction-868f46958d-9q2mt   1/1     Running   0          5m37s
```

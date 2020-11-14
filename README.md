# SPA Reloader Demo

This is a demo application that uses [SPA Reloader](https://github.com/ToucanSoftware/spa-reloader) and [SPA Reloader Vue Plugin](https://github.com/ToucanSoftware/spa-reloader-vue).

## Build demo docker images

```console
docker build -t docker.io/toucansoftware/spa-reloader-demo:0.0.1 .
```

## Deploy the demo application in your Kubernetes Cluster

We are deploying the application as Kubernetes [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) which exposes the container port `80` as `ClusterIP` [Service](https://kubernetes.io/docs/concepts/services-networking/service/). This port exposed to clients outside of the cluster through a [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/).

## Install Ingress

Please follows the install step of [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/deploy/#installation-guide) to install the correspoing Ingress Controller to your settings.

In this demo we are using Docker for Mac Kubernetes, so need to run the following command to get the Ingress Controller installed.

```console
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.1/deploy/static/provider/cloud/deploy.yaml
```

## Update demo image

```console
kubectl set image deployment/spa-demo spa-demo=docker.io/toucansoftware/spa-reloader-demo:0.0.2 -n spa-demo
```

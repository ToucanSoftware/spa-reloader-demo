# spa-demo

SPA Reloader Demo

## Build demo docker images

```console
docker build -t docker.io/toucansoftware/spa-reloader-demo:0.0.1 .
```

## Install Ingress

```console
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.1/deploy/static/provider/cloud/deploy.yaml
```

## Update demo image

```console
kubectl set image deployment/spa-demo spa-demo=docker.io/toucansoftware/spa-reloader-demo:0.0.2 -n spa-demo
```

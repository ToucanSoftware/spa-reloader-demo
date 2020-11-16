# SPA Reloader Demo

This is a demo application that uses [SPA Reloader](https://github.com/ToucanSoftware/spa-reloader) and [SPA Reloader Vue Plugin](https://github.com/ToucanSoftware/spa-reloader-vue).

## Use SPA Reloader Plugin in you Vue Application

```console
npm i spa-reloader-vue
```

```javascript
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import spaReloader from "spa-reloader-vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(spaReloader, {
  spaReloaderURL: "ws://" + location.hostname + "/ws",
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
```

```javascript
...
  mounted() {
    this.$spaSubscribe(this.callbackFunction);
  },
  methods: {
    callbackFunction: function(image) {
      this.showDialog = true;
      if (image !== undefined && image !== null) {
        this.dialogText = `Image changed from: ${image.previous_image.name}, to: ${image.current_image.name}`;
      } else {
        this.dialogText = "Image change detected.";
      }
    }
  }
...
```

## Build demo docker images

### Buil v1 image

```console
docker build -t docker.io/toucansoftware/spa-reloader-demo:v1 .
```

### Buil v2 image

```console
git checkout v2
docker build -t docker.io/toucansoftware/spa-reloader-demo:v2 .
```

## Deploy the demo application in your Kubernetes Cluster

We are deploying the application as Kubernetes [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) which exposes the container port `80` as `ClusterIP` [Service](https://kubernetes.io/docs/concepts/services-networking/service/). This port exposed to clients outside of the cluster through a [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/).

### Install Ingress

Please follows the install step of [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/deploy/#installation-guide) to install the correspoing Ingress Controller to your settings.

In this demo we are using Docker for Mac Kubernetes, so need to run the following command to get the Ingress Controller installed.

```console
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.1/deploy/static/provider/cloud/deploy.yaml
```

### Install SPA Reloader

```console
kubectl apply -f https://raw.githubusercontent.com/ToucanSoftware/spa-reloader-demo/main/deploy/01-spa-reloader.yaml
```

### Install Demo Application

```console
kubectl apply -f https://raw.githubusercontent.com/ToucanSoftware/spa-reloader-demo/main/deploy/02-demo.yaml
```

## Update demo image

```console
kubectl set image deployment/spa-demo spa-demo=docker.io/toucansoftware/spa-reloader-demo:0.0.2 -n spa-demo
```

## Clean up

```console
kubectl delete -f https://raw.githubusercontent.com/ToucanSoftware/spa-reloader-demo/main/deploy/02-demo.yaml
kubectl delete -f https://raw.githubusercontent.com/ToucanSoftware/spa-reloader-demo/main/deploy/01-spa-reloader.yaml
kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.1/deploy/static/provider/cloud/deploy.yaml
```

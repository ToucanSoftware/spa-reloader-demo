<template>
  <v-app>
    <v-main>
      <home-page />
      <custom-dialog v-bind:dialog="showDialog">
        <template v-slot:dialog-text>
          {{ dialogText }}
        </template>
      </custom-dialog>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HomePage from "./components/HomePage.vue";
import CustomDialog from "./components/CustomDialog.vue";

@Component({
  components: {
    HomePage,
    CustomDialog
  }
})
export default class App extends Vue {
  dialogText = "";
  showDialog = false;

  mounted() {
    this.$spaSubscribe(this.callbackFunction);
  }

  callbackFunction(image: any) {
    this.showDialog = true;
    if (image !== undefined && image !== null) {
      this.dialogText = `Image changed from: ${image.previous_image.name}, to: ${image.current_image.name}`;
    } else {
      this.dialogText = "Image change detected.";
    }
  }
}
</script>

<style></style>

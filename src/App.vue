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

<script>
import HomePage from "./components/HomePage";
import CustomDialog from "./components/CustomDialog";

export default {
  name: "App",
  data: function() {
    return {
      dialogText: "",
      showDialog: false
    };
  },

  components: {
    CustomDialog,
    HomePage
  },

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
};
</script>

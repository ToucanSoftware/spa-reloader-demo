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
    callbackFunction: function(current, old) {
      this.showDialog = true;
      if (
        old !== undefined &&
        old !== null &&
        current !== undefined &&
        current !== null
      ) {
        this.dialogText = `Image changed from: ${old.previous_image.name}, to: ${current.current_image.name}`;
      } else if (current !== undefined && current !== null) {
        this.dialogText = `Image changed to: ${current.current_image.name}`;
      } else {
        this.dialogText = "Image change detected.";
      }
    }
  }
};
</script>

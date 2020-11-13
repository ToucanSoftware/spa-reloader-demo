<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          Updated Image
        </v-card-title>
        <v-card-text>
          <slot name="dialog-text" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="onRefresh">
            Refresh
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "CustomDialog",
  props: { dialog: Boolean },
  methods: {
    onRefresh() {
      // close dialog
      this.dialog = false;
      // refresh browser
      window.location.reload(true);
    }
  }
};
</script>

<style scoped></style>

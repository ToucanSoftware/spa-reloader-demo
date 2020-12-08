<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col align="center">
        <v-img src="@/assets/logo.png" style="width: 550px" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class HomePage extends Vue {}
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>Hello World!</div>
    <notifications></notifications>
  </div>
</template>

<script>
import Vue from "vue";
import XNotification from "./plugins/x-notification/index";

Vue.use(XNotification);
export default {
  name: "App",
  mounted() {
    this.$pushNotify();
  }
};
</script>

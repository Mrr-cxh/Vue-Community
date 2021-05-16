<template>
  <div id="app">
    <Header />
    <!-- <Panel /> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Panel from "./layout/Panel";
export default {
  name: "app",
  components: {
    Header
    // Panel
  }
};
</script>

<style lang="less">
#app {
  opacity: 0.8;
}
</style>

<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: {Sidebar}
}
</script>

<style lang="scss">
html,body{
  font-family: Montserrat, sans-serif;
  padding: 0;
  margin: 0;
}
img{
  width: 30px;
}

</style>

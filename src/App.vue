<template>
  <div id="app">
  <!-- Header -->
      <Header />
  <!-- Loading or Modals -->
  <div v-if="getLoading.global" class="global--loading flex-column">
      <span></span>
  </div>
  <!-- Routes -->
    <main>
      <router-view/>
    </main> 
    <!-- Footer -->
    <Footer />
  </div>
</template>
<script>
  import Header from "@/components/Header/Header.vue";
  import { mapGetters } from "vuex";
  import Footer from "@/components/Footer/Footer.vue"
  export default {
      name: "App",
      components: {
        Header,
        Footer
      },
      computed: {
        ...mapGetters("loadingState", ["getLoading"]),
      },
  }
</script>

<style lang="scss">
</style>
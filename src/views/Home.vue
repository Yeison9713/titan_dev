<template>
  <div>
    <header_stacti />
    <body_static />
  </div>
</template>

<script>
import header_stacti from "../components/Header.vue";
import body_static from "../components/Body.vue";
export default {
  name: "app",
  components: {
    header_stacti,
    body_static
  }
};
</script>
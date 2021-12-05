<template>
  <div>{{ questions.quest }}</div>
  <input type="text" />
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {
    questions: Object,
  },
};
</script>

<style></style>

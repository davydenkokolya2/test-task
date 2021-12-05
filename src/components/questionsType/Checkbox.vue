<template>
  <div>{{ questions.quest }}</div>
  <div v-for="item in questions.answers" :key="item.answer">
    <input type="checkbox" name="checkboxquestion" />
    {{ item.answer }}
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  components: {},
  props: {
    questions: Object,
  },
};
</script>

<style></style>

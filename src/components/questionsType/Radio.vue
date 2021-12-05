<template>
  <div>{{ questions.quest }}</div>
  <div v-for="item in questions.answers" :key="item.answer">
    <input
      type="radio"
      name="radioquestion"
    />
    {{item.answer}}
  </div>
</template>

<script>
//import StartPage from './components/StartPage.vue'

export default {
  name: "Radio",
  components: {
    //StartPage,
  },
  props: {
    questions: Object,
  },
};
</script>

<style></style>

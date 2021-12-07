<template>
  <div>{{ questions.quest }}</div>
  <div v-for="item in questions.answers" :key="item.answer">
    <input type="radio" name="radioquestion"  @change="react(item.answer)" />
    {{ item.answer }}
  </div>
</template>

<script>
export default {
  name: "Radio",
  components: {},
  props: {
    questions: Object,
  },
  methods: {
      
    react(data) {
        this.id = data;
        console.log(this.id);
      this.$emit("react", {
          id: this.id
      });
    },
  },
  data() {
    return {
      id: "",
    };
  },
};
</script>

<style></style>

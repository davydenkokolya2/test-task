<template>
  <div>{{ questions.quest }}</div>
  <div v-for="item in questions.answers" :key="item.answer">
    <input type="checkbox" name="checkboxquestion" @change="react(item.answer)" />
    {{ item.answer }}
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  components: {},

  props: {
    questions: Object,
    answer: [],
  },
  methods: {
    react(data) {
        console.log(1)
      if (this.id.findIndex((i) => i === data) == -1) this.id.push(data);
      else this.id.splice(this.id.findIndex((i) => i === data), 1)

      console.log(this.id);
      this.$emit("react", {
        id: this.id,
      });
    },
  },
  data() {
    return {
      id: [],
    };
  },
};
</script>

<style></style>

<template>
  <div>{{ questions.quest }}</div>
  <el-input v-model="message" type="text" />
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {
    questions: Object,
  },
  watch: {
    message() {
      this.id = this.message

      console.log(this.id);
      this.$emit("react", {
        id: this.id,
      });
    },
  },
  data() {
    return {
      id: "",
      message: ""
    };
  },
};
</script>

<style></style>

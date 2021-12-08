<template>
  <div>{{ questions.quest }}</div>
  <el-checkbox-group v-model="checkList" v-for="item in questions.answers" :key="item.answer">
    <el-checkbox :label="item.answer"  @change="react(item.answer)" />
 
  </el-checkbox-group>
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
      checkList: [],
      id: [],
    };
  },
};
</script>

<style></style>

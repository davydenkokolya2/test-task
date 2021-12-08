<template>
  <div>{{ questions.quest }}</div>
  <el-radio-group v-model="radio" v-for="item in questions.answers" :key="item.answer">
    
    <el-radio :label="item.answer"  @change="react(item.answer)" />
  </el-radio-group>
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
      radio: false
    };
  },
};
</script>

<style></style>

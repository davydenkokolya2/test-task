<template>
  <div v-for="(item, index) in questions" :key="(item, index)">
    <div v-if="item.answerType == 'checkbox'">
      {{ item.quest }} <div v-for="item2 in ANSWER[index].id" :key="item2"> {{item2}} </div>
    </div>
    <div v-else>{{ item.quest }} {{ ANSWER[index].id }}</div>
  </div>
</template>

<script>
import settings from "../json/settings.json";
import { mapGetters } from "vuex";
export default {
  name: "ResultPage",
  components: {},
  props: ["answer"],
  computed: {
    ...mapGetters(["ANSWER"]),
  },

  mounted() {
    console.log(this.ANSWER);
  },

  watch: {
    changeInput() {
      if (this.changeInput == "") this.disabled = true;
      else this.disabled = false;
    },
  },
  data() {
    return {
      changeInput: "",
      disabled: true,
      questions: settings[0].questions,
    };
  },
};
</script>

<style></style>

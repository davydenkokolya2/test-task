<template>
  <div class="questionPage">
    <div>Тест проходит: {{NAME}}</div>
    <Checkbox
      v-if="questions[i].answerType == 'checkbox'"
      :questions="questions[i]"
      @react="changeAnswer"
    ></Checkbox>
    <Radio
      v-if="questions[i].answerType == 'radio'"
      :questions="questions[i]"
      :answer="answer[i]"
      @react="changeAnswer"
    ></Radio>
    <Text
      v-if="questions[i].answerType == 'text'"
      :questions="questions[i]"
      @react="changeAnswer"
    ></Text>

    <el-button type="success" v-if="i != questions.length - 1" @click="nextQuestion">
      {{ myJson.nameNextButton }}
    </el-button>
    <el-button type="success" v-if="i == questions.length - 1" @click="$router.push({ name: 'ResultPage', params:{id: answer} })">
      {{ myJson.nameFinishButton }}
    </el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import settings from "../json/settings.json";
import Checkbox from "./questionsType/Checkbox";
import Radio from "./questionsType/Radio";
import Text from "./questionsType/Text";

export default {
  name: "QuestionsPage",
  components: {
    Checkbox,
    Radio,
    Text,
  },
  data() {
    console.log(settings[0].questions[0].answerType);
    return {
      answer: [],
      myJson: settings[0],
      i: 0,
      questions: settings[0].questions,
    };
  },
  computed: {
    ...mapGetters(["NAME"]),
  },
  methods: {
    ...mapActions(["ADD_TO_ANSWER"]),
    nextQuestion() {
      this.i++;
    },
    changeAnswer(data) {
      this.answer[this.i] = data;
      this.ADD_TO_ANSWER(this.answer)
      console.log(this.answer);
    },
  },
  created: function () {},
};
</script>

<style>
.questionPage {
 text-align: center;
 margin: auto
}
.el-radio-group{
  display: block !important;
  
}
</style>

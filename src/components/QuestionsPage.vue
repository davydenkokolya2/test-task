<template>
  <div>
    <Checkbox v-if="questions[i].answerType == 'checkbox'"></Checkbox>
    <Radio v-if="questions[i].answerType == 'radio'" :questions='questions[i]'></Radio>
    <Text v-if="questions[i].answerType == 'text'"></Text>
    
    <button v-if="i != questions.length - 1" @click="nextQuestion">{{myJson.nameNextButton}}</button> 
    <button v-if="i == questions.length - 1" @click="1">{{myJson.nameFinishButton}}</button>
  </div>
</template>

<script>

import settings from "../json/settings.json"
import Checkbox from "./questionsType/Checkbox"
import Radio from "./questionsType/Radio"
import Text from "./questionsType/Text"

export default {
  name: 'QuestionsPage',
  components: {
    Checkbox,
    Radio,
    Text,
  },
  data() {
      console.log(settings[0].questions[0].answerType)
    return {
      myJson: settings[0],
      i: 0,
      questions: settings[0].questions,
    };
    
  },
  methods: {
      nextQuestion(){
          this.i++
      }
  },
  created: function () {
  }
}
</script>

<style>

</style>

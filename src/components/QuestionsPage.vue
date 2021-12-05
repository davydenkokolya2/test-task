<template>
  <div>
    <input v-bind:type="type" name="" id="">
    <button>{{this.myJson.nameStartButton}}</button>
  </div>
</template>

<script>

import settings from "../json/settings.json";
export default {
  name: 'QuestionsPage',
  components: {
    
  },
  data() {
      console.log(settings[0].questions[0].answerType)
    return {
      myJson: settings[0],
      type: settings[0].questions[0].answerType,
    };
    
  },
  created: function () {
  }
}
</script>

<style>

</style>

<template>
  
  <StartPage :myJson="myJson"/>
</template>

<script>
import StartPage from './components/StartPage.vue'
import settings from './json/settings.json'
export default {
  name: 'App',
  components: {
      StartPage,
  },
  data() {
    console.log(settings)
    return{
      myJson: settings[0]
    }
  }
}
</script>

<style>

</style>

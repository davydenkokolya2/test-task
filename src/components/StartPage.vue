<template>
  <div>
    <input type="text" name="" id="">
    <button>{{this.myJson.nameStartButton}}</button>
  </div>
</template>

<script>


export default {
  name: 'StartPage',
  components: {
    
  },
  props: {
    myJson: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created: function () {
  }
}
</script>

<style>

</style>

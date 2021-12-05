<template>
  <div>
    <input type="text" v-model="changeInput" name="" id="" />
    <button :disabled="disabled">{{ this.myJson.nameStartButton }}</button>
  </div>
</template>

<script>
import settings from "../json/settings.json";
export default {
  name: "StartPage",
  components: {},
  data() {
    return {
      changeInput: "",
      disabled: true,
      myJson: settings[0],
    }
  },
  watch: {
    changeInput() {
      if (this.changeInput == "") this.disabled = true;
      else this.disabled = false;
    },
  },
};
</script>

<style></style>

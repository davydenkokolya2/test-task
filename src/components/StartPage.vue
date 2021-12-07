<template>
  <div>
    <input type="text" v-model="changeInput" name="" id="" />
    <button :disabled="disabled" @click="clickStartButton">
      {{ this.myJson.nameStartButton }}
    </button>
  </div>
</template>

<script>
import settings from "../json/settings.json";
import { mapActions } from "vuex";
export default {
  name: "StartPage",
  components: {},
  data() {
    return {
      changeInput: "",
      disabled: true,
      myJson: settings[0],
    };
  },
  watch: {
    changeInput() {
      if (this.changeInput == "") this.disabled = true;
      else this.disabled = false;
    },
  },
  methods: {
    ...mapActions(["ADD_TO_NAME"]),
    clickStartButton() {
      this.ADD_TO_NAME(this.changeInput);
      this.$router.push("questionspage");
    },
  },
};
</script>

<style></style>

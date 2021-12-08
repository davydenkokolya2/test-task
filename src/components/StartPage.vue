<template >
  <div class="startPage">
    <el-input  type="text" v-model="changeInput" placeholder="Enter name" id="" />
    <el-button  type="success" :disabled="disabled" @click="clickStartButton">
      {{ this.myJson.nameStartButton }}
    </el-button>
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

<style>
.startPage {
  
  text-align: center;
  
}
.el-input {
 width: auto   !important
}
</style>

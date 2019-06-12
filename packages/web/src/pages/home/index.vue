<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <h1>时间：{{Time.currentTime}}</h1>
    <h1>{{User.type}}{{User.name}}</h1>
    <button @click="onUpdate">更改</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Observer } from "mobx-vue";
import User from "../../store/user";
import Time from "../../store/time";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
@Observer
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  User = User;
  Time = Time;
  mounted() {
    console.log("TCL: Home -> mounted", this);
  }
  onUpdate() {
    this.User.onUpdate(`测试${Math.random()}`);
  }
}
</script>

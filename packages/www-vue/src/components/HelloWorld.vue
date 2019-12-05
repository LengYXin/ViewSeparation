<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ Store.count }}</h1>
    <a-button type="link" @click="Store.onAdd()">Link</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { observable, action } from "mobx";
import { Observer } from "mobx-vue";
class Store {
  @observable
  count = 0;
  @action
  onAdd() {
    this.count++;
  }
}
@Observer
@Component
export default class HelloWorld extends Vue {
  Store = new Store();
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

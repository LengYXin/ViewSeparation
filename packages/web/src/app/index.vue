<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../style/themes/index.scss";
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $blue-6;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $purple-6;
    &.router-link-exact-active {
      color: $red-6;
    }
  }
}
</style>

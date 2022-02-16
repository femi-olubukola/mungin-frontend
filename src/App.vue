<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0.55rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

::-webkit-scrollbar-thumb {
  background: #333333;
  border-radius: 50vw;
  width: 0.65rem;
  height: 1rem;
  
}
</style>

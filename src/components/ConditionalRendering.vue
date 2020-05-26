<template>
  <div>
      <!-- v-if -->
      <h1 v-if="awesome">Vue is awesome</h1>
      <h1 v-else>Oh no! 😢</h1>
      <!-- Conditional Groups with v-if -->
      <template v-if="ok">
          <h1>Title</h1>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
      </template>
      <!--  -->
      <!--  -->
      <!--  -->
      <div v-if="Math.random() > 0.5">Now you see me</div>
      <div v-else>Now you don't</div>
      <!-- v-else-if -->
      <div v-if="type==='A'">A</div>
      <div v-if="type==='B'">B</div>
      <div v-if="type==='C'">C</div>
      <div v-else>Not A/B/C</div>
      <!-- Controlling Reusuable Elements with key -->
      <!-- use the key attribute if you do not want to retain data -->
      <template v-if="loginType==='username'">
          <label for="login">Username</label>
          <input type="text" id="login" placeholder="Enter you username" key="username-input">
      </template>
      <template v-else>
          <label for="login">Email</label>
          <input type="text" id="login" placeholder="Enter you email" key="email-input">
      </template>
      <button @click="loginType = loginType==='username'?'not':'username'">Toggle Login Type</button>
      <div v-show="ok">Hello</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            awesome: false,
            ok: true,
            type: "D",
            loginType:"username",
        }
    }
}
</script>

<style>

</style>
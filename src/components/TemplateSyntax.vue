<template>
  <div>
      <!-- One time interpolations -->
      <div v-once>msg: {{msg}}</div>
      <button @click="msg+='a'">Try to change msg</button>
      <!-- Raw HTML -->
      <p>Using mustache: {{rawHtml}}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
      <!-- Attributes -->
      <div :id="dynamicId">
          This div has an attribute named `id`
      </div>
      <button :disabled="isButtonDisabled">Button</button>
      <!-- Directives -->
      <p>Now you <span v-if="seen">see</span> me</p>
  </div>
</template>

<script>
export default {
    name: "TemplateSyntax",
    data: function(){
        return {
            msg: "Hello World!",
            rawHtml:`
                <span style="color: red">
                    This should be red.
                </span>
            `,
            dynamicId: Math.floor(Math.random() * 10),
            isButtonDisabled: true,
            seen: false,
        }
    }
}
</script>

<style>

</style>
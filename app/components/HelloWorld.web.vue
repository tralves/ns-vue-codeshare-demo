<template>
  <div class="page">
    <h1>{{count}}</h1>
    <label class="body">
      This is a hello world component, tap the button if you dare!!!
    </label>

    <button class="btn btn-primary" @click="surprise = !surprise">
      {{title}}
    </button>
    <img v-if="surprise" src="@/assets/images/NativeScript-Vue.png" style="display:block;" />
    <!--  -->

  </div>
</template>

<script>
import HelloWorldBase from './HelloWorldBase'

export default {
  mixins: [HelloWorldBase],
}
</script>

<style lang="scss" scoped>
.hello-world {
  margin: 20;
}
</style>

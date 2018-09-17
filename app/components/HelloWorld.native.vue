<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Hello world">
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class='h1' :text="count"/>
      <Label class="body" textWrap=true text="This is a hello world component, tap the button if you dare"/>

      <Button class="btn btn-primary" @tap="surprise = !surprise" :text="title"/>
      <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>

    </StackLayout>

  </Page>
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

label {
  //color: red;
}
</style>

<template web>
  <span>A {{val}} component.</span>
</template>
<template native>
  <label>A {{val}} component.</label>
</template>

<script>
export default {
  data: () => {
    return {
      val: 'Vue.js'
    }
  }
}
</script>

<!--
<style type="text/css" scoped>
	label {
		color: red;
	}
</style>
-->

<style lang="scss" scoped>
	$red: red;

	label {
		color: $red;
	}
</style>

<style lang="scss">
	label {
		color: green;
	}
</style>
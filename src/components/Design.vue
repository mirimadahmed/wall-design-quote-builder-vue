<template>
  <div>
      <p>Step: {{ step }}</p>
  </div>
</template>

<script>
export default {
    props: {
        step: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>
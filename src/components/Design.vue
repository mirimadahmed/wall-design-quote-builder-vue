<template>
  <div>
      <p>Step: {{ step + 1 }}</p>
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
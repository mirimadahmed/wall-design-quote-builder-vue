<template>
  <div class="text-left">
    <p class="border-bottom">Selected Layers</p>
    <ul>
      <li class="border-bottom">1. Wall Base <span><i class="bi bi-check"></i>Wood</span></li>
      <li class="border-bottom">2. Wall Base Wood</li>
      <li class="border-bottom">3. Wall Base Wood</li>
      <li class="border-bottom">4. Wall Base Wood</li>
      <li class="border-bottom">5. Wall Base Wood</li>
      <li class="border-bottom">6. Wall Base Wood</li>
      <li class="border-bottom">7. Wall Base Wood</li>
      <li class="border-bottom">8. Wall Base Wood</li>
      <li class="border-bottom">9. Wall Base Wood</li>
      <li class="border-bottom">10. Wall Base Wood</li>
    </ul>
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
};
</script>

<style>
</style>
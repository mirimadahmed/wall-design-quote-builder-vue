<template>
  <div class="row m-0 text-left">
    <div class="col-12 p-0">
      <h1>Let's design your ideal wall</h1>
    </div>
    <div class="col-12 p-0">
      <p>
        Choose desired material for your wall, go through all steps and create a
        custom wall system layer by layer.
      </p>
    </div>
    <div class="col-12 row my-4 p-0 mx-0 selection text-center">
      <div class="col-4 p-0 bg-selected py-1"><i class="fa fa-check-circle-o mr-3" aria-hidden="true"></i>Stucco</div>
      <div class="col-4 p-0 bg-unselected py-1 border">EIFS</div>
      <div class="col-4 p-0 bg-unselected py-1 border">Concrete</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.selection {
    font-size: 1.2rem;
}
.bg-selected {
  background: #01679a;
  color: white;
}
.bg-unselected {
  background: lightgray;
  color: grey;
}
</style>
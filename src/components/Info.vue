<template>
  <div class="row m-0 text-left">
    <div class="col-12 p-0">
      <h1 class="int-title">Let's design your ideal wall</h1>
    </div>
    <div class="col-12 p-0">
      <p>
        Choose desired material for your wall, go through all steps and create a
        custom wall system layer by layer.
      </p>
    </div>
    <div class="col-12 row my-4 p-0 mx-0 selection text-center">
      <div class="col-4 p-0 bg-selected py-2 select-type"><i class="fa fa-check-circle-o mr-1 bg-selected" aria-hidden="true"></i>Stucco</div>
      <div class="col-4 p-0 bg-unselected py-2 select-type">EIFS</div>
      <div class="col-4 p-0 bg-unselected py-2 select-type">Concrete</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.int-title{
    font-size: 2.5rem;
    text-transform: capitalize;
}
.select-type {
  border: 1px solid white;
}
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
@media screen and (max-width: 575px) {
  .int-title{
    font-size: 1.4rem;
  }
  h1 {
    font-size: 1.4rem;
    text-align: center;
  }
  p {
    font-size: 0.8rem;
    text-align: center;
  }
  div {
    font-size: 0.8rem;
  }
}
</style>


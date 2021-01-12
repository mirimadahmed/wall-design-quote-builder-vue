<template>
  <div class="text-left">
    <p class="title">Selected Layers</p>
    <ul>
      <li><span class="number">1.</span>Wall Base <span class="selection selection-selected"><i class="fas fa-check"></i>Wood</span></li>
      <li><span class="number">1.</span>Wall Base <span class="selection selection-selected"><i class="bi bi-check"></i>Wood</span></li>
      <li><span class="number">1.</span>Wall Base <span class="selection selection-unselected"><i class="bi bi-check"></i>Wood</span></li>
      <li><span class="number">1.</span>Wall Base <span class="selection selection-unselected"><i class="bi bi-check"></i>Wood</span></li>
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

<style scoped>
.title {
  text-transform: initial;
  color: blue;
  font-weight: bolder;
  font-style: italic;
  border-bottom: 2px solid blue;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  border-bottom: 1px solid blue;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 400;
}
.number {
  background: blue;
  color: white;
  margin-right: 20px;
  padding: 5px;
}
.selection {
  text-transform: initial;
  font-weight: 300;
}
.selection-selected {
  color: blue;
}

.selection-unselected {
  color: grey;
}
</style>
<template>
  <div id="app" class="row text-center m-auto p-0">
    <div class="col-5 p-5">
      <design class="my-4" :steps="steps" :step="step" />
      <selection class="my-2" :step="step" :steps="steps" />
    </div>
    <div class="col-7">
      <info class="my-2 px-3" />
      <steps class="my-2 px-3" v-model="step" :steps="steps" />
      <items
        class="my-2"
        :step="step"
        :steps="steps"
        @select-item="selectItem"
      />
    </div>
  </div>
</template>

<script>
import Design from "./components/Design.vue";
import Selection from "./components/Selection.vue";
import Info from "./components/Info.vue";
import Steps from "./components/Steps.vue";
import Items from "./components/Items.vue";
export default {
  name: "App",
  components: {
    Steps,
    Info,
    Items,
    Selection,
    Design,
  },
  data() {
    return {
      step: 0,
      steps: [
        {
          helper: "something for help",
          title: "Wall Base",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 1.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 1.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 1.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 1.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 1.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Substrate",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 2.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 2.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 2.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 2.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 2.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Water Resistive Barrier",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 3.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 3.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 3.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 3.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 3.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Drainage",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 4.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 4.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 4.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 4.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 4.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Continous Insulation",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 5.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 5.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 5.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 5.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 5.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Code Compilant Lath",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 6.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 6.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 6.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 6.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 6.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Stucco",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 7.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 7.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 7.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 7.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 7.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Fracturestop",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 8.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 8.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 8.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 8.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 8.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Primer",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 9.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 9.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 9.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 9.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 9.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
        {
          helper: "",
          title: "Finish Coat",
          link: "",
          selection: null,
          items: [
            {
              text: "ABC Product 10.1",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 10.2",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 10.3",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 10.4",
              image: "https://via.placeholder.com/150",
            },
            {
              text: "ABC Product 10.5",
              image: "https://via.placeholder.com/150",
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectItem(item) {
      this.steps[this.step].selection = item;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

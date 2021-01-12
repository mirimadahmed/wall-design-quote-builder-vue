<template>
  <div id="app" class="row text-center m-auto p-0">
    <div class="col-5 p-5">
      <design class="my-2 border" :step="step" />
      <selection class="my-2" :step="step" :steps="steps" />
    </div>
    <div class="col-7 border">
      <info class="my-2 border" />
      <steps class="my-2" v-model="step" :steps="steps" />
      <items class="my-2 border" :step="step" :steps="steps" />
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
          items: [
            {
              text: "ABC Product 1.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 1.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 1.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 1.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 1.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 1.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Substrate",
          link: "",
          items: [
            {
              text: "ABC Product 2.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 2.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 2.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 2.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 2.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 2.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Water Resistive Barrier",
          link: "",
          items: [
            {
              text: "ABC Product 3.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 3.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 3.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 3.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 3.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 3.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Drainage",
          link: "",
          items: [
            {
              text: "ABC Product 4.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 4.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 4.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 4.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 4.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 4.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Continous Insulation",
          link: "",
          items: [
            {
              text: "ABC Product 5.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 5.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 5.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 5.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 5.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 5.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Code Compilant Lath",
          link: "",
          items: [
            {
              text: "ABC Product 6.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 6.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 6.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 6.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 6.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 6.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Stucco",
          link: "",
          items: [
            {
              text: "ABC Product 7.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 7.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 7.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 7.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 7.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 7.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Fracturestop",
          link: "",
          items: [
            {
              text: "ABC Product 8.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 8.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 8.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 8.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 8.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 8.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Primer",
          link: "",
          items: [
            {
              text: "ABC Product 9.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 9.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 9.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 9.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 9.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 9.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "Finish Coat",
          link: "",
          items: [
            {
              text: "ABC Product 10.1",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 10.2",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 10.3",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 10.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 10.4",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product 10.5",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
      ]
    }
  }
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

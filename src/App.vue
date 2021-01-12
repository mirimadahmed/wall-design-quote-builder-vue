<template>
  <div id="app" class="row px-5 mx-2">
    <div class="col-3 border mx-2">
      <design class="my-2 border" :step="step" />
      <selection class="my-2" :step="step" />
    </div>
    <div class="col-7 border mx-2">
      <info class="my-2 border" />
      <steps class="my-2" v-bind:value="step" :steps="steps" />
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
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
        {
          helper: "",
          title: "",
          link: "",
          items: [
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
              image: "https://via.placeholder.com/150"
            },
            {
              text: "ABC Product",
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
  margin-top: 60px;
}
</style>

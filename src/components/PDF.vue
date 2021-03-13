<template>
  <div class="w-100">
    <div class="row m-0 p-4">
      <div class="col-5 align-self-center m-0 p-0">
        <img src="https://facadesxi.com/wp-content/uploads/2020/10/logo.png" class="w-100" />
      </div>
      <div class="col-4">&nbsp;</div>
      <div class="col-3 text-left">
        <div class="row font-weight-bold">Address</div>
        <div class="row">15262 Capital Port, San Antonio, TX, 78249</div>
        <div class="row font-weight-bold">Phone</div>
        <div class="row">1-800-611-6602</div>
        <div class="row font-weight-bold">E-mail Address</div>
        <div class="row">info@facadesxi.com</div>
      </div>
    </div>
    <div class="row m-0 p-0 mt-4">
      <div class="col-12 m-0 px-0 text-light header">
        <img
          src="https://facadesxi.com/wp-content/uploads/2021/01/interactive-banner.jpg?id=915"
          class="w-100"
          alt
        />
      </div>
    </div>
    <div class="row m-0 my-4 p-4">
      <div class="col-6 wrapper p-0 m-0">
        <div class="col w-100 h-100">
          <div v-for="step in steps" :key="step.title">
            <div v-if="step.selection">
              <img :src="step.selection.image" class="selection-image">
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 wrapper wrapper-2 p-0 m-0">
        <div class="row p-2 align-items-center" v-for="(step, index) in steps" :key="step.title">
          <div class="col-3 text-left">
            <p class="heading">Layer</p>
            <p class="text">{{ index + 1}}.</p>
          </div>
          <div class="col-7 text-left">
            <p class="heading">{{ step.title }}</p>
            <p class="text" v-if="step.selection">{{ step.selection.text}}</p>
          </div>
          <div class="col-2 text-right" v-if="step.selection">
            <img :src="step.selection.image" class="w-100" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="row footer p-4 m-0">
      <div class="col-4 align-self-center">
        <img src="https://facadesxi.com/wp-content/uploads/2020/10/footer-logo.png" alt />
      </div>
      <div class="col-8 text-left font-weight-bold">
        <p class="mb-3">Disclaimer</p>
        <p class="mb-3">
          This interactive System is a guide to help designers and owners
          choose the components and assembly for their project. The designer
          should ensure that the chosen components and assembly meet the
          building code requirements for the project type, such as drainage,
          fire resistance rating and non-combustible construction testing and
          compliance.
        </p>
        <p>
          The materials must be installed per the IBC, IRC and FacadesXi
          installation instructions and specifications. Materials listed that
          are not manufactured or distributed by FACADESXi are included for
          the clarity of the assembly, are not necessarily installed by the
          plastering contractor and must be installed per the
          manufacturer/industry and building code standards.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
}
.wrapper-2 {
  border-left: none !important;
}
.header {
  font-size: 2rem;
  font-weight: 800;
}
.header::after {
  content: "INTERACTIVE WALL SYSTEMS";
  margin: auto;
  position: absolute;
  top: 25%;
  left: 25%;
}
.footer {
  background: black;
  color: white;
}
p {
  margin-bottom: 0;
}
.heading {
  font-size: 0.5rem;
  font-weight: bold;
}
.text {
  font-size: 1rem;
  font-weight: bold;
}
.selection-image {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>
<template>
  <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" :src="bg" alt="Image" />
          <div
            class="carousel-caption d-flex align-items-center justify-content-center text-start"
          >
            <div class="row">
              <div class="col-md-6">
                <img
                  :src="sketch1"
                  alt=""
                  class="img slide-img"
                />
              </div>
              <div class="col-md-6">
                <h1
                  class="display-2 text-white text-uppercase mb-4 animated slideInDown"
                >
                  Timely <br /><span class="text-primary"
                    >Architectural</span
                  ><br />Visualization
                </h1>
                <a href="#/registration" class="btn fancy-btn">Get Started</a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" :src="bg" alt="Image" />
          <div
            class="carousel-caption d-flex align-items-center justify-content-center text-start"
          >
            <div class="row">
              <div class="col-md-6">
                <img
                  :src="sketch3"
                  alt=""
                  class="img slide-img"
                />
              </div>
              <div class="col-md-6">
                <h1
                  class="display-2 text-white text-uppercase mb-4 animated slideInDown"
                >
                  Hire Our<br /><span class="text-primary"
                    >Professionals</span
                  ><br />Today
                </h1>
                <a href="#/registration" class="btn fancy-btn">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import sketch1 from '../assets/images/sketch1.png'
import sketch3 from '../assets/images/sketch3.png'
import bg from '../assets/images/dark-background-carbon-fiber-black-vector.jpg'
import WOW from "wowjs";

onMounted(() => {
  new WOW.WOW().init();
});
</script>

<style scoped>
.slide-img {
    max-width: 380px;
    width: 100%;
}
</style>

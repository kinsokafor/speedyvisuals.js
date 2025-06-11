<template>
  <div class="row">
    <div class="col-md-4">
      <div class="icon-card">
        <img :src="icon" alt="" />
        <h3>Post a project</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam animi
          veritatis reiciendis dignissimos dolorem. Molestiae accusamus ipsam
          quisquam, saepe iste inventore tenetur error aperiam fugit perferendis
          quam ipsum officia! Illo.
        </p>
        <div class="d-flex justify-content-end">
          <router-link to="projects/new" class=""
            >Get started <i class="fa fa-arrow-right ms-3"></i
          ></router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="icon-card">
        <img :src="icon" alt="" />
        <h3>Post a project</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam animi
          veritatis reiciendis dignissimos dolorem. Molestiae accusamus ipsam
          quisquam, saepe iste inventore tenetur error aperiam fugit perferendis
          quam ipsum officia! Illo.
        </p>
        <div class="d-flex justify-content-end">
          <a href="#" class=""
            >Get started <i class="fa fa-arrow-right ms-3"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="icon-card">
        <img :src="icon" alt="" />
        <h3>Become a seller</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam animi
          veritatis reiciendis dignissimos dolorem. Molestiae accusamus ipsam
          quisquam, saepe iste inventore tenetur error aperiam fugit perferendis
          quam ipsum officia! Illo.
        </p>
        <div class="d-flex justify-content-end">
          <a href="#" class=""
            >Get started <i class="fa fa-arrow-right ms-3"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon from "../../assets/icons/noun-creative-mind-1327142.png";
</script>

<style lang="scss" scoped></style>

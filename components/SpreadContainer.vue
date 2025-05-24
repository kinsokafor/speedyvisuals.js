<template>
  <div class="speedy-layout-container">
    <!-- Left Section -->
    <div class="left-section">
      <div class="inner-container">
        <div class="logo-container">
          <img :src="Logo" alt="" />
        </div>
        <div class="caption-text">Speedy Visuals 2025</div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <div class="inner-right">
        <div class="form-group">
          <label for="hj">Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div class="form-group">
          <label for="hj">Description</label>
          <textarea name="" id="" class="form-control"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "../assets/images/logo.png";
</script>

<style scoped></style>

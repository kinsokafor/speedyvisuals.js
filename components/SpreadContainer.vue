<template>
  <div class="speedy-layout-container">
    <!-- Left Section -->
    <div class="left-section">
      <div class="inner-container">
        <div class="logo-container animate__animated animate__bounceInDown">
          <img :src="Logo" alt=""/>
        </div>
        <div class="caption-text">{{config.get('site_name')}} 2025</div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <div class="inner-right">
        <!-- <h1 class="page-label">What do you want to do today?</h1> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "../assets/images/logo.png";
import {useConfigStore} from '@/store/config'

const config = useConfigStore()
</script>

<style scoped></style>

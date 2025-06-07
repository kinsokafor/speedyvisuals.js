<template>
  <spread-container>
    <h1 class="page-label">Registration</h1>
    <create-form :fields="fields"></create-form>
    <hr class="mt-4" />
    <div class="d-flex justify-content-between">
      <a href="#">Sign up with google</a>
      <a href="#">Sign up with facebook</a>
    </div>
    <p class="mt-2">
      Aready registered? <router-link to="/login">Sign in</router-link>
    </p>
  </spread-container>
</template>

<script setup>
import SpreadContainer from "@module/speedyvisuals/components/SpreadContainer.vue";
import CreateForm from "@/components/form/CreateForm.vue";
import { computed } from "vue";
import * as yup from "yup";

const fields = computed(() => [
  {
    label: "Full Name",
    name: "fullname",
    rules: yup.string().required(),
  },
  {
    label: "Email Address",
    name: "email",
    rules: yup.string().email().required(),
  },
]);
</script>

<style lang="scss" scoped></style>

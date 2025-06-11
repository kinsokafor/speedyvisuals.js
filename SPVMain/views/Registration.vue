<template>
  <spread-container>
    <h1 class="page-label">Registration</h1>
    <create-form
      :fields="fields"
      @submit="handleSubmit"
      @values="(v) => (values = v)"
      :processing="processing"
      :columns="{ topAfter: 2 }"
    ></create-form>
    <hr class="mt-4" />
    <div class="d-flex justify-content-between">
      <a href="#">Sign up with google</a>
      <a href="#">Sign up with facebook</a>
    </div>
    <p class="mt-2">
      Aready registered?
      <router-link to="/login">Sign in</router-link>
    </p>
  </spread-container>
</template>

<script setup>
import SpreadContainer from "@module/speedyvisuals/components/SpreadContainer.vue";
import CreateForm from "@/components/form/CreateForm.vue";
import { computed, ref } from "vue";
import { useGeoLocation } from "@/composables/evouse";
import * as yup from "yup";
import { Request } from "@/helpers";
import { useAlertStore } from "@/store/alert";

const surname = ref("");
const middle_name = ref("");
const other_names = ref("");
const values = ref({});
const processing = ref(false);
const { json, loading, error } = useGeoLocation();
const req = new Request();
const alertStore = useAlertStore();

const fields = computed(() => [
  {
    label: "Full Name",
    name: "fullname",
    rules: splitName,
  },
  {
    label: "Email Address",
    name: "email",
    rules: yup.string().email().required("Email address is required"),
  },
  {
    label: "Password",
    name: "password",
    as: "password",
    rules: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
    position: "topAfter",
  },
  {
    label: "Confirm Password",
    name: "cpassword",
    as: "password",
    rules: yup
    .string()
    .required("Please confirm your password")
    .test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        return value === values.value?.password;
      }
    ),
    position: "topAfter",
    column: "right",
  },
]);

const splitName = (value) => {
  if (value == undefined) return "Please enter your name";
  var inArr = value.trim().split(" ");
  if (inArr.length < 2) return "Please enter a second name";
  surname.value = inArr[0];
  middle_name.value = inArr[1];
  other_names.value = "";
  for (let i = 2; i < inArr.length; i++) {
    other_names.value += inArr[i] + " ";
  }
  if (other_names.value.trim() == "") {
    other_names.value = middle_name.value;
    middle_name.value = "";
  }
  return true;
};

const handleSubmit = (values) => {
  processing.value = true;
  if (loading.value) {
    alertStore.add("Please wait, getting location data...", "danger");
    setTimeout(() => {
      handleSubmit(values);
    }, 2000);
    return;
  }
  values.surname = surname.value;
  values.middle_name = middle_name.value;
  values.other_names = other_names.value;
  values.location_data = json.value;
  delete values.cpassword
  delete values.fullname
  req
    .post(req.root + "/speedyvisuals/api/user", values)
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      alertStore.add(err?.data ?? "Ooops!... Something went wrong.", "danger");
    })
    .finally(() => {
      processing.value = false;
    });
};
</script>

<style lang="scss" scoped></style>

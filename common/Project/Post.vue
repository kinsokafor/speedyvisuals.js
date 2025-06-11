<template>
  <spread-container>
    <h1 class="page-label">What project do you want to build?</h1>
    <CreateForm
      :fields="fields"
      :initial-values="values"
      @submit="handleSubmit"
      :processing="processing"
      :enable-submit-trigger="false"
    >
      <template #submitButton>
        <div class="d-flex">
          <!-- <button
            @click.prevent="page--"
            class="btn btn-back"
            v-show="page > 1"
          >
            Back
          </button> -->
          <button type="submit" class="btn" v-show="page === 3">Submit</button>
          <button type="submit" class="btn btn-next" v-show="page < 3">
            Next
          </button>
        </div>
      </template>
    </CreateForm>
  </spread-container>
</template>

<script setup>
import SpreadContainer from "@module/speedyvisuals/components/SpreadContainer.vue";
import { computed, ref } from "vue";
import CreateForm from "@/components/form/CreateForm.vue";
import * as yup from "yup";
import { EvoUId } from "@/helpers";
import { useAlertStore } from "@/store/alert";
import { useMyProjectsStore } from "@module/speedyvisuals/store/projects";
import { useRouter } from "vue-router";

const processing = ref(false);
const alertStore = useAlertStore();
const myProjectsStore = useMyProjectsStore();
const values = ref({});
const page = ref(1);
const router = useRouter();
const uid = new EvoUId("p")

const projectTypes = ref([
  "architectural drawings",
  "3D models",
  "graphics",
  "logos",
  "animations",
  "blueprints",
  "floor plans",
  "motion graphics",
  "flyers",
  "posters",
  "illustrations",
  "branding concepts",
  "presentations",
  "product mockups",
  "designs",
]);

const fields = computed(() => [
  {
    label: "Description",
    name: "description",
    placeholder: "Describe your project",
    as: "textarea",
    rows: 5,
    rules: yup
      .string()
      .required("Please describe your project")
      .min(20, "Your description is too short"),
    condition: page.value === 1,
  },{
    label: "Color preference (if any)",
    placeholder: "Please specify your preferred colors",
    name: "colors"
  },
  {
    label: "Project type",
    name: "type",
    as: "radio",
    class: "flex-radio",
    rules: yup.string().required("Please specify project type"),
    options: projectTypes.value,
    condition: page.value === 2,
  },
  {
    label: "Supporting files/documents",
    name: "files",
    as: "filepond",
    acceptedFileTypes: ["image/*"],
    rules: yup.string().required(),
    allowMultiple: false,
    condition: page.value === 3
  },
]);

const handleSubmit = async (data, actions) => {
  values.value = { ...values.value, ...data };
  if (page.value === 3) {
    processing.value = true;
    await myProjectsStore
      .new(data)
      .then((r) => {
        processing.value = false;
        actions.resetForm();
        page.value = 1;
        alertStore.add("Done", "success");
        router.push(`/projects/assign/${uid.encode(r.id)}`)
      })
      .catch((e) => {
        processing.value = false;
        alertStore.add(e.response.data, "danger");
      });
  } else {
    page.value++;
  }
};
</script>

<style lang="scss" scoped></style>

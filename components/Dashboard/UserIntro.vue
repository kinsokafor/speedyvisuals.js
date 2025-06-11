<template>
  <div class="d-flex user-intro">
    <div class="img-responsive flex-1">
      <img :src="img" class="img" />
    </div>
    <div class="flex-3">
      <p class="mb-0">Welcome, {{ fullname }}</p>
      <h1>Let us create some amazing <span class="text-primary">{{rotatingText}}</span> for you today</h1>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
import { computed, watch, ref, onMounted, onBeforeUnmount } from "vue";
import { getFullname, getProfilePicture } from "@/helpers";

const authStore = useAuthStore();

const currentUser = computed(() => authStore.getUser);
const fullname = computed(() => getFullname(currentUser.value));
const rotatingText = ref("designs");
const rotatingTextPool = ref([
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
const interval = ref(null)
const index = ref(0)

const img = ref("#");

watch(currentUser, () => {
  getProfilePicture(currentUser.value).then((r) => {
    img.value = r;
  });
});

onMounted(() => {
    interval.value = setInterval(() => {
        rotatingText.value = rotatingTextPool.value[index.value]
        if(index.value < (rotatingTextPool.value.length - 1)) {
            index.value++
        } else index.value = 0;
    }, 4000);
})

onBeforeUnmount(() => {
    clearInterval(interval.value)
})
</script>

<style lang="scss" scoped>
.img-responsive img {
    width: 130px;
}
.d-flex {
    gap: 20px;
}
</style>

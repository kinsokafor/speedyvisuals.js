<template>
    <spread-container>
        <h1 class="page-label">Login</h1>
        <CreateForm
            :fields="fields"
            :initial-values="{}"
            @submit="handleSubmit"
            :processing="processing"
        >
            <template #submitButton>
            <Button
                type="submit"
                class="btn"
                >Submit</Button>
            </template>
        </CreateForm>
        <hr class="mt-4">
        <div class="d-flex justify-content-between">
            <a href="#">Sign in with google</a>
            <a href="#">Sign in with facebook</a>
        </div>
        <p class="mt-2">Don't have an account? <router-link to="/registration">Sign up</router-link></p>
    </spread-container>
</template>

<script setup>
    import SpreadContainer from '@module/speedyvisuals/components/SpreadContainer.vue'
    import { computed } from "vue";
    import CreateForm from "@/components/form/CreateForm.vue";
    import {useLogin} from '@/composables/login'
    import Button from "@/components/Button.vue";

const login = useLogin();
const processing = computed(() => login.processing.value)

const fields = computed(() => login.fields.value);

const handleSubmit = async (values) => {
  login.handleSubmit(values)
};
</script>

<style lang="scss" scoped>

</style>
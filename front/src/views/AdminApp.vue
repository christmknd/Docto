<template>
  <div class="adminApp">
    <NavAdmin/>
    <router-view/>
  </div>
</template>

<script>
import NavAdmin from '../components/layout/NavAdmin.vue';

export default {
    name: "AdminApp",
    components: { NavAdmin }
}
</script>

<style>

</style>
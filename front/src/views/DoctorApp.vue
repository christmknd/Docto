<template>
    <div id="doctorApp">
      <NavDoctor/>
    <router-view/>
  </div>
</template>

<script>
import NavDoctor from '../components/layout/NavDoctor.vue';
export default {
    name: 'DoctorApp',
    components: {NavDoctor}

}
</script>

<style>

</style>
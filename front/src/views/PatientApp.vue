<template>
  <div class="patientApp">
    <NavPatient/>
    <router-view/>
  </div>
</template>

<script>
import NavPatient from '../components/layout/NavPatient.vue';
export default {
    name: 'PatientApp',
    components: {NavPatient}

}
</script>

<style>

</style>
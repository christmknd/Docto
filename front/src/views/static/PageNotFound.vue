<template>
  <NavBar/>
  <h1>Erreur</h1>
  <p>La page que vous cherchez n'existe pas</p>
</template>

<script>
import NavBar from '../../components/layout/NavBar.vue';
export default {
    name: 'PageNotFound',
    components: {NavBar}
}
</script>

<style>

</style>
<template>
      <nav>
        <ul>
            <li><router-link to="/patient">Dashboard</router-link> </li>
            <li><router-link to="/patient/profile">Consultation</router-link></li> 
            <li><router-link to="/patient/consultation">Consultation</router-link></li> 
        </ul>  
    </nav>
</template>

<script>

export default {
    name: 'NavPatient'
}
</script>

<style>

</style>
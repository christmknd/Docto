<template>
   <nav>
        <ul>
            <li><router-link to="/doctor">Dashboard</router-link> </li>
            <li><router-link to="/doctor/profile">Consultation</router-link></li> 
            <li><router-link to="/doctor/consultation">Consultation</router-link></li> 
        </ul>  
    </nav>
</template>

<script>

export default {
    name: 'NavDoctor'
}
</script>

<style>

</style>
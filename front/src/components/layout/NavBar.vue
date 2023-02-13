<template>
  <nav>
    <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/login">Login</router-link></li> 
        <li><router-link to="/signup">Signup</router-link> </li> 
        <li><router-link to="/cgv" >CGV</router-link>  </li> 
    </ul>  
    </nav>
</template>

<script>
export default {
    name: 'NavBar'

}
</script>

<style>
nav {
  overflow: hidden;
  background-color: green;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

nav li a {
  text-decoration: none;
  float: left;
  padding: 5px;
  color: black;
}

nav li a:hover {
  color: grey;
}

</style>
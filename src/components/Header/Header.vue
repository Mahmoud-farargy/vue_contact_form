<template>
    <header id="header">
        
        <b-navbar toggleable="lg" class="nav--container" type="dark">
            <b-container>
            <!-- Logo -->
            <b-navbar-brand href="#">Meant4</b-navbar-brand>
            <!-- Menu button -->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <!-- Nav -->
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item href="#">About Us</b-nav-item>
                    <b-nav-item href="#">Services</b-nav-item>
                    <b-nav-item href="#">Portfolio</b-nav-item>
                    <b-nav-item href="#">Testimonial</b-nav-item>
                    <b-nav-item href="#">Team</b-nav-item>
                    <b-nav-item href="#">Contact Us</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </b-container>
        </b-navbar>        
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    #header{
        .nav--container{
            background-color: var(--primary-clr);
        }
    }
</style>
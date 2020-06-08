<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Public Menu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                     <router-link to="/post" class="nav-link">post</router-link>
                </li>
                <li class="nav-item" v-if="isLoggedin == null">
                     <router-link to="/login" class="nav-link">Loginn</router-link>
                </li>
                <li class="nav-item" v-if="isLoggedin == null">
                   <router-link to="/register" class="nav-link">Register</router-link>
                </li>
                <li class="nav-item dropdown" v-if="isLoggedin != null">
                    <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >{{currentUser.name}}</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a href="#!" @click.prevent="logout" class="dropdown-item">Logout</a>
                    
                    </div>
                </li>
                </ul>
              
            </div>
            </nav>
</template>

<script>
export default {
    name: 'app-header',
    data(){
        return {
            isLoggedin:null
        }
    },
    methods:{
        logout(){
            this.$store.commit('logout');
            this.$router.push('/login');
        }
    },
    mounted() {
        this.isLoggedin = this.$store.getters.currentUser
    },
    computed:{
        currentUser(){
            return this.$store.getters.currentUser
        }
    }
}
</script>
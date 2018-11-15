<template>
  <div id="app">
    <!-- <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link> | -->
    <!-- <router-link to="/connexion">Connexion</router-link> -->
    <!-- </div> -->
    <b-navbar toggleable="md" type="dark" variant="dark">
  
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  
      <b-navbar-brand to="/">GTA Ynov Vue</b-navbar-brand>
  
      <b-collapse is-nav id="nav_collapse">
  
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
  
          <b-nav-form>
            <!-- <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
            <b-form inline>
              <label class="sr-only" for="inlineFormInputEmail">Email</label>
              <b-input size="sm" class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputEmail" placeholder="Adresse mail" />
              <label class="sr-only" for="inlineFormInputGroupPassword">Password</label>
              <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input size="sm" id="inlineFormInputGroupPassword" placeholder="Mot de passe" />
              </b-input-group>
              <b-form-checkbox size="sm" class="mb-2 mr-sm-2 mb-sm-0" style="color: white;">Remember me</b-form-checkbox>
              <b-button size="sm" variant="primary">Connexion</b-button>
            </b-form>
          </b-nav-form>
  
          <b-nav-item-dropdown text="Langue" right>
            <b-dropdown-item href="#">FR</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-nav-item-dropdown>
  
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Utilisateur</em>
            </template>
            <b-dropdown-item to="/profil">Profil</b-dropdown-item>
            <b-dropdown-item to="/connexion">Connexion</b-dropdown-item>
            <b-dropdown-item href="#">Déconnexion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

<!-- navbar-1.vue -->
    <router-view/>
  </div>
</template>



<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

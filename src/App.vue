<template>
   <v-app id="inspire">
    <v-system-bar app dark color="primary" class="gradient">
      AAA
      Aaaaaaaaaaaaa Bbbbbbbbbbb
      <v-spacer></v-spacer>

      someone is here
    </v-system-bar>

    <v-app-bar app flat prominent shrink-on-scroll class="gradient" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <template v-for="n in 3">
            <v-col
              :key="n"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="4"
              md="4"
            >
              <v-sheet class="pa-2" height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
</template>

<style lang="scss">
#app {
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

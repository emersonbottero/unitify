<template>
   <v-app id="inspire">
    <v-system-bar app dark color="primary" class="gradient">
      AAA
      Aaaaaaaaaaaaa Bbbbbbbbbbb
      <v-spacer></v-spacer>

      someone is here
    </v-system-bar>

    <v-app-bar app tile flat shrink-on-scroll class="gradient" dark style="min-height:90px;">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>
        Application
        <h5>
          Subtitle Application Name
        </h5>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div style="display: flex;height: 100%;">
        <a class="link" href="main"> Button 1</a>
        <a class="link" href="main"> Button 1</a>
        <a class="link" href="main"> Button 1</a>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2 " >
      <v-container class="main">
        <v-row class="topics">
          <v-col cols="3">
            <p>Someting Important here... 1</p>
          </v-col>
          <v-col cols="3">
            <p>Someting Important here... 1</p>
          </v-col>
          <v-col cols="3">
            <p>Someting Important here... 1</p>
          </v-col>
              <v-col cols="3">
            <p>Someting Important here... 1</p>
          </v-col>
        </v-row>
      </v-container>
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

.main {
  max-width: 100% !important;
}

.topics {
  background: white;
}

.link{
  align-self: flex-end;
  color: white !important;
  text-decoration: none;
  padding: 0 6px;
}

.v-toolbar__content{
  min-height: 90px;
  padding: 16px;
  padding-bottom: 16px !important;
}

.toolbar-subtitle{
      line-height: 48px;
      padding-left: 12px;
      transform: translateX(-30%);
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

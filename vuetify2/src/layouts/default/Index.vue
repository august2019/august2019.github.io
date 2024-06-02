<template>
  <!-- 레이아웃 -->
  <v-app>
    <default-bar @drawer="drawer =!drawer" />
    <default-drawer v-model="drawer" />
    <default-view />

  </v-app>
  <!-- //레이아웃 -->
</template>
<script>
import DefaultBar from './AppBar';
import DefaultDrawer from './Drawer';
import DefaultView from './View';

export default {
  name: 'DefalutLayout',

  components: {
    DefaultBar,
    DefaultDrawer,
    DefaultView
  },

  data: () => ({
    //S: 추가
    drawer: false,
  }),

}
</script>

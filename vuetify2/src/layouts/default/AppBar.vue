<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <!-- 앱버튼추가 -->
    <!--
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    drawer라는 변수가 없기때문에 에밋으로 넣어준다
    -->
    <v-app-bar-nav-icon @click="$emit('drawer')"></v-app-bar-nav-icon>
    <!-- //앱버튼추가 -->

    <v-spacer></v-spacer>

  </v-app-bar>
</template>
<script>
export default {
  name: 'DefaultBar'
}
</script>

<template>
  <!-- 네비게이션 추가 -->
  <!--
  <v-navigation-drawer
      v-model="drawer"
      브이모델이라는 함수가 없기떄문에
      v-bind="$attrs" 모든속성을 바인딩하는
  -->
  <v-navigation-drawer
      v-bind="$attrs"
      dark
      app
      :src="require('@/assets/sidebar.jpg')">
      <!-- S: 이미지위에 어두운 그라데이션 깔기 -->
      <template #img="props">
        <v-img
          :gradient="gradient"
          v-bind="props"
        />
      </template>
      <!-- E: 이미지위에 어두운 그라데이션 깔기 -->

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            ADMIN
          </v-list-item-title>
          <v-list-item-subtitle>
            VUE2(vuetify: 2.6.0)<br>
            2024.06.01
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- //네비게이션 추가 -->
</template>
<script>
export default {
  name: 'DefultDrawer',
  data: () => ({
    //S: 추가
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      { title: 'DashBoard', icon: 'mdi-view-dashboard', to: '/' },

      { title: 'Tables', icon: 'mdi-table-account', to: '/Tables' },
      { title: 'Forms', icon: 'mdi-form-textbox', to: '/Forms' },
      { title: 'Buttons', icon: 'mdi-button-cursor', to: '/Buttons' },
      { title: 'Icons', icon: 'mdi-emoticon-cool-outline', to: '/Icons' },

      { title: 'sign in', icon: 'mdi-login', to: '/authentication/sign-in' },
      { title: 'sign up', icon: 'mdi-login-variant', to: '/authentication/sign-up' },
      { title: 'product list', icon: 'mdi-image-album', to: '/page/product-list' },

      { title: 'GridSystem', icon: 'mdi-view-grid-plus', to: '/GridSystem' },
      { title: 'GridListPage', icon: 'mdi-view-grid-outline', to: '/GridListPage' },
      { title: 'Breakpoints', icon: 'mdi-responsive', to: '/Breakpoints' },
      { title: 'Typography', icon: 'mdi-format-font', to: '/Typography' },

    ],
    right: null,
    //E: 추가
  }),
}
</script>

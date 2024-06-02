<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          width="460"
          cols="12"
          sm="6"
        >
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 font-weight-black mb-10">
               회원가입
            </div>
            <v-text-field
              class="rounded-t-xl"
              v-model="first"
              label="아이디"
              outlined
              prepend-inner-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              v-model="first"
              label="비밀번호"
              outlined
              prepend-inner-icon="mdi-lock-outline"
            ></v-text-field>
            <v-text-field
              class="rounded-b-xl"
              v-model="first"
              label="비밀번호 확인"
              outlined
              prepend-inner-icon="mdi-lock-outline"
            ></v-text-field>
            <v-btn
              block
              x-large
              rounded
              color="primary"
            >
              회원가입
            </v-btn>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {

}
</script>

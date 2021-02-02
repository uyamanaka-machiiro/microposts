<script src="./index.ts"></script>

<template>
  <div class="container">
    <div id="form-wrap">
      <b-card header="Sign in" border-variant="dark">
        <SignInForm @submit="onSubmit" />

        <b-card-text>
          <small>
            アカウントを持っていない場合は
            <a href="/signup"> 新規作成 </a> から。
          </small>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

div#form-wrap {
  position: absolute;
  height: 380px;
  width: 360px;
  height: auth;
  left: 50%;
  top: 50%;
  margin-left: -180px;
  margin-top: -200px;
}
</style>

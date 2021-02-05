<script lang="ts" src="./index.ts"></script>

<template>
  <div class="container">
    <MicropostForm @submit="onSubmit" />
    <div>
      <MicropostList :microposts="microposts" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>

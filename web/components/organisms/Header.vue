<script lang="ts" src="./Header.ts"></script>

<template>
  <div>
    <template v-if="authorized">
      <AuthorizedHeaderNav />
    </template>
    <template v-else>
      <HeaderNav />
    </template>
  </div>
</template>

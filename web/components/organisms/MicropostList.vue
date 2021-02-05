<script lang="ts" src="./MicropostList.ts"></script>

<template>
  <b-list-group>
    <b-list-group-item
      v-for="item in microposts"
      :key="item.id"
      class="flex-column align-items-start"
    >
      <MicropostBlock :text="item.content" :created-at="item.createdAt" />
    </b-list-group-item>
  </b-list-group>
</template>

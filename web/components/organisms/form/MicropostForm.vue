<script lang="ts" src="./MicropostForm.ts"></script>

<template>
  <div>
    <b-form @submit="onSubmit">
      <InputTextarea
        id="micropost-textarea"
        v-model="content"
        name="content"
        size="md"
        required
      />
      <SubmitButton>Post!</SubmitButton>
    </b-form>
  </div>
</template>

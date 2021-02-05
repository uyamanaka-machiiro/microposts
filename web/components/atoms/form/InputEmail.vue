<script lang="ts" src="./InputEmail.ts"></script>

<template>
  <b-form-input
    :id="id"
    :autofocus="autofocus"
    :disabled="disabled"
    :form="form"
    :name="name"
    :required="required"
    :placeholder="placeholder"
    :readonly="readonly"
    :size="size"
    type="email"
    :state="state"
    :value="value"
    @input="update"
  />
</template>

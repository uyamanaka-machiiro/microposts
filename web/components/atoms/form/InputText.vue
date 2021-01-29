<script src="./InputText.ts"></script>

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
    type="text"
    :state="state"
    :value="value"
    @input="update"
  />
</template>

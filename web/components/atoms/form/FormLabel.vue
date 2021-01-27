<script src="./FormLabel.ts"></script>

<template>
  <b-form-group
    :id="id"
    :label="label"
    :label-for="labelFor"
    :label-size="labelSize"
    :label-class="labelClass"
    :description="description"
  >
    <slot />
    <template v-if="shouldDisplayFeedback">
      <b-form-invalid-feedback :state="state">
        {{ invalidFeedback }}
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">
        {{ validFeedback }}
      </b-form-valid-feedback>
    </template>
  </b-form-group>
</template>

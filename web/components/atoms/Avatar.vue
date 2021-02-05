<template>
  <b-avatar :valiant="valiant" :text="text" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String })
  readonly valiant?: string | null

  @Prop({ type: String })
  readonly text?: string | null
}
</script>

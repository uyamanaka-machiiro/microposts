<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String })
  readonly placeholder?: string | null

  @Prop({ type: String })
  readonly 'readonly'?: string | null

  @Prop({ type: String, default: 'md' })
  readonly size!: String
}
</script>

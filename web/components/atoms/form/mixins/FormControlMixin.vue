<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly autofocus!: boolean

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean

  @Prop({ type: String })
  readonly form?: string | null

  @Prop({ type: String })
  readonly id?: string | null

  @Prop({ type: String })
  readonly name?: String | null

  @Prop({ type: Boolean, default: false })
  readonly required!: boolean

  @Prop({ type: Boolean, default: null })
  readonly state?: boolean | null
}
</script>

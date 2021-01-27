import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String })
  readonly variant?: string | null

  @Prop({ type: Boolean })
  readonly block?: boolean | null
}

import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: Number, default: 245 })
  readonly width!: number

  @Prop({ type: Number, default: 180 })
  readonly height!: number

  @Prop({ type: String, default: '0 0 452 342' })
  readonly viewBox!: string

  @Prop({ type: Boolean, default: false })
  readonly fadein!: boolean
}

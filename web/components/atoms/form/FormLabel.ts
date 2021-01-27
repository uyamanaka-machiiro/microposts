import { isEmpty } from 'lodash'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { isDefined } from '~/utils'

@Component
export default class extends Vue {
  @Prop({ type: String })
  readonly id?: string | null

  @Prop({ type: String })
  readonly label?: string | null

  @Prop({ type: String })
  readonly labelClass?: string | null

  @Prop({ type: String })
  readonly labelFor?: string | null

  @Prop({ type: String })
  readonly labelSize?: string | null

  @Prop({ type: String })
  readonly description?: string | null

  @Prop({ type: String })
  readonly invalidFeedback?: string | null

  @Prop({ type: String })
  readonly validFeedback?: string | null

  @Prop({ type: Boolean, default: null })
  readonly state?: boolean | null

  get shouldDisplayFeedback() {
    return isDefined(this.state)
      ? !isEmpty(this.validFeedback)
      : !isEmpty(this.invalidFeedback)
  }
}

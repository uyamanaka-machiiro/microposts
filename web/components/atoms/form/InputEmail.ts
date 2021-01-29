import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FormTextMixin from './mixins/FormTextMixin.vue'
import FormControlMixin from './mixins/FormControlMixin.vue'

@Component({
  mixins: [FormTextMixin, FormControlMixin],
})
export default class extends Vue {
  @Prop({ type: String, default: '' })
  readonly value!: string

  update(newValue: string) {
    this.$emit('input', newValue)
  }
}

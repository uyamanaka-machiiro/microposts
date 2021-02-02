import { Component, Prop, Vue } from 'nuxt-property-decorator'
import MicropostText from './MicropostText.vue'

@Component({
  components: {
    MicropostText,
  },
})
export default class extends Vue {
  @Prop({ type: String, required: true })
  readonly text!: string

  @Prop({ type: String, required: true })
  readonly createdAt!: string

  get formattedCreatedAt() {
    return this.$moment(this.createdAt).fromNow()
  }
}

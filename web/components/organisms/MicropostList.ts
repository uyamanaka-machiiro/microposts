import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import MicropostBlock from '~/components/molecule/Microposts/MicropostBlock.vue'
import { Micropost } from '~/model'

@Component({
  components: {
    MicropostBlock,
  },
})
export default class extends Vue {
  @Prop({ type: Number, default: 1 })
  readonly page!: number

  @Prop({ type: Array, required: true })
  readonly microposts!: Micropost[]

  @Watch('page', { immediate: true })
  onChangePage() {
    this.$accessor.micropost.list(this.page)
  }
}

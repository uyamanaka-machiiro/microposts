import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import MicropostBlock from './MicropostBlock.vue'
import { Micropost } from '~/model'

@Component({
  components: {
    MicropostBlock,
  },
})
export default class extends Vue {
  @Prop({ type: Number, default: 1 })
  readonly page!: number

  get microposts(): Micropost[] {
    return this.$accessor.micropost.microposts
  }

  @Watch('page', { immediate: true })
  onChangePage() {
    this.$accessor.micropost.list(this.page)
  }
}

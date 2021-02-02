import { isEmpty } from 'lodash'
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import InputTextarea from '~/components/atoms/form/InputTextarea.vue'
import SubmitButton from '~/components/atoms/SubmitButton.vue'
import { Micropost } from '~/model'

@Component({
  components: {
    InputTextarea,
    SubmitButton,
  },
})
export default class extends Vue {
  content: string = ''

  page: number = 1

  get submitClickable() {
    return !isEmpty(this.content)
  }

  get microposts(): Micropost[] {
    return this.$accessor.micropost.microposts
  }

  reset() {
    this.content = ''
  }

  onSubmit(event: Event) {
    event.preventDefault()
    this.$emit('submit', { content: this.content })
    this.reset()
  }

  @Watch('page', { immediate: true })
  onChangePage() {
    this.$accessor.micropost.list(this.page)
  }
}

import { isEmpty } from 'lodash'
import { Component, Vue } from 'nuxt-property-decorator'
import InputTextarea from '~/components/atoms/form/InputTextarea.vue'
import SubmitButton from '~/components/atoms/SubmitButton.vue'

@Component({
  components: {
    InputTextarea,
    SubmitButton,
  },
})
export default class extends Vue {
  content: string = ''

  get submitClickable() {
    return !isEmpty(this.content)
  }

  reset() {
    this.content = ''
  }

  async onSubmit(event: Event) {
    event.preventDefault()
    const { post, reload } = this.$accessor.micropost

    await post({ content: this.content })
    this.reset()
    await reload()
  }
}

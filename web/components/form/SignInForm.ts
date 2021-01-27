import { Component, Vue } from 'nuxt-property-decorator'
import { isEmpty } from 'lodash'
import InputEmail from '~/components/atoms/form/InputEmail.vue'
import FormLabel from '~/components/atoms/form/FormLabel.vue'
import InputPassword from '~/components/atoms/form/InputPassword.vue'
import SubmitButton from '~/components/atoms/SubmitButton.vue'

@Component({
  components: {
    SubmitButton,
    InputEmail,
    FormLabel,
    InputPassword,
  },
})
export default class extends Vue {
  email: string = ''

  password: string = ''

  submitClickable() {
    return !isEmpty(this.email) && !isEmpty(this.password)
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    this.$accessor.auth.signIn({ email: this.email, password: this.password })
  }
}

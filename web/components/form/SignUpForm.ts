import { Component, Vue } from 'nuxt-property-decorator'
import { isEmpty } from 'lodash'
import InputEmail from '~/components/atoms/form/InputEmail.vue'
import FormLabel from '~/components/atoms/form/FormLabel.vue'
import InputPassword from '~/components/atoms/form/InputPassword.vue'
import InputText from '~/components/atoms/form/InputText.vue'
import SubmitButton from '~/components/atoms/SubmitButton.vue'

@Component({
  components: {
    InputText,
    InputEmail,
    FormLabel,
    InputPassword,
    SubmitButton,
  },
})
export default class extends Vue {
  name: string = ''

  email: string = ''

  password: string = ''

  passwordConfirmation: string = ''

  submitClickable() {
    return !isEmpty(this.email) && !isEmpty(this.password)
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    this.$accessor.auth.signUp({
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    })
  }

  onReset(event: Event): void {
    event.preventDefault()
  }
}

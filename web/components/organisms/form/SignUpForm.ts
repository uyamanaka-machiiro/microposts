import { Component, Vue } from 'nuxt-property-decorator'
import { isEmpty } from 'lodash'
import InputEmail from '~/components/atoms/form/InputEmail.vue'
import InputPassword from '~/components/atoms/form/InputPassword.vue'
import InputText from '~/components/atoms/form/InputText.vue'
import SubmitButton from '~/components/atoms/SubmitButton.vue'
import FormLabel from '~/components/molecule/form/FormLabel.vue'

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
    this.$emit('submit', {
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

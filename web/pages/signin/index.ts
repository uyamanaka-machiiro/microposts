import { Component, Vue } from 'nuxt-property-decorator'
import SignInForm from '~/components/organisms/form/SignInForm.vue'
import { unauthenticatedOnly } from '~/middleware'
import { LoginPayload } from '~/model'

@Component({
  components: {
    SignInForm,
  },
  middleware: unauthenticatedOnly,
})
export default class extends Vue {
  onSubmit(payload: LoginPayload) {
    this.$accessor.auth.signIn(payload)
  }
}

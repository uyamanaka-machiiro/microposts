import { Component, Vue } from 'nuxt-property-decorator'
import { unauthenticatedOnly } from '~/middleware'
import SignUpForm from '~/components/organisms/form/SignUpForm.vue'
import { SignUpUser } from '~/model'

@Component({
  components: {
    SignUpForm,
  },
  middleware: unauthenticatedOnly,
})
export default class extends Vue {
  onSubmit(payload: SignUpUser) {
    this.$accessor.auth.signUp(payload)
  }
}

import { Component, Vue } from 'nuxt-property-decorator'
import SignInForm from '~/components/form/SignInForm.vue'
import { unauthenticatedOnly } from '~/middleware'

@Component({
  components: {
    SignInForm,
  },
  middleware: unauthenticatedOnly,
})
export default class extends Vue {}

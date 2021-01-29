import { Component, Vue } from 'nuxt-property-decorator'
import { unauthenticatedOnly } from '~/middleware'
import SignUpForm from '~/components/form/SignUpForm.vue'

@Component({
  components: {
    SignUpForm,
  },
  middleware: unauthenticatedOnly,
})
export default class extends Vue {}

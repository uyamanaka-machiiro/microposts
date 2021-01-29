import { Component, Vue } from 'nuxt-property-decorator'
import { authenticatedOnly } from '~/middleware'

@Component({
  middleware: authenticatedOnly,
})
export default class extends Vue {}

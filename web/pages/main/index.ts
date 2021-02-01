import { Component, Vue } from 'nuxt-property-decorator'
import { authenticatedOnly } from '~/middleware'
import MicropostForm from '~/components/form/MicropostForm.vue'
import MicropostList from '~/components/layouts/Microposts/MicropostList.vue'

@Component({
  middleware: authenticatedOnly,
  components: {
    MicropostForm,
    MicropostList,
  },
})
export default class extends Vue {}

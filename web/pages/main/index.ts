import { Component, Vue } from 'nuxt-property-decorator'
import { authenticatedOnly } from '~/middleware'
import MicropostForm from '~/components/organisms/form/MicropostForm.vue'
import MicropostList from '~/components/organisms/MicropostList.vue'
import { Micropost, MicropostDraft } from '~/model/micropost'

@Component({
  middleware: authenticatedOnly,
  components: {
    MicropostForm,
    MicropostList,
  },
})
export default class extends Vue {
  get microposts(): Micropost[] {
    return this.$accessor.micropost.microposts
  }

  onSubmit(content: MicropostDraft) {
    this.$accessor.micropost.post(content)
  }
}

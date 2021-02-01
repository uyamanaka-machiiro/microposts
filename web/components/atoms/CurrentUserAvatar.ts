import { Component, Vue } from 'nuxt-property-decorator'
import Avatar from './Avatar.vue'

@Component({
  components: {
    Avatar,
  },
})
export default class extends Vue {
  get text() {
    return this.$accessor.auth.currentUser?.name?.substr(0, 2)
  }
}

import { Component, Vue } from 'nuxt-property-decorator'
import CurrentUserAvatar from '~/components/atoms/CurrentUserAvatar.vue'

@Component({
  components: {
    CurrentUserAvatar,
  },
})
export default class extends Vue {}

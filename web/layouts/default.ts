import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/organisms/Header.vue'

@Component({
  components: {
    Header,
  },
})
export default class extends Vue {}

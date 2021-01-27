import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/layouts/Header.vue'

@Component({
  components: {
    Header,
  },
})
export default class extends Vue {}

import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/atoms/Logo.vue'

@Component({
  components: {
    Logo,
  },
})
export default class extends Vue {
  @Prop({ type: String, default: '/' })
  readonly href!: string
}

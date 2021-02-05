import { StoryFn } from '@storybook/addons/dist/types'
import NavBrand from '~/components/molecule/Header/NavBrand.vue'

export default {
  title: 'molecule/Header/NavBrand',
  component: NavBrand,
}

export const Default: StoryFn = () => ({
  components: { NavBrand },
  template: '<NavBrand />',
})

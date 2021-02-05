import { StoryFn } from '@storybook/addons/dist/types'
import { action } from '@storybook/addon-actions'
import markdown from './SignInForm.md'
import SignInForm from '~/components/organisms/form/SignInForm.vue'

export default {
  title: 'organisms/form/SignInForm',
  component: SignInForm,
  parameters: {
    notes: markdown,
    jest: ['SignInForm.test.ts'],
  },
}

export const Form: StoryFn = () => ({
  components: { SignInForm },
  template: '<SignInForm @submit="action"/>',
  methods: {
    action: action('submit'),
  },
})

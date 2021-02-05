import { StoryFn } from '@storybook/addons/dist/types'
import SubmitButton from '~/components/atoms/SubmitButton.vue'
import { asSandboxStory, ControlType } from '~/tests/utils/stories'

export default {
  title: 'atoms/SubmitButton',
  component: SubmitButton,
  argTypes: {
    variant: ControlType.text(),
    block: ControlType.text(),
  },
}

export const Sandbox = asSandboxStory(
  { SubmitButton },
  '<SubmitButton>POST!</SubmitButton>'
)

export const Default: StoryFn = () => ({
  components: { SubmitButton },
  template: '<SubmitButton >POST!</SubmitButton>',
})

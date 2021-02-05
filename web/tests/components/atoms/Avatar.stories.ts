import { StoryFn } from '@storybook/addons/dist/types'
import Avatar from '~/components/atoms/Avatar.vue'
import { asSandboxStory, ControlType } from '~/tests/utils/stories'

export default {
  title: 'atoms/Avatar',
  component: Avatar,
  argTypes: {
    valiant: ControlType.text(),
    text: ControlType.text(),
  },
}

export const Sandbox = asSandboxStory({ Avatar }, '<Avatar />')

export const Primary: StoryFn = () => ({
  components: { Avatar },
  template: '<Avatar valiant="primary" />',
})

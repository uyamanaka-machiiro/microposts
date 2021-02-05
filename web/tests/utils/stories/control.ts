import { VueConstructor } from 'vue'
import {
  ArgsStoryFn,
  StoryFn,
  StoryContext,
} from '@storybook/addons/dist/types'

export namespace ControlType {
  export function text() {
    return 'text'
  }
  export function color() {
    return 'color'
  }

  export function select(options: string[]) {
    return {
      type: 'select',
      options,
    }
  }

  export function array() {
    return {
      type: 'array',
    }
  }

  export function number() {
    return 'number'
  }
}

export function asSandboxStory(
  components: { [key: string]: VueConstructor<any> },
  template: string
): StoryFn {
  return ((_, { argTypes }: StoryContext) => ({
    components,
    template,
    props: Object.keys(argTypes),
  })) as ArgsStoryFn
}

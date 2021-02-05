import Vue from 'vue'
import { Wrapper } from '@vue/test-utils'

export async function inputFormDatas<W extends Wrapper<Vue | null>>(
  component: W,
  values: { [key: string]: string }
): Promise<void> {
  for (const [key, value] of Object.entries(values)) {
    await component.find(`[name=${key}]`).setValue(value)
  }
}

export async function submit<W extends Wrapper<Vue | null>>(
  component: W
): Promise<void> {
  await component.find('[type="submit"]').trigger('click')
}

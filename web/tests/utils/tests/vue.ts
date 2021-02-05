import Vue from 'vue'
import {
  createLocalVue as _createLocalVue,
  ThisTypedMountOptions,
  VueClass,
  Wrapper,
  mount as _mount,
  shallowMount as _shallowMount,
  ThisTypedShallowMountOptions,
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

export { Wrapper } from '@vue/test-utils'

export function mount<V extends Vue>(
  doc: Document,
  component: VueClass<V>,
  options?: ThisTypedMountOptions<V>
): Wrapper<V> {
  const div = doc.createElement('div')
  div.id = 'root'
  doc.body.appendChild(div)

  return _mount(component, {
    localVue: createLocalVue(),
    attachTo: '#root',
    ...options,
  })
}

export function shallowMount<V extends Vue>(
  doc: Document,
  component: VueClass<V>,
  options?: ThisTypedShallowMountOptions<V>
): Wrapper<V> {
  const div = doc.createElement('div')
  div.id = 'root'
  doc.body.appendChild(div)

  return _shallowMount(component, {
    localVue: createLocalVue(),
    attachTo: '#root',
    ...options,
  })
}

export function createLocalVue() {
  const localVue = _createLocalVue()
  localVue.use(BootstrapVue)
  return localVue
}

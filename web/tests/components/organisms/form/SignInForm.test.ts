import SignInForm from '~/components/organisms/form/SignInForm.vue'
import {
  inputFormDatas,
  submit,
  createLocalVue,
  mount,
  Wrapper,
} from '~/tests/utils/tests'

let component: Wrapper<SignInForm>
beforeEach(() => {
  component = mount(document, SignInForm, { localVue: createLocalVue() })
})

describe('components/organisms/SignInForm', () => {
  it("正常入力後、Submitボタンを押下すると、'submit'が$emitされること.", async () => {
    const email = 'test@example.com'
    const password = '12345678'

    await inputFormDatas(component, { email, password })
    await submit(component)
    expect(component.emitted('submit')?.length).toBe(1)
  })

  xit("不正なメールアドレス入力状態で、Submitボタンを押下しても、'submit'が$emitされないこと", async () => {
    const email = 'test'
    const password = '12345678'

    await inputFormDatas(component, { email, password })
    await submit(component)
    expect(component.emitted('submit')?.length).toBeUndefined() // FIXME 何故かうまくいかない.
  })
})

afterEach(() => {
  component.destroy()
})

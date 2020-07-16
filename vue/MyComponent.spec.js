import { mount, shallowMount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

describe('MyComponent', function () {

  it('should work with deep mount', function () {
    const wrapper = mount(MyComponent)
    console.log(wrapper.element.outerHTML)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should work with shallow mount', function () {
    const wrapper = shallowMount(MyComponent)
    console.log(wrapper.element.outerHTML)
    expect(wrapper.element).toMatchSnapshot()
  })

})

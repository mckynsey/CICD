import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('Shouyld display props message', () => {
    const msg = 'mon message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = mount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });

//   it('renders the correct markup', () => {
//     const msg = 'Hello Vue!';
//     const wrapper = mount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.html()).toContain('<h1>Hello Vue!</h1>');
//   });

//   it('has the correct class', () => {
//     const msg = 'Hello Vue!';
//     const wrapper = mount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.classes()).toContain('hello');
//   });
// });

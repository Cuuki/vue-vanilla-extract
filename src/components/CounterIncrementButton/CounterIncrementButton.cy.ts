import CounterIncrementButton from './CounterIncrementButton.vue';

describe('<CounterIncrementButton />', () => {
  it('renders', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Mount function is not compatible with vue-tsc
    cy.mount(CounterIncrementButton, {
      props: {
        modelValue: 0,
      },
      slots: {
        default: 'Count is',
      },
    }).then(({ wrapper }) => {
      wrapper.setProps({
        'onUpdate:modelValue': (e: number) =>
          wrapper.setProps({ modelValue: e }),
      });
    });

    cy.findByRole('button', { name: /count is \d+/i })
      .should('exist')
      .as('button');

    cy.get('@button').should('have.text', 'Count is 0').click();
    cy.get('@button').should('have.text', 'Count is 1').click();
    cy.get('@button').should('have.text', 'Count is 2');
  });
});

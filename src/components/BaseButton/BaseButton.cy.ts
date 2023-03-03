import BaseButton from './BaseButton.vue';

describe('<BaseButton />', () => {
  it('renders', () => {
    const onClickSpy = cy.spy().as('onClickSpy');

    cy.mount(BaseButton, {
      props: {
        onClick: onClickSpy,
      },
      slots: {
        default: 'Test',
      },
    });

    cy.findByRole('button', { name: /test/i }).should('exist').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });
});

import { screen, render } from '@testing-library/vue';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  describe('rendering', () => {
    it('renders component with message prop', () => {
      render(HelloWorld, { props: { msg: 'new message' } });

      expect(screen.getByText(/new message/)).toBeInTheDocument();
    });
  });
});

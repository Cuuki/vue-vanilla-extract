import './commands';

import { mount } from 'cypress/vue';
import '../../src/styles/global.css';

Cypress.Commands.add('mount', mount);

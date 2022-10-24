import { addParameters } from '@storybook/react';
import './layout.css'

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    showPanel: true,
    panelPosition: 'bottom'
  },
  docs: { page: null },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: true,
      htmlWhitespaceSensitivity: 'ignore',
    },
    highlighter: {
      showLineNumbers: true,
      wrapLines: true,
    },
  },
  backgrounds: { 
    disable: false,
    values: [
      {
        name: 'gray',
        value: '#f7f7f8'
      }
    ],
    grid: {disable: true},
  },
  controls: {
    expanded: true
  },
  viewport: {disable: true},
  actions: {disable: true}
});

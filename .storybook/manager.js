import addons from '@storybook/addons';
import projectTheme from './project-theme';

addons.setConfig({
  sidebar: {
    showRoots: true
  },
  theme: projectTheme,
  hierarchyRootSeparator: /\|/,
  showPanel: true,
  panelPosition: 'bottom'
});
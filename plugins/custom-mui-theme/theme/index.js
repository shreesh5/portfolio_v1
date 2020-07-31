// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#b71c1c', contrastText: '#ffffff' },
  secondary: { main: '#ff8a80', contrastText: '#000000' }
};
const themeName = 'Thunderbird Vivid Tangerine Duck';

export default createMuiTheme({ palette, themeName });

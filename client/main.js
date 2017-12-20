import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Auth from '../imports/auth/Auth';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  if(!Auth.getToken()){
    window.location.replace('/login');
    return;
  }

  render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>, document.getElementById('render-target')
  );
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './ducks/store';
// import { BrowserRouter } from 'react-router-dom';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = () => {
    ReactDOM.render(
    // Wrap App inside AppContainer
    <HashRouter>
    <AppContainer>
        <App />
    </AppContainer>
    </HashRouter>,
    document.getElementById('root')
    );
};

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
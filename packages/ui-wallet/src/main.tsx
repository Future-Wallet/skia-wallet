// import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './app';
import { DebugObserver } from './state/utils';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <StrictMode>
  <BrowserRouter>
    <RecoilRoot>
      <DebugObserver />
      <App />
    </RecoilRoot>
  </BrowserRouter>
  // </StrictMode>
);

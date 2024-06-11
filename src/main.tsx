import { createRoot } from 'react-dom/client';
import './style.css';
import { RuntimeProvider } from './context';
import { Demo } from './Demo';

createRoot(document.getElementById('root')!).render(
  <RuntimeProvider>
    <Demo />
  </RuntimeProvider>
);

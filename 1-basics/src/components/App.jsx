import { Aside } from './Aside';
import { Frame } from './Frame';
import { Button } from './Button';

import './App.css';

export const App = () => (
  <>
    <header>
      <h1>Pokemon app</h1>
      <Button>Kevin</Button>
    </header>
    <main>
      <Aside />
      <Frame />
    </main>
    <footer>Copyright...</footer>
  </>
);

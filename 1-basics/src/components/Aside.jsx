import { Button } from './Button';

const list = ['Pikachu', 'Kevin', 'Ibrahim'];

export const Aside = () => (
  <aside>
    <ul>
      {list.map((listItem) => (
        <li key={listItem}>{listItem}</li>
      ))}
    </ul>
    <ul>
      <li>{list[0]}</li>
      <li>{list[1]}</li>
      <li>{list[2]}</li>
    </ul>
    <Button>Do it!</Button>
  </aside>
);

import { getIdFromUrl } from '../../utils';

import './AsideMenu.styles.css';

export const AsideMenu = ({ list, onIdSelected }) => (
  <aside className='aside'>
    <ul>
      {list.map((item) => (
        <li key={item.url}>
          <button onClick={() => onIdSelected(getIdFromUrl(item.url))}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  </aside>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Home';
import { UserLists } from './UserLists';


function App() {
  return <><Home />
  <h1>Rick and Morty</h1>
  <UserLists/>
  </>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
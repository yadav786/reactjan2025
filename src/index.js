import ReactDOM from 'react-dom/client';
import { Home } from './Home';

function App() {
  return <><Home /><h1>Rick and Morty</h1></>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
import './App.css';
import AccountPage from './Page/AccountPage';
import Menu from './Components/Menu/Menu'
import { routes } from './Router/Router';
import AccountContainer from './Container/AccountContainer';
function App() {
  return (
    <div class="container">
      <div className="row">
        {/* <Menu /> */}
        <AccountContainer />
        {/* {routes} */}
      </div>
    </div>

  );
}

export default App;

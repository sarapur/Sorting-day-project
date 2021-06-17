import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import FirstPage from './component/home/homePage'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <FirstPage></FirstPage>
      </Provider>
    </div>
  );
}

export default App;

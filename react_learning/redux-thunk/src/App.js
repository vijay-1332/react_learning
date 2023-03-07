import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import ReduxThunk from './ReduxThunk';
function App() {
  return (
    <Provider store={store}>
      <div>
        <ReduxThunk />
      </div>
    </Provider>

  );
}

export default App;

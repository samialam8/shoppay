import '@/styles/globals.scss'
import{ Provider } from "react-redux";
import store from "../store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);
function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <PersistGate Loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
      </Provider>);
}

export default App;
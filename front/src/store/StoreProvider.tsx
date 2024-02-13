import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './index';

export default function CustomStore(props: PropsWithChildren<NonNullable<unknown>>) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
}

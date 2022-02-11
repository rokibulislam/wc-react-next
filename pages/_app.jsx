import App from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { wrapper } from '../store';
import { useStore } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)

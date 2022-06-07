import App from 'next/app';
import Layout from '../components/sharing/layout';
import '../styles/index.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <div>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </div>
//   )
// }

// export default MyApp;

import { Provider } from 'react-redux';
import store from '../redux-saga/store';
import { createWrapper } from 'next-redux-wrapper';
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </Provider>
    )
  }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import { store } from "../app/store";

export default function App({ Component, pageProps }: AppProps) {
  // <Provider store={store}>
  return <Component {...pageProps} />;
  // </Provider>;
}

import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

//layout içine aldığım zaman footer ve navbarı her sayfada görüyorum.

export default MyApp;

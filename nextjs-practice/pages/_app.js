import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps}>g</Component>
    </>
  );
}

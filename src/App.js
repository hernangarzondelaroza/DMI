import "./styles.scss";

import Layout from "./components/Layout/Layout";
import ShowsList from "./components/Shows/Shows";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <ShowsList />
      </Layout>
    </div>
  );
}

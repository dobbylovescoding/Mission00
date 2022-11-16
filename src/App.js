import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Images from "./components/Images";
import styles from "./App.module.css";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div>
      <div className={styles.cont}>
        {/* <Navbar /> */}
        <Navbar2 />
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.images}>
          <Images />
        </div>
      </div>
    </div>
  );
}

export default App;

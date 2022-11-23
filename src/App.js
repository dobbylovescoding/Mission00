import Search from "./components/Search";
import Images from "./components/Images";
import styles from "./App.module.css";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

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
        <div className={styles.chatbot}>
          <Chatbot />
        </div>
        <div className={styles.Footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

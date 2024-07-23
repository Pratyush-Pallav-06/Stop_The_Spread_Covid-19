import React from "react";
import Charts from "./Components/Graph/Graph";
import Country from "./Components/Country/Country";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  // render and return
  render() {
    // we destructured the data ... and we stored the array of data we got

    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSJYVeSAziEtXMa7zxV14q9Dk3cpw2ZKH3Q&s"
          }
          alt="Corona"
        />

        <Country />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;

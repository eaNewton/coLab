import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div class="grid-container">
          <div class="grid-x">
            <h1>Test</h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

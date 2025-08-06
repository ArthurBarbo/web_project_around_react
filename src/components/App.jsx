import { useState, useEffect } from "react";
import Header from "./";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import api from "./utils/api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((UserData) => {
        console.log("Dados do usuário:", UserData);
        setCurrentUser(UserData);
      })
      .catch((err) => {
        console.log("erro ao buscar usuário", err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

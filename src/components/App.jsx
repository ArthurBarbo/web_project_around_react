import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import Login from "./Login/Login.jsx";
import api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getUserInfo()
      .then((UserData) => {
        console.log("Dados do usuário:", UserData);
        setCurrentUser(UserData);
      })
      .catch((err) => console.log("erro ao buscar usuário", err));

    api
      .getCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => console.log("erro ao buscar Cards", err));
  }, []);
  const handleUpdateUser = (data) => {
    return api.updateUserInfo(data).then((newData) => {
      setCurrentUser(newData);
    });
  };
  const handleUpdateAvatar = (avatarUrl) => {
    return api.updateAvatar(avatarUrl).then((updatedUser) => {
      setCurrentUser(updatedUser);
    });
  };
  const handleAddCard = (newCard) => {
    return api.createCard(newCard).then((createdCard) => {
      setCards((prevCards) => [createdCard, ...prevCards]);
      return createdCard;
    });
  };
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddCard,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main cards={cards} setCards={setCards} />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<Login onLogin={() => {}} />} />
          {/*laceholder para evitar erro*/}
          {/*<Route path="/signup" element={<Register />} />*/}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}
export default App;

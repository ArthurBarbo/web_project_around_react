import api from "../../../../../utils/api"

export async function removeCard(cardId, setCards) {
  try {
    await api.deleteCard(cardId);
    setCards((state) => state.filter((c) => c._id !== cardId));
  } catch (error) {
    console.error("Erro ao deletar card:", error);
  }
}

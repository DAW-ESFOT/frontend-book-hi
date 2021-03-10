import api from "./api";

async function getById(id) {
  return await api.get(`/books/${id}`);
}

export const Article = {
  getById,
};

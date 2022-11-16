import http from '../http';

const getAll = () => http.get('/books');

const get = (id) => http.get(`/books/${id}`);

const create = (data) => http.post('/books', data);

const update = (id, data) => http.put(`/books/${id}`, data);

const remove = (id) => http.delete(`/books/${id}`);

const removeAll = () => http.delete('/books');

const findByTitle = (title) => http.get(`/books?title=${title}`);

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;

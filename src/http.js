import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/',
  headers: {
    'Content-type': 'application/json',
  },
});

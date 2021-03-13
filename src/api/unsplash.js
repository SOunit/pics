import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bZZrw4DGzgGbw02TuaFxikFagSlUAJoHlpn1-ai2vwo',
  },
});

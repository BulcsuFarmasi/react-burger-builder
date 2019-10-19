import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-a07bb.firebaseio.com/"
});

export default instance;

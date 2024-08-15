import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "825d11ec58d243a79aacf7e5e1bd4010",
  },
});

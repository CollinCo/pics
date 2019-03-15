import axios from "axios";

// creates default obj
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a3a2a80c982a77a4de0e820f31f836ff30e4273d9391e307911681778867cfa8"
  }
});

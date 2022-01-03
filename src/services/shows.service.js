import axios from "axios";

class ShowsService {
  static getShows() {
    try {
      return axios.get("https://api.tvmaze.com/search/shows?q=girls");
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export default ShowsService;

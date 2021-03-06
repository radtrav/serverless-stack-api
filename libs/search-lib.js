
import axios from "axios";

const search = query => axios({
  "method": "GET",
  "url": "https://13tabs-web-search.p.rapidapi.com/api/web/index.jsp",
  "headers": {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": process.env.searchApi,
    "x-rapidapi-key": process.env.searchApiKey
  }, "params": {
    "q": query,
    "per_page": "3",
    "page": "1"
  }
});

export default search;
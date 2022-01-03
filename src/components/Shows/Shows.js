import React, { useEffect, useState } from "react";

import Show from "./Show/Show";
import ShowsService from "../../services/shows.service";

function Shows(props) {
  const [shows, setShows] = useState([]);
  // ComponentDidMount
  useEffect(() => {
    ShowsService.getShows()
      .then((response) => {
        setShows(response);
      })
      .catch((error) => console.log("Error", error.message));
  }, []);

  return <>{shows.data ? <Show data={shows.data} /> : ""}</>;
}

export default Shows;

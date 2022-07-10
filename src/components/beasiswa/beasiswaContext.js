import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BeasiswaContext = createContext();

export const BeasiswaContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "1c6edd65e1bb40828daa2caae61ff1fc";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=beasiswa-sekolah&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BeasiswaContext.Provider value={{ data }}>
      {props.children}
    </BeasiswaContext.Provider>
  );
};
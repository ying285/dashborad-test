import { useEffect } from "react";
import axios from "axios";
import { tabActions } from "../store/tab";
import { configActions } from "../store/congif";
import { useDispatch } from "react-redux";

const DataFetch = (url: string, configContent: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (configContent === "tab") {
          dispatch(tabActions.fetchData(res.data));
        } else if (configContent === "config") {
          dispatch(configActions.fetchConfig(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url, configContent, dispatch]);
};

export default DataFetch;

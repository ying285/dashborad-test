import { useEffect, useState } from "react";
import axios from "axios";
import { tabActions } from "../store/tab";
import { configActions } from "../store/congif";
import { useDispatch } from "react-redux";

const DataFetch = (url: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        dispatch(tabActions.fetchData(res.data));
        dispatch(configActions.fetchConfig(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
};

export default DataFetch;

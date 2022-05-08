import { useEffect, useState } from 'react';
import axios from 'axios';
// import { tabActions } from "../store/tab";
// import { configActions } from "../store/congif";

const DataFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus('fetching');
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setStatus('fetched');
      }
    };

    fetchData();

    // axios
    //   .get(url)
    //   .then((res) => {
    //     // if (configContent === "tab") {
    //     //   dispatch(tabActions.fetchData(res.data));
    //     // } else if (configContent === "config") {
    //     //   dispatch(configActions.fetchConfig(res.data));
    //     // }
    //     setData(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [url]);

  return { data, status, error };
};

export default DataFetch;

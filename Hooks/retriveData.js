import getData from "../Api/getData";
import { useState } from "react";
const retriveData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const loadData = async (endpoint) => {
    setVisible(true);
    const response = await getData(endpoint);
    setVisible(false);

    if (!response.ok) {
      setError(true);
    } else {
      setError(false);
    }
    setData(response.data);
  };

  return { data, error, loadData, visible };
};

export default retriveData;

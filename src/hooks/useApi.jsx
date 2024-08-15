import { useState } from "react";
import axios from "axios";

const useApi = (url, method = "get") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (body = null) => {
    console.log("🎈 🎈 🎈 fetchData iniciado con body:", body);
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url,
        method,
        data: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response 👍👍👍: ", response.data);
      setData(response.data);
    } catch (err) {
      console.log("✖️ ✖️ Error: ", err);
      setError(err);
    } finally {
      console.log("🏳️ finished 🏳️");
      setLoading(false);
    }
  };

  return { loading, data, error, fetchData };
};

export default useApi;

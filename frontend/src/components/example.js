import React from "react";
import "../App.css";
import { environment } from "../environment/environment.ts";
import axios from 'axios';

function Example() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const baseUrl = environment.baseApiUrl + "/example"

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(baseUrl);
        console.log(response);
        setData(response.data)
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);


  return (
    <div className="Example">
      <header className="Example-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default Example;
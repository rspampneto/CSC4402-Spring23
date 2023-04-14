import React, { ReactElement, ReactNode } from "react";
import "../App.css";
import { environment } from "../environment/environment.js";
import axios from 'axios';
import { Course } from "../interfaces/course";

function Example() {
  const [courses, setCourseList] = React.useState<Course[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const baseUrl = environment.baseApiUrl + "/example"

  React.useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Course[]>(baseUrl);
        console.log(response);
        setCourseList(response.data)
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

 return (
  <div className="Example">
   <header className="Example-header">
   <p>{loading? "Loading...": "CSC" + courses[0].id + ": " + courses[0].title} </p>
   </header>
  </div>
 );
}

export default Example;
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useApi from "../http";
import { useState, useEffect } from "react";


// const Courses = {
//     course_id:number,
//     course_name:string,
//     course_image:string,
//     course_descriotion:string,
// }
const Contact = () => {
  const [courses, setCourses] = useState();
  const api = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get("/course.php");
        setCourses(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchData();
  }, []);


  return (
    {courses.map((course,index)=>(
<Card style={{ width: "18rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ))}
    
  );
};

export default Contact;

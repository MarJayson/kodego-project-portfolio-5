import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useApi from "../http";
import { useState, useEffect } from "react";

const Contact = () => {
  const [courses, setCourses] = useState();
  const api = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/course.php");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {courses && courses.length > 0 ? (
        courses.map((course, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={course.course_image}></Card.Img>
            <Card.Body>
              <Card.Title>{course.course_name}</Card.Title>
              <Card.Text>{course.course_description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No courses available</p>
      )}
    </>
  );
};

export default Contact;

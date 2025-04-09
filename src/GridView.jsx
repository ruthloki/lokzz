import React from "react";
import "./GridView.css";
const GridView = () => {
  let students = [
    {
      name: "Mathi barathi",
      phone: "+1234567890",
      age: 20,
      content: "Computer Science student at RVS Engineering College",
      cgpa: 8.5,
    },
    {
      name: "Asik",
      phone: "9629118102",
      age: 21,
      content:
        "Artificial intelligence and machine learning student at RVS Engineering College",
      cgpa: 8.8,
    },
    {
      name: "Manoj",
      phone: "7845409563",
      age: 22,
      content: "Mechanical Engineering student at RVS Engineering College",
      cgpa: 7.9,
    },
    {
      name: "Hareesh ragavan",
      phone: "8682012275",
      age: 20,
      content: "Civil Engineering student at RVS Engineering College",
      cgpa: 8.2,
    },
    {
      name: "Mathankumar",
      phone: "9025581087",
      age: 23,
      content: "Information Technology student at RVS Engineering College",
      cgpa: 9.0,
    },
    {
      name: "Loki",
      phone: "8220653954",
      age: 21,
      content:
        "Electrical and Electronics Engineering student at RVS Engineering College",
      cgpa: 8.7,
    },
    {
      name: "shiva",
      phone: "9047967090",
      age: 22,
      content: "Computer Science student at RVS Engineering College",
      cgpa: 8.4,
    },
    {
      name: "Karan",
      phone: "7868969968",
      age: 20,
      content: "Biomedical Engineering student at RVS Engineering College",
      cgpa: 8.6,
    },
    {
      name: "Nathin",
      phone: "8838113541",
      age: 23,
      content: "Automobile Engineering student at RVS Engineering College",
      cgpa: 7.8,
    },
    {
      name: "Jeeva",
      phone: "6374729792",
      age: 21,
      content:
        "Artificial Intelligence and Data Science student at RVS Engineering College",
      cgpa: 9.1,
    },
  ];

  return (
    <div className="grid">
      {students.map((student, index) => (
        <div className="student" key={index}>
          <h2>{student.name}</h2>
          <p>Phone: {student.phone}</p>
          <p>Age: {student.age}</p>
          <p>Content: {student.content}</p>
          <p>CGPA: {student.cgpa}</p>
        </div>
      ))}
    </div>
  );
};

export default GridView;
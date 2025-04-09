import React from "react";
import reactlogo from "./assets/react.svg";
const profilelist={
  name:"LOKESH",
  department:"AI&DS",
  year:"2",
  mobile:"8220653954",
  address:"836,north street, nainarpalayam",
};
const Profilecard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
       <div
        style={{
          position: "relative",
          border: "2px solid #ccc",
          borderRadius: "8px",
          width: "300px",
          height: "350px",
          backgroundColor: "yellow",
          boxShadow: "0 4px 8px rgba(245, 242, 242, 0.1)",
       
          paddingRight: "300px",
          marginLeft: "300px",
          fontSize: "16px",
          color:"black"
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px", 
            textAlign: "left",
          }}
        >
             <img
            src={reactlogo}
            alt="Profille"
            style={{
                position: "absolute",
                bottom: "200px",
                left: "480px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                
            }}></img>
        <p>{profilelist.name}</p>
        <p>Department: {profilelist.department}</p>
        <p>Year: {profilelist.year}</p>
        <p>Mobile: {profilelist.mobile}</p>
        <p>Address: {profilelist.address}</p>
      </div>
    </div>
    </div>
  );
}
export default Profilecard;
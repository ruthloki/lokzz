import React from "react";
import reactlogo from "./assets/react.svg";

const Profile = ({ProfileLst}) => {
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
                
            }}/>
        <p>{ProfileLst.name}</p>
        <p>Department: {ProfileLst.department}</p>
        <p>Year: {ProfileLst.year}</p>
        <p>Mobile: {ProfileLst.mobile}</p>
        <p>Address: {ProfileLst.address}</p>
      </div>
    </div>
    </div>
  );
}
export default Profile;
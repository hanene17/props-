import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';



const spanStyles = {
  color: "red",
  borderColor: "#00f",
  textAlign: "left", 
  paddingTop: "100px", 
  fontSize: 25,
};
const fontStyle = {
  color: "white",
  fontSize: 20,
} ; 
const contentStyles={
  flexDirection: "column",
  display: "flex",
};
const displayStyles={
display: "flex",
justifyContent: "space-between"

};
const imgStyles={
  
  width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red" 
  };
  const aboutStyle ={
    color: "white",
  fontSize: 50,
  }

const Welcome= props => {
 
    return (
      <>
        
        <div style={displayStyles}>
       <div>
      <div style={imgStyles}>{props.children} </div> 
      </div>
       <div style={contentStyles}>
        <div style={aboutStyle}> {props.handleName}
     
            <div onClick={props.click}>
                {props.value}
            </div>
        </div>
       <div> <span style={spanStyles}>
        fullName: </span> <h5 style={fontStyle}>{props.fullName}</h5>
        </div>
       <div>
        <span style={spanStyles}>
        profession: </span>
       
        <h5 style={fontStyle}>{props.profession}</h5> 
        </div>
        <div>  <span style={spanStyles}>
        bio: </span><h5 style={fontStyle}>{props.bio}</h5> </div>
      
    
      </div>
      </div>
      </>
      );
   
    };
   
    Welcome.prototype={
      fullName: PropTypes.string,
      profession: PropTypes.string,
      bio: PropTypes.string,
      children: PropTypes.element.isRequired,
      handleName: PropTypes.string,  
    } ;
   
   //the values we want the props to have when not passed
   Welcome.defaultProps= {
    fullName: "hanen ghribi",
    profession: "In this checkpoint we are",
    
   };
    export default Welcome; 
 
       


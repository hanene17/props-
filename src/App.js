

import Welcome from './Profile/profile';
import imageProfile from  './image/imageProfile.jpg';
import bgStyle from './image/bgStyle.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style.css';




function App() {
 function handleName() {
   
    alert("Hi alert here")
   
 };
   
   
  return (
    <div style={{
      backgroundImage: "url(" + bgStyle + ")",
      width: "50%",
      height: "600px",
     
    }}>
     
     <Welcome
       click={handleName}
    
       value= 'AboutHanen'
    fullName='Hanen Ghribi'
    bio='software engineering in Software Development 
    Gafsa Private Higher School of Engineers ,,,,
    Graduation: 2017 ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    Relevant Coursework: Operating Systems Architecture,Symfony frameWork, Linux/Unix Programming, 
    Usability in Website and Software Design, C++ Programming I & II, Web Page Development,
     Relational Database Design & SQL, Data Engineering, Advanced Software Programming.'
    profession='JavaScript ,
    HTML/ CSS,
    Symfony,
    AWS (Redshift, S3),
    Python (Django),
    SQL (PostgreSQL, Oracle),
    REST APIs (GraphQL),
    Git
    EDUCATION
    B.S.'
>   
 
<img src={imageProfile} alt="imageProfile"/>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>

 
    </Welcome> 
    
    </div>
    
  );

};


export default App;


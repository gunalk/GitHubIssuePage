import React from "react";
import "../App.css"

import { GoIssueOpened,GoComment } from "react-icons/go";


const IssuesContainer = ({ Issues, loading,input }) => {
  if (loading) {
    return (
      <div className="spinner-overlay">
        <div className="spinner"></div>
      </div>
    );
  }

  return input ? (
    <>
     
      <ul  className="list-group mb-4" >
        {Issues.filter((data)=>(
        data.title.toLowerCase().includes(input.toLowerCase())
        )).map((issue) => (
          <li  className="list-group-item"
            key={issue.id}
            style={{paddingBottom:"0px"}}
            >
              <a style={{textDecoration:"none",color:"black"}}href={`https://github.com/prettier/prettier/issues/${issue.number}`}>
            <GoIssueOpened className="icon" style={{color:"green",marginRight:"20px"}}/>
            <strong className="Title">{issue.title}</strong>
            <b  style={{position:"absolute",right:"2%"}} >{issue.comments > 0 ? (<>
              <GoComment size="20" style={{color:"#707070	",fontWeight:"700"}}/> <span style={{color:"#707070	"}}>{issue.comments}</span>


              </>):(<></>)
            }</b>
            <p style={{fontSize:"14px",marginLeft:"35px"}}> #{issue.number} opened by <strong>{issue.user.login}</strong></p>
            </a> 
           
              </li>
        ))}

      </ul>
      
    </>
  ):(
    <>
    <ul  className="list-group mb-4" >
        {Issues.map((issue) => (
          <li  className="list-group-item"
            key={issue.id}
            style={{paddingBottom:"0px"}}
            
            
          ><a style={{textDecoration:"none",color:"black",position:"relative"}} href={`https://github.com/prettier/prettier/issues/${issue.number}`}>
            <GoIssueOpened className="icon" style={{color:"green",marginRight:"20px"}}/>
            <strong className="Title">{issue.title}</strong>
            <b  style={{position:"absolute",right:"2%"}} >{issue.comments > 0 ? (<>
              <GoComment size="20" style={{color:"#707070	",fontWeight:"700"}}/> <span style={{color:"#707070	"}}>{issue.comments}</span>


              </>):(<></>)
            }</b>
            <p style={{fontSize:"14px",marginLeft:"35px"}}> #{issue.number} opened by <strong>{issue.user.login}</strong></p>
          </a>
          
          </li>
        ))}
      </ul>
    </>
  )
};

export default IssuesContainer;
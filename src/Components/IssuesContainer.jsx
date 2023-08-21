import React from "react";
import "../App.css"

import { GoIssueOpened } from "react-icons/go";


const IssuesContainer = ({ Issues, loading,input }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return input ? (
    <>
     
      <ul  className="list-group mb-4" >
        {Issues.filter((data)=>(
        data.title.toLowerCase().includes(input.toLowerCase())
        )).map((issue) => (
          <li  className="list-group-item"
            key={issue.id}
            >
              <a style={{textDecoration:"none",color:"black"}}href={`https://github.com/prettier/prettier/issues/${issue.number}`}>
            <GoIssueOpened className="icon" style={{color:"green",marginRight:"20px"}}/>
            <strong className="Title">{issue.title}</strong>
            <p style={{fontSize:"14px",marginLeft:"35px"}}> #{issue.number} opened by <strong>{issue.user.login}</strong></p>
            </a>    </li>
        ))}

      </ul>
      
    </>
  ):(
    <>
    <ul  className="list-group mb-4" >
        {Issues.map((issue) => (
          <li  className="list-group-item"
            key={issue.id}
            
            
          ><a style={{textDecoration:"none",color:"black"}} href={`https://github.com/prettier/prettier/issues/${issue.number}`}>
            <GoIssueOpened className="icon" style={{color:"green",marginRight:"20px"}}/>
            <strong className="Title">{issue.title}</strong>
            <p style={{fontSize:"14px",marginLeft:"35px"}}> #{issue.number} opened by <strong>{issue.user.login}</strong></p>
          </a></li>
        ))}
      </ul>
    </>
  )
};

export default IssuesContainer;
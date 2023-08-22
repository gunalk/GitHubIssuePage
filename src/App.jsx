
import React, { useState, useEffect } from 'react';
import { Octokit } from "octokit"
import { useSelector } from 'react-redux';
import './App.css';
import IssuesContainer from './Components/IssuesContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNo from './Components/PageNo';
import { GoTriangleDown } from "react-icons/go";


function App() {
  const [issues,setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const[input,setInput]=useState("")
  const startingPage=useSelector((state)=>state.user.currentpage)
  const [IssuesEachPage] = useState(10);

  const fetchIssues = async () => {
    setLoading(true)
    const octokit = new Octokit({
<<<<<<< HEAD
      auth:"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"    })
=======
      auth: "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"    })
>>>>>>> 70ae826ee98c4564d4b8697999c18cdc0da3f269
    let response = await octokit.request('GET /repos/prettier/prettier/issues', {
      owner: 'prettier',
      repo: 'prettier',
    })
    console.log(response.data)
    console.log(input+"input")
    setIssues(response.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchIssues()
  }, [])
  
  const lastIndex = startingPage * IssuesEachPage;
  const firstIndex = lastIndex- IssuesEachPage;
  const content = issues.slice(firstIndex, lastIndex);

  

  return (
    <div className='container mt-5'>
      <div id='Input-field' >
      <button style={{height:"38px",borderTopRightRadius:"0px",borderBottomRightRadius:"0px",borderLeft:"0px"}} className="btn btn-light border border-dark-subtle ">Filters<GoTriangleDown/></button>  
      
      <input style={{marginBottom:"30px",width:"70%",borderBottomLeftRadius: "0px",borderTopLeftRadius: "0px",borderLeft:"none"}}  placeholder="Search issues " className="form-control bg-light border border-dark-subtle" onChange={(e)=>{setInput(e.target.value)}}type="text"/>
      <button style={{height:"38px",marginLeft:"20px"}} className="btn btn-success">New Issues</button>
      </div> 
   <IssuesContainer input={input} Issues={content} loading={loading} />
    <PageNo
      IssuesEachPage={IssuesEachPage}
      totalIssues={issues.length}
      
    />
  </div>
     )

}

export default App;

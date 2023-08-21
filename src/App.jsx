// src/App.js
import React, { useState, useEffect } from 'react';
import { Octokit } from "octokit"
import { useSelector } from 'react-redux';
import './App.css';
import IssuesContainer from './Components/IssuesContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNo from './Components/PageNo';



function App() {
  const [issues,setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const[input,setInput]=useState("")
  const startingPage=useSelector((state)=>state.user.currentpage)
  const [IssuesEachPage] = useState(10);

  const fetchIssues = async () => {
    setLoading(true)
    const octokit = new Octokit({
      auth: "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"    })
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
   <input style={{marginBottom:"30px"}}  placeholder="Search issues " className="form-control" onChange={(e)=>{setInput(e.target.value)}}type="text"/>
   <IssuesContainer input={input} Issues={content} loading={loading} />
    <PageNo
      IssuesEachPage={IssuesEachPage}
      totalIssues={issues.length}
      
    />
  </div>
     )

}

export default App;

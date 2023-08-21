import React from 'react';
import "../App.css"
import { useDispatch } from 'react-redux';
import { pageChange } from '../store/slice';

const PageNo = ({ IssuesEachPage, totalIssues }) => {
  const dispatch =useDispatch();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalIssues/ IssuesEachPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{display:"flex",justifyContent:"center"}}className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => dispatch(pageChange(number))} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNo;
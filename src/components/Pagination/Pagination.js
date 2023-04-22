import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

const Pagination = ({ info, PageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  let updateDimension = () =>{
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
    <style jsx>
      {`
        @media (max-width: 768px){
          .next,
          .prev {
            display: none;
          }
          .pagination{
            font.size: 14px;
          }
        }
      `}
    </style>
    <ReactPaginate
        className={`${s.btn} pagination justify-content-center gap-4 my-4`}
        forcePage={PageNumber===1 ? 0 : PageNumber - 1}
        breakLabel="..."
        nextLabel="Next >" 
        previousLabel="< Prev" 
        nextClassName={`${s.text} next`}
        previousClassName={`${s.text} prev`}
        pageClassName={`${s.text} page-item`}
        pageLinkClassName={`${s.text} page-link bg-dark`}
        marginPagesDisplayed={width > 576 ? 1 : 2}
        pageRangeDisplayed={width > 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data) => {
            setPageNumber(data.selected + 1)
        }}
        pageCount={info?.pages}
    />
    </>
  );
};

export default Pagination;
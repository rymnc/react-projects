import React from "react";

const Paginate = (props) => {

  const pageNumber=[];
  
  for(let i =1; i<=Math.ceil(props.totalItems/props.itemsPerPage);i++){
    pageNumber.push(i);
  }

 

  console.log(pageNumber)
  return (
  <nav className="text-white">
      <ul className="justify-content-center pagination pagination-m border-0">
        {pageNumber.map(number=>{

          let styler = 'page-item';

          if(number===props.currentPage){
            styler = 'page-item active'
          }
          return(
            <li key={pageNumber.indexOf(number)} className={styler}>
              <a href="!#" className='page-link' onClick={()=>
                props.pageSelected(number)}>{number}</a>
            </li>
          )
        })}
      </ul>
  </nav>
  );
};

export default Paginate;

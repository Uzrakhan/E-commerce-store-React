import React from 'react';
import { PAGE_SIZE } from '../constants';

const Pagination = ({currentPage,noOfPages,goToPrev,goToNext, handlePageChange }) => {
  const [currentPage,setCurrentPage] = useState(0);
  const noOfPages = Math.ceil((totalProducts/ PAGE_SIZE));
  

  const totalProducts = products.length;
  const noOfPages = Math.ceil((totalProducts/ PAGE_SIZE));

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageProducts = products.slice(start,end);

  const handlePageChange = (n) => {
    setCurrentPage(n)
  };

  const goToPrev = () => {
    setCurrentPage(prev => Math.max(prev - 1,0));
  };

  const goToNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, noOfPages - 1));
  };

  useEffect(() => {
      if(currentPage >= noOfPages) {
        setCurrentPage(noOfPages > 0 ? noOfPages - 1 : 0)
      }
    }, [currentPage, noOfPages]);

    return(
        <div className='pagination-container'>
        <button className='page-number' disabled={currentPage === 0} onClick={() => goToPrev()}>←</button>
        {Array.from({ length: noOfPages}, (item,n) => (
          <span key={n} className={'page-number ' + (n === currentPage ? 'active' : "")} onClick={() => handlePageChange(n)}>{n + 1}</span>
        ))}
        <button className='page-number' disabled={currentPage === noOfPages - 1} onClick={() => goToNext()}>→</button>
      </div>
    )
};

export default Pagination;
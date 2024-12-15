

function PageCongViec({
    // loading,
    // currentPage,
    // handlePageChange,
    // totalPages,
    handlePageChange,
    state,
    dispatch
})  { 
    const { currentPage, totalPages, loading } = state; 
    console.log(currentPage, totalPages, loading);
    return (
      

      <div className="pagination">
        {loading && <p>Đang tải...</p>}

        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}>
          Previous
        </button>

        <span>Trang {currentPage} / {totalPages}</span>

        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
  );
};

export default PageCongViec;
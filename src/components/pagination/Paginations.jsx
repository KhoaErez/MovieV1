import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    return (
        <div className='d-flex container justify-content-center align-items-center mt-3'>
            <Pagination>
                <Pagination.First onClick={() => handlePageClick(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => handlePageClick(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} />

                {currentPage > 2 && <Pagination.Item onClick={() => handlePageClick(1)}>1</Pagination.Item>}
                {currentPage > 3 && <Pagination.Ellipsis disabled />}

                {currentPage > 1 && (
                    <Pagination.Item onClick={() => handlePageClick(currentPage - 1)}>
                        {currentPage - 1}
                    </Pagination.Item>
                )}

                <Pagination.Item active>{currentPage}</Pagination.Item>

                {currentPage < totalPages && (
                    <Pagination.Item onClick={() => handlePageClick(currentPage + 1)}>
                        {currentPage + 1}
                    </Pagination.Item>
                )}

                {currentPage < totalPages - 2 && <Pagination.Ellipsis disabled />}
                {currentPage < totalPages - 1 && (
                    <Pagination.Item onClick={() => handlePageClick(totalPages)}>{totalPages}</Pagination.Item>
                )}

                <Pagination.Next onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
    );
};

export default Paginations;

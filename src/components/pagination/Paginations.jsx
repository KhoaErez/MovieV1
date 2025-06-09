import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginations = () => {
    const [activePage, setActivePage] = useState(1);
    const totalPages = 10;

    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
    }

    let items = [];

    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <Pagination.Item
                key={i}
                active={i === activePage}
                onClick={() => handlePageClick(i)}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <div className='d-flex container justify-content-center align-items-center'>
            <Pagination>
                <Pagination.First onClick={() => setActivePage(1)} />
                <Pagination.Prev onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))} />
                <Pagination.Item>{activePage}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{activePage - 1}</Pagination.Item>
                <Pagination.Item active>{activePage}</Pagination.Item>
                <Pagination.Item >{activePage + 1}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{totalPages}</Pagination.Item>
                <Pagination.Next onClick={() => setActivePage((next) => Math.min(next + 1, totalPages))} />
                <Pagination.Last onClick={() => setActivePage(totalPages)} />
            </Pagination>
        </div>

    );
}

export default Paginations;
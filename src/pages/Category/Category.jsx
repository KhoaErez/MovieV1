import { Outlet } from 'react-router-dom';

const Category = () => {
    return (
        <div className="category-page">
            <h1>Danh sách thể loại</h1>
            <Outlet />
        </div>
    )
}

export default Category;
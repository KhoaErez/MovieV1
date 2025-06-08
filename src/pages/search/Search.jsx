import { useSearchParams } from "react-router-dom";

const Search = () => {
    let [searchParams] = useSearchParams('');
    const keyword = searchParams.get('keyword')
    return (
        <div className="container mt-3">
            <h4>Kết quả tìm kiếm cho: <strong>{keyword}</strong></h4>
        </div>
    )
}

export default Search;
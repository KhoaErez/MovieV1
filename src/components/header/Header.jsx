import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [keyword, setKeyword] = useState('')
    const [bg, setBg] = useState()
    const navigate = useNavigate()

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const hanndleSearch = (event) => {
        event.preventDefault();
        if (keyword.trim())
            navigate(`/tim-kiem?keyword=${encodeURIComponent(keyword.trim())}&page=`)
        // navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`)
    }

    const handleChangeBg = (bg) => {
        if (bg)
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        else
            document.documentElement.setAttribute('data-bs-theme', 'white');
        setBg(!bg)
    }

    return (
        <Navbar expand="lg" className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : 'navbar'}`}>
            <Container fluid>
                <Link to="/" className='navbar-brand'>KhoaTran</Link>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        `navbar-brand ${isPending ? "pending" : isActive ? "active" : ""}`
                    }
                ></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`
                            }
                        >
                            Trang chủ
                        </NavLink>
                        <NavLink
                            to="/phim-le"
                            className={({ isActive, isPending }) =>
                                `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`
                            }
                        >
                            Phim lẻ
                        </NavLink>
                        <NavLink
                            to="/phim-bo"
                            className={({ isActive, isPending }) =>
                                `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`
                            }
                        >
                            Phim bộ
                        </NavLink>
                        <NavLink
                            to="/phim-hoat-hinh"
                            className={({ isActive, isPending }) =>
                                `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`
                            }
                        >
                            Phim hoạt hình
                        </NavLink>
                        <NavDropdown title="Thể loại" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="the-loai/khoa-hoc-vien-tuong">Khoa học viễn tưởng</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="the-loai/tai-lieu">Tài liệu</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="the-loai/tinh-cam">Tình cảm</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="the-loai/hanh-dong">Hành động</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="the-loai/kinh-di">Kinh dị</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="the-loai/tam-ly">Tâm lý</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Quốc gia" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="quoc-gia/viet-nam">Việt Nam</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="quoc-gia/han-quoc">Hàn Quốc</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="quoc-gia/nhat-ban">Nhật Bản</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="quoc-gia/trung-quoc">Trung quốc</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="quoc-gia/thai-lan">Thái Lan</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Button type="submit" variant="outline-success" className='mx-2 btn' onClick={() => handleChangeBg(bg)}>{bg === true ? 'Tối' : 'Sáng'}</Button>

                    <Form className="d-flex" onSubmit={hanndleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;
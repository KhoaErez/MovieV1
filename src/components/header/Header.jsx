import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const hanndleSearch = (event) => {
        event.preventDefault();
        if (keyword.trim())
            navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`)
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">KhoaTran</Navbar.Brand>
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
                        {/* <Nav.Link href="#action1">Trang chủ</Nav.Link>
                        <Nav.Link href="#action2">Phim lẻ</Nav.Link>
                        <Nav.Link href="#action3">Phim bộ</Nav.Link>
                        <Nav.Link href="#action4">Phim hoạt hình</Nav.Link> */}
                        <NavDropdown title="Thể loại" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="the-loai/hai-kich">Hài kịch</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="the-loai/tinh-cam">Tình cảm</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="the-loai/hanh-dong">Hành động</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Quốc gia" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="quoc-gia/vietnam">Việt Nam</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="quoc-gia/korea">Hàn Quốc</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="quoc-gia/japan">Nhật Bản</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
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
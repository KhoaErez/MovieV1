import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="footer-content container-fluid text-white py-4" >
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 mb-3">
                    <p className="fw-bold">© 2025 Tran Doan Khoa.</p>
                    <p className="py-1">
                        <a href="tel:0867706907" className="text-decoration-none text-white  d-block">
                            <FontAwesomeIcon icon={faPhone} className="me-2" />
                            0819400478
                        </a>
                    </p>
                    <p className="py-1">
                        <a href="#" className="text-decoration-none text-white d-block">
                            <FontAwesomeIcon icon={faFacebook} className="me-2" />
                            Theo dõi tôi qua Facebook
                        </a>
                    </p>
                    <p className="py-1">
                        <a href="#" className="text-decoration-none text-white d-block">
                            <FontAwesomeIcon icon={faInstagram} className="me-2" />
                            Theo dõi tôi qua Instagram
                        </a>
                    </p>
                    <p className="py-1">
                        <a href="https://github.com/KhoaErez" className="text-decoration-none text-white d-block">
                            <FontAwesomeIcon icon={faGithub} className="me-2" />
                            Theo dõi tôi qua Github
                        </a>
                    </p>
                    <p>
                        Tất cả nội dung của trang web này được thu thập từ các trang web video chính thống trên Internet và không
                        cung cấp phát trực tuyến chính hãng. Nếu quyền lợi của bạn bị vi phạm, vui lòng thông báo cho chúng tôi,
                        chúng tôi sẽ xóa nội dung vi phạm kịp thời. Cảm ơn sự hợp tác của bạn!
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Footer;

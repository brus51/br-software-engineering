import { Container, Row, Col } from "react-bootstrap";
import logo from "../assests/img/logo.png";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";

export const Footer = () => {

    function GL2() {
        return (
            <span data-testid="brand-header-default-logo"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" height="24" width="25" class="tanuki-logo">
                <path fill="#E24329" d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" class="tanuki-shape tanuki"></path>
                <path fill="#FC6D26" d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" class="tanuki-shape right-cheek"></path>
                <path fill="#FCA326" d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z" class="tanuki-shape chin"></path>
                <path fill="#FC6D26" d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z" class="tanuki-shape left-cheek"></path>
            </svg>
            </span>
        );
    }
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/brian-ruscio-374b28b7" target="_blank" rel="noreferrer noopener" ><img src={navIcon1} /></a>
                            <a href="https://github.com/brus51" target="_blank" rel="noreferrer noopener"><img src={navIcon2} /></a>
                            <a className="gitlab-icon" href="https://gitlab.com/brian.p.ruscio" target="_blank" rel="noreferrer noopener"><GL2 /></a>
                        </div>
                        <p>Thanks for stopping by!</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

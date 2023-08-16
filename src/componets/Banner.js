import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assests/img/header-img.png";
import { useEffect, useState } from "react";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const toRotate = ["Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (updatedText === fullText) {
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hello, I'm Brian!</span>
                        <h1>{"I'm a "}<span className="wrap">{text}</span></h1>
                        <p>I am a highly-driven professional specializing in Software Engineering, committed to the continuous enhancement and expansion of my technical skill set. I am consistently channeling my inherent passion for learning and achieving excellence to excel as a Full Stack Developer.
                            I also bring a strong background in the Army National Guard where, for 9 years, I served as an Aircraft Electrician for Chinooks and Blackhawks in Rochester. The last 4 of those year I served as full-time. Those experiences fortified my leadership abilities and teamwork skills and developed a passion for technology, troubleshooting, and problem-solving.
                            Outside of my professional pursuits, I'm an avid outdoorsman and fisherman, with an interest in physical fitness and well-being, activities that provide balance and renewal in my dynamic life.</p>
                        <button onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}>
                            Let's Connect< ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="Header Img" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

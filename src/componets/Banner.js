import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assests/img/header-img.png";
import { useEffect, useState } from "react";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Full-Stack Developer", "Front-End Developer", "Back-End Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome!</span>
                        <h1>{"I'm a "}<span className="wrap">{text}</span></h1>
                        <p>I am a highly-driven professional specializing in Software Engineering, committed to the continuous enhancement and expansion of my technical skill set. I am consistently channeling my inherent passion for learning and achieving excellence to excel as a Full Stack Developer.
                            I also bring a strong background in the Army National Guard where, for 9 years, I served as an Aircraft Electrician for Chinooks and Blackhawks in Rochester. For about 4 of those years, I worked full-time. Those experiences fortified my leadership abilities and teamwork skills and developed a passion for technology, troubleshooting, and problem-solving.
                            Outside of my professional pursuits, I'm an avid outdoorsman and fisherman, with an interest in physical fitness and well-being, activities that provide balance and renewal in my dynamic life.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect< ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="Header Img" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

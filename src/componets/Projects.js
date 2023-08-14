import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project from "../assests/img/projects.jpg";
import projImg1 from "../assests/img/project-img1.jpg";
import projImg2 from "../assests/img/project-img2.jpg";
import projImg3 from "../assests/img/project-img3.jpg";



export const Projects = () => {

    const projects = [
        {
            title: "Camp Scout",
            description: "Outdoor-Adventure Social Media App",
            imgUrl: projImg1,
            link: "https://gitlab.com/brian.p.ruscio/camp-scout",
        },
        {
            title: "Lot Logic",
            description: "Repair and Service Vehicles. Schedule Appointments, Maintain Employees",
            imgUrl: projImg2,
            link: "https://gitlab.com/brian.p.ruscio/lot-logic",
        },
        {
            title: "Coming Soon",
            description: "In Work",
            imgUrl: projImg3,
            link: "https://gitlab.com/",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Check out some of my past projects or take a look at some that are in progress!<br></br>
                            Click on the project to be taken to the repository and explore them yourself!
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Social Media</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Coming Soon</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Coming Soon</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Upcoming Projects
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Upcoming Projects
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import project1 from "../assets/img/estoreImg.png"
import project2 from "../assets/img/clubkidImg.png"
import project3 from "../assets/img/jsdjImg.png"
export const Projects = () => {
    const projects = [
        {
            title: "eStore",
            description: "A React based E-commerce web store",
            imgUrl: project1,
        },
        {
            title: "clubKid",
            description: "A full-stack CRUD web application",
            imgUrl: project2,
        },
        {
            title: "JS DJ",
            description: "A JavaScript browser game",
            imgUrl: project3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                             <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    <Col sml={6} md={4}>
                                    <a href="https://github.com/adam-alfraih/eStore-finalproject" target="_blank" rel="noreferrer">
                                    <div className="proj-imgbx">
                                        <img src={project1} alt="" />
                                        <div className="proj-txtx">
                                            <h4>eStore</h4>
                                            <span>Hello</span>
                                        </div>
                                    </div>
                                    </a>
                                    </Col>
                                }
                                {
                                    <Col sml={6} md={4}>
                                    <a href="https://github.com/adam-alfraih/clubKid-project2" target="_blank" rel="noreferrer">
                                    <div className="proj-imgbx">
                                        <img src={project2} alt="" />
                                        <div className="proj-txtx">
                                            <h4>clubKid</h4>
                                            <span>A full-stack CRUD web application</span>
                                        </div>
                                    </div>
                                    </a>
                                    </Col>
                                }
                                {
                                    <Col sml={6} md={4}>
                                    <a href="https://github.com/adam-alfraih/js-dj" target="_blank" rel="noreferrer">
                                    <div className="proj-imgbx">
                                        <img src={project3} alt="" />
                                        <div className="proj-txtx">
                                            <h4>eStore</h4>
                                            <span>Hello</span>
                                        </div>
                                    </div>
                                    </a>
                                    </Col>
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">More Projects Coming Soon!</Tab.Pane>
                        <Tab.Pane eventKey="third">More Projects Coming Soon!</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}
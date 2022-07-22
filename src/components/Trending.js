import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneimage from "../assets/images/trending/dune.jpg"
import everythingimage from "../assets/images/trending/everything.jpg"
import infiniteimage from "../assets/images/trending/infinite.jpg"
import jokerimage from "../assets/images/trending/joker.jpg"
import lightyearimage from "../assets/images/trending/lightyear.jpg"
import morbiusimage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                    <Card className="bg-white movieImage ">
                        <Image src= {duneimage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {everythingimage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">EVERYTHING</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {infiniteimage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">INFINITE</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {jokerimage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">JOKER</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {lightyearimage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {morbiusimage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">MORBIUS</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
          
        </div>
    )
}

export default Trending
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Testimonials.scss";
import { Row, Col, Card } from "react-bootstrap";
import {
  MdStar,
  MdFormatQuote,
  MdStarOutline,
  MdStarHalf,
} from "react-icons/md";

export default function Testimonials() {
  return (
    <div id="Testimonials" className="TestimonialsSection">
      {/* <Fade top> */}
      <h3 className="TestimonialTitle">What Our Clients Say</h3>
      <hr className="testimonialLine" /> <br />
      {/* </Fade> */}
      {/* <Fade bottom> */}
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          500: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        // centeredSlides={true}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div style={{ height: "300px" }}>
            <Card className="cardSection" style={{ marginTop: "1.5em" }}>
              <Row>
                <Col>
                  <Card.Body>
                    <div class="numberCircle">
                      <MdFormatQuote
                        style={{ color: "#209CEE", fontSize: "22px" }}
                      />
                    </div>
                    <Card.Title>
                      {/* <img className="avatar" alt="aima" src="./assets/images/avatar.svg" /> */}
                      <Row>
                        <Col className="clientId">Client ID=68</Col>
                        <Col className="date">Jan 21, 2022</Col>
                      </Row>
                      <br />
                    </Card.Title>
                    <Card.Text>
                      <p className="sayings">
                        "I received the dissertation paper...., and it is, as
                        usual, outstanding. Thank you for your help in this
                        class. To be honest, if it weren't for your help, I
                        wouldn't be able to finish my degree this year.." &nbsp;
                      </p>
                    </Card.Text>
                    <div className="rate">
                      <section>
                        <MdStar className="rate" />
                        <MdStar className="rate" />
                        <MdStar className="rate" />
                        <MdStar className="rate" />
                        <MdStarHalf className="rate" />
                      </section>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
              <Card.Footer>
                <small className="text-muted"> Type: Dissertation Paper</small>
              </Card.Footer>
            </Card>
          </div>
          <div style={{ height: "30px" }} />
        </SwiperSlide>

        <SwiperSlide style={{ height: "350px" }}>
          <div style={{ height: "300px" }}>
            <Card className="cardSection" style={{ marginTop: "1.5em" }}>
              <Row>
                <Col>
                  <Card.Body>
                    <div class="numberCircle">
                      <MdFormatQuote
                        style={{ color: "#209CEE", fontSize: "22px" }}
                      />
                    </div>
                    <Card.Title>
                      {/* <img className="avatar" alt="aima" src="./assets/images/avatar.svg" /> */}
                      <Row>
                        <Col className="clientId">Client ID= 76</Col>
                        <Col className="date">Feb 06, 2022</Col>
                      </Row>
                      <br />
                    </Card.Title>
                    <Card.Text>
                      <p className="sayings">
                        "5 Stars all the way...."In general, I'm pleased and
                        delighted with your efforts in assisting me with my
                        thesis. Thank you so much for everything. You have
                        surpassed my expectations." &nbsp;
                        <div className="rate">
                          <section>
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                            <MdStar className="rate" />
                          </section>
                        </div>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Card.Footer>
                <small className="text-muted"> Type: Thesis Paper</small>
              </Card.Footer>
            </Card>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* </Fade> */}
    </div>
  );
}

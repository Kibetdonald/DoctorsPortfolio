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
            
                      <Row>
                        <Col className="clientId">James Macharia</Col>
                        <Col className="date">Feb 26, 2023</Col>
                      </Row>
                      <br />
                    </Card.Title>
                    <Card.Text>
                      <p className="sayings">
                        "I recently visited this clinic and was impressed by the
                        friendly staff and their professional approach to
                        healthcare. The facility was clean and well-maintained,
                        and the doctors were knowledgeable and attentive to my
                        needs. I would definitely recommend this clinic to
                        anyone looking for high-quality medical care." &nbsp;
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
                <small className="text-muted"> Service: Theraputics</small>
              </Card.Footer>
            </Card>
          </div>
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
            
                      <Row>
                        <Col className="clientId">James Macharia</Col>
                        <Col className="date">Feb 26, 2023</Col>
                      </Row>
                      <br />
                    </Card.Title>
                    <Card.Text>
                      <p className="sayings">
                        "I recently visited this clinic and was impressed by the
                        friendly staff and their professional approach to
                        healthcare. The facility was clean and well-maintained,
                        and the doctors were knowledgeable and attentive to my
                        needs. I would definitely recommend this clinic to
                        anyone looking for high-quality medical care." &nbsp;
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
                <small className="text-muted"> Service: Theraputics</small>
              </Card.Footer>
            </Card>
          </div>
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
            
                      <Row>
                        <Col className="clientId">James Macharia</Col>
                        <Col className="date">Feb 26, 2023</Col>
                      </Row>
                      <br />
                    </Card.Title>
                    <Card.Text>
                      <p className="sayings">
                        "I recently visited this clinic and was impressed by the
                        friendly staff and their professional approach to
                        healthcare. The facility was clean and well-maintained,
                        and the doctors were knowledgeable and attentive to my
                        needs. I would definitely recommend this clinic to
                        anyone looking for high-quality medical care." &nbsp;
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
                <small className="text-muted"> Service: Theraputics</small>
              </Card.Footer>
            </Card>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* </Fade> */}
    </div>
  );
}

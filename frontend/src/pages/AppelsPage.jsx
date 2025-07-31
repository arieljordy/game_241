import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import developer from "../assets/images/developer.jpg";
import architect from "../assets/images/architect.jpg";
// import InfiniteScroll from 'react-infinite-scroller'

export default function AppelsPage() {
  const [display, setDisplay] = useState(true);
  const table = [0, 1, 2, 3, 4, 5, 6, 7];
  setTimeout(() => {
    setDisplay(false);
  }, 3000);

  return (
    <>
      <h3 className="element-bleu text-center">
        Recherche de financement & Appels d'offres
      </h3>
      {display ? (
        <Spinner visibility={display} />
      ) : (
        <Container>
          <Row className="d-flex justify-content-center">
            {/* <InfiniteScroll
                        pageStart={0}
                        loadMore={()=>console.clear()}
                        hasMore={true || false}
                        loader={<Spinner visibility={true}/>}
                        useWindow={false}
                    > */}
            {table.map((idx) => (
              <Col
                xs={12}
                lg={4}
                key={idx}
                className="animate__animated animate__slideInUp animate__repeat-1">
                <Card img={idx % 2 === 0 ? architect : developer} />
              </Col>
            ))}
            {/* </InfiniteScroll>       */}
          </Row>
        </Container>
      )}
    </>
  );
}

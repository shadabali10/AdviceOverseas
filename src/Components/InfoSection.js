import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { HashLink as NLink } from "react-router-hash-link";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc(100vw - 1300) / 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: 1;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const ColumnLeftR = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: 2;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;
const ColumnRightR = styled.div`
  padding: 1rem 2rem;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <>
      <Section>
        <Container className="pl-10 pr-10">
          <ColumnLeft>
            <h1 className="text-3xl font-semibold">Real Estate</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We provide best choices with the right prices to get lands,
              <br></br>
              buy properties and provide rent services for our very esteemed{" "}
              <br></br>
              clients at very good prices. We also do building projects,
              <br></br>
              renovations and repairs and construction.
            </p>
            <Button className="mt-10" primary="true">
              <NLink smooth to="/real-estate#top">
                View Real Estate
              </NLink>
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnRight>
        </Container>
      </Section>

      <Section>
        <Container className="pl-10 pr-10">
          <ColumnLeftR>
            <h1 className="text-3xl font-semibold">HR Consultancy</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {" "}
              Our services are second to none , as we engage our clients{" "}
              <br></br>
              with end to end processing of all HR needs ranging from
              recruitment,<br></br>
              training and development, and all other HR services.{" "}
            </p>
            <Button className="mt-10" to="/hr-consultancy" primary="true">
              <NLink smooth to="/hr-consultancy#top">
                HR Consultancy
              </NLink>
            </Button>
          </ColumnLeftR>
          <ColumnRightR reverse={reverse}>
            <img alt="home" />
          </ColumnRightR>
        </Container>
      </Section>

      <Section>
        <Container className="pl-10 pr-10">
          <ColumnLeft>
            <h1 className="text-3xl font-semibold">Emerging Markets</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We partner with the international companies and local ones alike
              <br></br>
              into providing very viable soft landing business services that is
              <br></br>
              all weathered and bound to succeed; especially in the areas of new
              <br></br>
              businesses and frontiers. From international companies wanting to
              <br></br>
              do business right, we can come as your local and your trusted
              <br></br>
              partner while smoothening your access to the markets whether new
              <br></br>
              or old.
            </p>
            <Button className="mt-10" primary="true">
              <NLink smooth to="/emerging-markets#top">
                View Emerging Markets
              </NLink>
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img alt="home" />
          </ColumnRight>
        </Container>
      </Section>

      <Section>
        <Container className="pl-10 pr-10">
          <ColumnLeftR>
            <h1 className="text-3xl font-semibold">Software</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We are a one-stop shop for everything in business and strategy.
              Talking about IT, we have specialists in every field, be it AI,
              IoT, App Development, Web Development, Cloud Computing, and many
              more.{" "}
            </p>
            <Button className="mt-10" primary="true">
              <NLink smooth to="/softwares#top">
                Software
              </NLink>
            </Button>
          </ColumnLeftR>
          <ColumnRightR reverse={reverse}>
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
              alt="home"
            />
          </ColumnRightR>
        </Container>
      </Section>
    </>
  );
};

export default InfoSection;

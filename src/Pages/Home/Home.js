import React, { useState } from 'react';
import './Home.css';
import Card from "../../Components/Cards/CardItem";
import data from "../../Data/Home/data.json";
import TaxCalc from '../../Components/TaxCalculator/TaxCalc';
import {Row,Col} from 'react-bootstrap/';

//Todo:
//Emails, Notifications, Wallet, Feedbacks.

const Home = () => {
  const [cardData,setCardData] = useState(data);
  return (
    <>
      <Row className="homeFirstRow">
        <Col xl={6} lg={8} md={12} sm={12} xs={12} className='mb-4' >
          <Card info={{title:"Hi, Mohammad" , data:"Welcome back to your admin control panel!"}} />
        </Col>
        {cardData.map((cardData)=>
        <Col xl={2} lg={4} md={6} sm={6} xs={10} key={cardData.id} className='mb-4'>
            <Card info={cardData} key={cardData.id} />
        </Col>)}
        <Col xl={3} lg={4} md={6} sm={6} xs={10} className='mb-4'>
          <TaxCalc/>
        </Col>
      </Row>
    </>
  )
}

export default Home
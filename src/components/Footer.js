import React, { useEffect, useState } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import { Container, Row, Col} from "react-bootstrap";
import logo from "../assets/img/l.png";
import navIcon1 from '../assets/img/nav-icon1-1.svg';
import navIcon2 from '../assets/img/env.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import download from "../assets/img/download.svg";
import resume from "../assets/img/Resume.pdf";
export const Footer = () => {
   
        const [percentage, setPercentage] = useState(0);
      
        useEffect(() => {
          setTimeout(() => {
            if (percentage < 100) {
              setPercentage(percentage + 1);
            }
          }, 50);
        }, [percentage]);
    return (
        <footer className="footer" id="footers">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" className="footer-img" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="footer-c">
                            <a target="_blank" href="https://www.linkedin.com/in/haashir-sanaa-549a83222/"><img src={navIcon1}/></a>
                         
                            <a target="_blank" href="https://www.instagram.com/sanaa._._/"><img src={navIcon3}/></a>
                        </div>
                        <p>  &lt;/&gt; by Haashir Sanaa</p>
                       
    <a href={resume} download="Resume" className="resume-btn">
    <button class="resume-button" 
    onclick="window.location.href = 'https://drive.google.com/file/d/1ZGt89llSI3-IUmyrkCd-DvMn1CxqFeX6/view?usp=sharing';"
    >
      Download Resume
  
    
    </button>
    
   
    </a>
    
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
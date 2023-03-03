
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';
import schoolpic from '../assets/img/school.png';
import colorSharp from "../assets/img/color-sharp.png";
import collegepic from "../assets/img/collegee.png";
import ProgressBar from 'react-bootstrap/ProgressBar';

export const Education = () => {

    return (
     
      
      <section className='education' id="ed">
        <h2 className='ed-'>Education</h2>
      <div className='card-'>
       
      <Card border="secondary" style={{ width: '25rem'}} className="card-style">
      <Card.Img variant="top" src={schoolpic} className="card-img" />
      <Card.Body>
        <Card.Title className='card-title'><h5>Sanskriti...The School</h5><br /><h7 className="Sts">Ajmer, Rajasthan</h7></Card.Title>
        <Card.Text className='card-text'>
        <h4 className='sslc'>SSLC</h4>
        <ProgressBar now={90.1} variant="success" className='per' />
        <h6>90%</h6>
        <h4 className='hs'>Higher Secondary</h4>
      
        <ProgressBar now={88} variant="success" className='per2' />
        
        <h6>88%</h6>
        </Card.Text>
       
      </Card.Body>
    </Card>
     <Card border="secondary" style={{ width: '25rem'}} className="card-style">
      <Card.Img variant="top" src={collegepic} className="college-pic" />
      <Card.Body>
        <Card.Title className='vit'><h5>Vellore Institute of Technology</h5><br /><h7 className='VIT'>Vellore, Tamil Nadu</h7></Card.Title>
        <Card.Text className='card-text'>
        <h4 className='cgpa'>CGPA (till 3rd sem)</h4>
        <ProgressBar animated now={89} variant="success" className='cgpa2' />
        <h6 className='cgpa3'>8.9</h6>
        <h3 className='g-year'>Year of Enrollment : 2021 <br />Year of Graduation : 2025</h3>
   
      
      
        </Card.Text>
       
      </Card.Body>
    </Card>

    </div>
     <img className="background-image" src={colorSharp} alt="Image" />
</section>





 










      /*
        <section className='education' id='ed'>
          <h2 className='edu'>Education</h2>
        <div className='container'>
        <div className="ed-bx wow zoomIn">
        

        <div className="row">

    <Card style={{ width: '7rem'}} className="left-card">
     <div className="try">
      <Card.Img variant="top" src={schoolpic} className="school-pic" />
      <Card.Title className='sts'><h5>Sanskriti...The School</h5><br /><h7>Ajmer, Rajasthan</h7></Card.Title>
       <h4 className='sslc'>SSLC</h4>
        <ProgressBar now={90.1} variant="success" className='per' />
        <h6>90%</h6>
        <h4 className='hs'>Higher Secondary</h4>
      
        <ProgressBar now={88} variant="success" className='per2' />
        
        <h6>88%</h6>
     </div>
      <Card.Body>
        
      </Card.Body>
      <Card.Body>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '7rem' }} className="right-card">
      <Card.Img variant="top" src={collegepic} className="college-pic" />
      <Card.Body>
        <Card.Title className='vit'><h5>Vellore Institute of Technology</h5> <br /> <h7 className="location">Vellore, Tamil Nadu</h7></Card.Title>
        <h4 className='cgpa'>CGPA until 3rd sem</h4>
        <ProgressBar animated now={89} variant="success" className='cgpa2' />
        <h6 className='cgpa3'>8.9</h6>
        <h3 className='g-year'>Year of Enrollment : 2021 <br />Year of Graduation : 2025</h3>
      </Card.Body>
    
      <Card.Body>
     
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
   
     
        </section>
      
      */
    );
}
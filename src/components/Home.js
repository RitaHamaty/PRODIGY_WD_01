import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import { useThemeContext } from '../context/ThemeContext'
import img from '../assets/img.jpg'

const Home = () => {

  const {theme} = useThemeContext();

  return (
    <div>This is Home Page
            <Row className='my-5 py-5'>
                <Col className="text-center">
                    <div className='p-5 mx-5 mt-5' theme={theme}>
                        <p className='par'>We Create ... You Celebrate!</p>
                        <p className='par2'>Making the Ordinary, Extrodinary.</p>
                    </div>
                </Col>
                <Col className="text-center" >
                    <Image src={img} width='550px' height='300px' rounded/>
                </Col>
            </Row>
    </div>
  )
}

export default Home
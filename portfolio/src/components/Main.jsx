import { Container, ImageSpace, InfoSpace, ContactIcons, Line, TextResume, ContactIconsMobile } from './Main.style'
import image from '../assets/image.png'
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

function Main() {
  return (
    <Container>



      <ImageSpace>

        <img src={image} alt="" />

      </ImageSpace>



      <InfoSpace>


        <Line pos="flex-end" wid="60%">
          <p></p>
        </Line>


        <TextResume>

          <div>
            <p>Ciência da Computação</p>
            <p>Programação</p>
            <p>Desenvolvimento Web</p>
          </div>

        </TextResume>


        <ContactIcons>
          <div>
            <a href='https://www.linkedin.com/in/catarinacsampaio/'><FaLinkedin /></a>
            <a href='https://github.com/SamCatarina'><FaGithub /></a>
            <a href='mailto:sampaiocatarina11@gmail.com'><FaEnvelope /></a>
            <a href='https://api.whatsapp.com/send?phone=87981675434'><FaWhatsapp /></a>
          </div>

        </ContactIcons>


      </InfoSpace>



      <ContactIconsMobile>
        <div>
          <a href='https://www.linkedin.com/in/catarinacsampaio/'><FaLinkedin /></a>
          <a href='https://github.com/SamCatarina'><FaGithub /></a>
          <a href='mailto:sampaiocatarina11@gmail.com'><FaEnvelope /></a>
          <a href='https://api.whatsapp.com/send?phone=87981675434'><FaWhatsapp /></a>
        </div>
      </ContactIconsMobile>
    </Container>
  )
}

export default Main
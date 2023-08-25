import { CiLocationOn, CiKeyboard } from 'react-icons/ci'
import { PiGraduationCapLight, PiCatLight } from 'react-icons/pi'
import { AboutLinks, AboutMain, AboutText, AboutTextFather, AboutTitle, Container, Content, TextLine } from "./About.style"
import { Line } from "./Main.style"



function About() {
  return (
    <Container>
      <Content>
        <Line pos="flex-start" wid="30%">
          <p></p>
        </Line>

        <AboutMain>

          <AboutTitle>
            Um pouco sobre mim...
          </AboutTitle>

          <AboutTextFather>

            <AboutText>
              <TextLine>
                <CiLocationOn />
                <p>Sou de Serrita, Pernambuco!</p>
              </TextLine>
              <TextLine>
                <PiGraduationCapLight />
                <p>Bacharelado em andamento em Ciência da Computação, na UNIVASF</p>
              </TextLine>
              <TextLine>
                <CiKeyboard />
                <p>Sou Desenvolvedora Fullstack</p>
              </TextLine>
              <TextLine>
                <PiCatLight />
                <p>Apaixonada por filmes, músicas, livros, matemática, design e gatos!</p>
              </TextLine>
            </AboutText>

          </AboutTextFather>

          <AboutLinks>
            <div>
              <a href='https://letterboxd.com/Catarina_c/'>Letterboxd</a>
              <a href='https://open.spotify.com/user/31vptrx5ban3vj725wwtkh427zkm'>Spotify</a>
            </div>


          </AboutLinks>



        </AboutMain>



        <Line pos="flex-end" wid="30%">
          <p></p>
        </Line>
      </Content>
    </Container>
  )
}

export default About
import { Container, Project, ProjectsWrap } from "./Projects.style"
import { Line } from './Main.style'
import projeto0 from '../assets/projeto0.png'
import projeto1 from '../assets/projeto1.png'
import projeto2 from '../assets/projeto2.jpeg'



function Projects() {
  return (
    <Container>
        <Line pos="flex-start" wid="30%">
            <p></p>
        </Line>
        <h>Alguns dos meus projetos</h>
        

        <ProjectsWrap>
            <Project>
                <p>Web site</p>
                <img src={projeto0} alt="" />
                <div>Web site em react com dark mode</div>
            </Project>
            <Project>
                <p>Web site</p>
                <img src={projeto1} alt="" />
                <div>Web site com apenas html e css</div>
            </Project>
            <Project>
                <p>Portfólio</p>
                <img src={projeto2} alt="" />
                <div>Portfólio com react</div>
            </Project>
            

        </ProjectsWrap>

        <Line pos="flex-end" wid="30%">
            <p></p>
        </Line>


    </Container>
  )
}

export default Projects
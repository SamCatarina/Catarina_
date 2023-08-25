import { Column, ColumnSkills, ColumnTitle, Container, Skill } from "./Skills.style"
import {BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoBootstrap, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoJava,BiLogoFigma, BiLogoPython, BiLogoGit} from 'react-icons/bi'
import {DiDotnet, DiMysql, DiSqllite, DiLinux} from 'react-icons/di'

function Skills() {
    return (
        <Container>

            <Column>
                <ColumnTitle>
                    <div>FRONT-END</div>
                    <p></p>
                </ColumnTitle>
                <ColumnSkills>
                    <Skill>
                        <BiLogoHtml5 />
                        <h>HTML</h>
                    </Skill>
                    <Skill>
                        <BiLogoCss3 />
                        <h>CSS</h>
                    </Skill>
                    <Skill>
                        < BiLogoJavascript/>
                        <h>Javascript</h>
                    </Skill>                    
                    <Skill>
                        < BiLogoReact/>
                        <h>React</h>
                    </Skill>
                    <Skill>
                        < BiLogoBootstrap/>
                        <h>Bootstrap</h>
                    </Skill>


                </ColumnSkills>

            </Column>

            <p></p>
            <Column>
                <ColumnTitle>
                    <div>BACK-END</div>
                    <p></p>
                </ColumnTitle>
                <ColumnSkills>
                <Skill>
                    <BiLogoNodejs/>
                    <h>Node</h>
                </Skill>
                <Skill>
                    <DiDotnet/>
                    <h>.NET</h>
                </Skill>
                <Skill>
                    <BiLogoMongodb/>
                    <h>MongoDB</h>
                </Skill>
                <Skill>
                    <DiMysql/>
                    <h>MySQL</h>
                </Skill>
                <Skill>
                    <DiSqllite/>
                    <h>Sqlite</h>
                </Skill>
                    

                </ColumnSkills>
            </Column>
            <p></p>

            <Column>
                <ColumnTitle>
                    <div>OUTROS</div>
                    <p></p>
                </ColumnTitle>
                <ColumnSkills>
                <Skill>
                    <BiLogoJava/>
                    <h>Java</h>
                </Skill>

                <Skill>
                    <BiLogoPython/>
                    <h>Python</h>
                </Skill>
                
                <Skill>
                    <BiLogoFigma/>
                    <h>Figma</h>
                </Skill>
                <Skill>
                    <DiLinux/>
                    <h>Linux</h>
                </Skill>
                <Skill>
                    <BiLogoGit/>
                    <h>Git e Github</h>
                </Skill>
                  


                </ColumnSkills>
            </Column>
        </Container>
    )
}

export default Skills
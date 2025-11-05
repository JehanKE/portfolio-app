import { Chip } from '@mui/material';
import './index.scss';
import CareerTimeline from '../CareerTimeline';

const AboutMeContent = () => {

    const skilList = ["React", "JavaScript", "TypeScript", "CSS", "Redux", "HTML", "Vibe Coding", "Styled Components", "Cypress Automation", "SQL", "Kafka", "Playwright Automation",  "Java",  "MongoDb", "REST API", "Agile Workflow",  "Jest",];

    return (
        <div className='content-container'>
            <div className='section-container'>
                <label className='section-title'>Hello</label>
                <p className='section-content'>
                    I'm Jehan Engineer (Yes, that really is my name), a passionate engineer with over 4 years of experience in web development using React JS and Spring Boot.
                    My work focuses on creating efficent, effective and visually appealing digital solutions.
                </p>
                <p className='section-content'>
                    A sneaker craze, a sports addiction and a love for technology and software make me part of a rare
                    species of outgoing geeks. 
                    Competitive, driven, hardworing and always willing to learn and always looking for the next challenge life throws at me.
                </p>
                <p className='section-content'>
                    Currently driving ideation, design, creation and testing of web applications at Lowe's as a full stack developer.
                </p>
                <p className='section-content'>
                    <CareerTimeline />
                </p>
            </div>
            <hr/>
            <div className='section-container'>
                <label className='section-title'>My Skills</label>
                <div className='skills-container'>
                    <img 
                        src="https://media.giphy.com/media/WFZvB7VIXBgiz3oDXE/giphy.gif"
                        alt="Laptop GIF not found"
                        className='laptop-gif'
                    />
                    <p className='section-content'>
                        {skilList.map((skill, index) => (
                            <Chip key={index} label={skill} color="primary" variant="outlined" sx={{ margin: "0.5rem"}}/>
                        ))}
                    </p>
                </div>
            </div>
            <hr/>
            <div className='section-container'>
                <label className='section-title'>Recognitions</label>
                <div className='recognition-container'>
                    <p className='section-content'>
                        <ul>
                            <li>Received Spot Award for individual performance and delivering results</li>
                            <li>Received Team Excellence Award for contribution stellar contribution towards team</li>
                        </ul>
                    </p>
                    <img 
                        src="https://media.giphy.com/media/3Ns7vXMfODmS45kg2s/giphy.gif"
                        alt="Trophy GIF not found"
                        className='trophy-gif'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMeContent;

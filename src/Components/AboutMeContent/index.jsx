import './index.scss';

const AboutMeContent = () => {
    return (
        <div className='content-container'>
            <div className='section-container'>
                <label className='section-title'>Hello</label>
                <p className='section-content'>
                    I'm a web developer with over 2 years of experience in React JS and Spring Boot.
                    I'm currently working at Lowe's Services India Pvt Ltd.
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
                    Proficient in React JS, JavaScript, TypeScript, CSS, Redux, HTML, Jest, Cypress, 
                    SQL, RESTful APIs, Agile workflow.
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
            <hr/>
            <div className='section-container'>
                <label className='section-title'>About Me</label>
                <p className='section-content'>
                    A sneaker craze, a sports addiction and a love for technology and software make me part of a rare
                    breed of outgoing geeks. 
                    Competitive, driven, hardworing and always willing to learn.
                    Looking for the next challenge life throws at me.
                </p>
            </div>
        </div>
    )
}

export default AboutMeContent;

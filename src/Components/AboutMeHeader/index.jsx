import Cloud from '../../Resources/Images/cloud.png';
import Mountain from '../../Resources/Images/mountain.png';
import Fade from 'react-reveal/Fade';
import './index.scss';

const AboutMeHeader = () => {
    return (
        <div className='header-container'>
            <Fade right>
                <img src={Cloud} alt='Cloud not found' className='top-cloud'/>
            </Fade>
            <h1 className='header-introduction'>I'm Jehan</h1>
            <h2 className='header-role'>Web Developer</h2>
            <Fade left>
                <img src={Cloud} alt='Cloud not found' className='bottom-cloud'/><br/>
            </Fade>
            <img src={Mountain} alt='Mountain not found' className='mountain'/>
        </div>
    )
}

export default AboutMeHeader;

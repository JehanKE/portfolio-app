import Cloud from '../../Resources/Images/cloud.png';
import Mountain from '../../Resources/Images/mountain.png';
import './index.scss';

const AboutMeHeader = () => {
    return (
        <div className='header-container'>
            <img src={Cloud} alt='Cloud not found' className='top-cloud'/>
            <h1 className='header-introduction'>I'm Jehan</h1>
            <h2 className='header-role'>Web Developer</h2>
            <img src={Cloud} alt='Cloud not found' className='bottom-cloud'/>
            <img src={Mountain} alt='Mountain not found' className='mountain'/>
        </div>
    )
}

export default AboutMeHeader;

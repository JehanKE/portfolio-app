import AboutMeContent from "../../Components/AboutMeContent";
import AboutMeFooter from "../../Components/AboutMeFooter";
import AboutMeHeader from "../../Components/AboutMeHeader";
import './index.scss';

const AboutMePage = () => {
    return (
        <div className="about-page-container">
            <AboutMeHeader />
            <AboutMeContent />
            <AboutMeFooter />
        </div>
    )
}

export default AboutMePage;

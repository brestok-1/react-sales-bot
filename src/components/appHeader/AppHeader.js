
import Tutorial from "../../Tutorial";
import "./AppHeader.css";
import Promotion from "./Promotion";

function AppHeader() {
    return (
        <header className="app_header">
            <div className="header_components">
                <img 
                    src={`${process.env.PUBLIC_URL}/pitchlab.png`} 
                    className="logo" 
                    alt="Company_Logo" 
                />
                <div className="l_tabs">
                <button 
                    className="tutorial_btn" 
                    data-bs-toggle="modal" 
                    data-bs-target="#tutorialModal"
                >
                    Tutorial
                </button>
                <Tutorial />
                <a  
                    href="https://calendly.com/pitch-lab/brainstorming-call" 
                    className="call_link"
                >
                    Book a Call
                </a>
                </div>
                <div className="r_tabs">
                <button 
                    className="pronotion_btn" 
                    data-bs-toggle="modal" 
                    data-bs-target="#promotionModal"
                >
                    Promotion
                </button>
                <Promotion/>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;

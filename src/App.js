import Main from "./components/callBlock/Main";
import ChatHistoryBlock from "./components/chatHistory/chatHistoryBlock";
import ChatSettingsBlock from "./components/chatSettings/chatSettingsBlock";
import './App.css'
import {useState} from "react";
import Feedback from "./Feedback";
import AppHeader from "./components/appHeader/AppHeader";
import Tutorial from "./Tutorial";

function App() {

    const [dialogue, setDialogue] = useState([])

    const [goal, setGoal] = useState(null);
    const [reason, setReason] = useState(null);
    const [productDetail, setProductDetail] = useState(null);
    const [companyDescription, setCompanyDescription] = useState(null);

    const [profileAge, setProfileAge] = useState('18-25');
    const [profileGender, setProfileGender] = useState('Male');
    const [profileIncomeBracket, setProfileIncomeBracket] = useState('Low');
    const [profileOccupation, setProfileOccupation] = useState('CEO');
    const [profileIndustry, setProfileIndustry] = useState('Real estate');
    const [profileCompany, setProfileCompany] = useState(null)
    const [profileLocation, setProfileLocation] = useState('California, USA');
    const [profileInterests, setProfileInterests] = useState(null);
    const [profileGoals, setProfileGoals] = useState(null)
    const [profileAdditionalInformation, setProfileAdditionalInformation] = useState(null)


    function updateDialogue(type, content) {
        setDialogue(dialogue => [...dialogue, {type: type, content: content}]);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <button className="btn btn-primary w-100 d-block tutorial-button" data-bs-toggle="modal"
                data-bs-target="#tutorialModal">Tutorial
                </button>
                <Tutorial/>
                <AppHeader/>
                <ChatHistoryBlock dialogue={dialogue}/>
                <Main onAddNewMessage={updateDialogue}
                      dialogue={dialogue}
                      clearDialogue={() => {
                          setDialogue([])
                      }}

                      goal={goal}
                      reason={reason}
                      productDetail={productDetail}
                      companyDescription={companyDescription}

                      profileAge={profileAge}
                      profileGender={profileGender}
                      profileIncomeBracket={profileIncomeBracket}
                      profileOccupation={profileOccupation}
                      profileIndustry={profileIndustry}
                      profileCompany={profileCompany}
                      profileLocation={profileLocation}
                      profileInterests={profileInterests}
                      profileGoals={profileGoals}
                      profileAdditionalInformation={profileAdditionalInformation}
                />

                <ChatSettingsBlock
                    onSetGoal={(goal) => setGoal(goal)}
                    onSetReason={(reason) => setReason(reason)}
                    onSetProductDetail={(product) => setProductDetail(product)}
                    onSetCompanyDescription={(description) => setCompanyDescription(description)}

                    onSetAge={(age) => setProfileAge(age)}
                    onSetGender={(gender) => setProfileGender(gender)}
                    onSetIncomeBracket={(bracket) => setProfileIncomeBracket(bracket)}
                    onSetOccupation={(occupation) => setProfileOccupation(occupation)}
                    onSetIndustry={(industry) => setProfileIndustry(industry)}
                    onSetCompany={(company) => setProfileCompany(company)}
                    onSetLocation={(location) => setProfileLocation(location)}
                    onSetInterests={(interests) => setProfileInterests(interests)}
                    onSetGoals={(goals) => setProfileGoals(goals)}
                    onSetAdditionalInfo={(additionalInformation) => setProfileAdditionalInformation(additionalInformation)}
                />
            </div>
            <button className="btn btn-primary w-100 d-block feedback-button" data-bs-toggle="modal"
                    data-bs-target="#feedBackModal">Feedback
            </button>
            <Feedback/>
        </div>
    );
}

export default App;
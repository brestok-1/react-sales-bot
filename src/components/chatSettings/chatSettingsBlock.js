import './chatSettingsBlock.css'
import Select from "react-select";
import {useState} from "react";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated()

function ChatSettingsBlock(props) {
    const ageOptions = [
        {value: '18-25', label: '18-25'},
        {value: '26-35', label: '26-35'},
        {value: '36-45', label: '35-46'},
        {value: '46-60', label: '46-60'},
        {value: '61-75', label: '61-75'},
        {value: '76-90', label: '76-90'},
    ];

    const genderOptions = [
        {value: 'Male', label: 'Male'},
        {value: 'Female', label: 'Female'},
    ];

    const incomeBracketOptions = [
        {value: 'Low', label: 'Low'},
        {value: 'Middle', label: 'Middle'},
        {value: 'High', label: 'High'},
    ];

    const handleSelectChange = (selectedOptions, setState) => {
        const selectedValues = selectedOptions.map(option => option.value).join(', ');
        setState(selectedValues);
        console.log(selectedValues)
    };
    return (
        <div className="col-md-3 px-4 order-sm-1 order-md-3">

            {/*Modal*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Prospect profile</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-4">

                            <label htmlFor="age" className="form-label fs-5">Age</label>
                            <Select
                                isMulti
                                isSearchable={false}
                                closeMenuOnSelect={false}
                                name="age"
                                options={ageOptions}
                                defaultValue={[ageOptions[0]]}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={(selectedOptions) => handleSelectChange(selectedOptions, props.onSetAge)}
                            />

                            <label htmlFor="gender" className="form-label fs-5 mt-2">Gender</label>
                            <Select
                                isMulti
                                isSearchable={false}
                                closeMenuOnSelect={false}
                                name="gender"
                                options={genderOptions}
                                defaultValue={[genderOptions[0]]}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={(selectedOptions) => handleSelectChange(selectedOptions, props.onSetGender)}
                            />

                            <label htmlFor="incomeBracket" className="form-label fs-5 mt-2">Income Bracket</label>
                            <Select
                                isMulti
                                closeMenuOnSelect={false}
                                isSearchable={false}
                                name="incomeBracket"
                                options={incomeBracketOptions}
                                defaultValue={[incomeBracketOptions[0]]}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={(selectedOptions) => handleSelectChange(selectedOptions, props.onSetIncomeBracket)}
                            />

                            <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5 mt-2"}>Occupation
                            </label>
                            <input className="form-control" type="text"
                                   placeholder="CEO, CFO, CMO, Sales representative, Real Estate agent"
                                   aria-label="" onChange={(event) => {
                                props.onSetOccupation(event.target.value)
                            }}/>

                            <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5 mt-2"}>Industry
                            </label>
                            <input className="form-control" type="text"
                                   placeholder="Real estate, Technology, Health & Fitness"
                                   aria-label="" onChange={(event) => {
                                props.onSetIndustry(event.target.value)
                            }}/>

                            <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5 mt-2"}>Company
                            </label>
                            <input className="form-control" type="text"
                                   placeholder="Lawn Care, HVAC, Roofing"
                                   aria-label="" onChange={(event) => {
                                props.onSetCompany(event.target.value)
                            }}/>

                            <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5 mt-2"}>Location
                            </label>
                            <input className="form-control" type="text"
                                   placeholder="Country, State/Province, City"
                                   aria-label="" onChange={(event) => {
                                props.onSetLocation(event.target.value)
                            }}/>

                            <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5 mt-2"}>Interests
                            </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                      placeholder={"Interesting facts about the prospect"} rows="2"
                                      onChange={(event) => {
                                          props.onSetInterests(event.target.value)
                                      }}></textarea>

                            <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5 mt-2"}>Goals
                            </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                      placeholder={"Goals for life/career of the prospect"} rows="2"
                                      onChange={(event) => {
                                          props.onSetGoals(event.target.value)
                                      }}></textarea>

                            <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5 mt-2"}>Additional
                                Information
                            </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                      placeholder={"Additional information about the prospect"} rows="2"
                                      onChange={(event) => {
                                          props.onSetAdditionalInfo(event.target.value)
                                      }}></textarea>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary w-100 d-block" data-bs-dismiss="modal">Save
                                changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="chat-settings">
                <div className="fs-3 text-center mt-3">
                    Chat Settings
                </div>
                <div className="chat-settings-block px-3 mt-4">
                    <div className="mt-3 settings-card">
                        <div className="form-label fs-5">Prospect Profile</div>
                        <button className="btn btn-outline-secondary w-100 d-block" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Set up profile
                        </button>
                    </div>

                    <div className="mt-3 settings-card">
                        <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5"}>Product
                            Details
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='A coding masterclass with over 10 hours of content'
                                  onChange={(event) => {
                                      props.onSetProductDetail(event.target.value)
                                  }}></textarea>
                    </div>

                    <div className="mt-3 settings-card">
                        <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5"}>Company Description
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='A real estate mentorship program'
                                  onChange={(event) => {
                                      props.onSetCompanyDescription(event.target.value)
                                  }}></textarea>
                    </div>

                    <div className="mt-3 settings-card">
                        <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5"}>Goal on the Call
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Persuade a client to buy a property"
                               aria-label="" onChange={(event) => {
                            props.onSetGoal(event.target.value)
                        }}></textarea>
                    </div>

                    <div className={'settings-card mt-3'}>
                        <label htmlFor="exampleFormControlTextarea1" className={"form-label fs-5"}>Reason for Contacting
                            the Prospect
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Prospect received a note from us'
                                  onChange={(event) => {
                                      props.onSetReason(event.target.value)
                                  }}></textarea>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChatSettingsBlock
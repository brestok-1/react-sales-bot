import "./AppHeader.css";

function AppHeader() {
    return (
        <header className="app_header">
            <div className="header_components d-flex justify-content-between">
                <img
                    src={`${process.env.PUBLIC_URL}/pitchlab.png`}
                    className="logo"
                    alt="Company_Logo"
                />
                <div className={"promotion text-center"}>Note: $5 to the first 100 users to give us feedback on our software ❤️
                    <br/>
                    Lifetime access to the software for the first 25 people to get on a Zoom.
                </div>
                <div className="">
                    <a
                        href="https://calendly.com/pitch-lab/brainstorming-call"
                        className="btn btn-primary"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;

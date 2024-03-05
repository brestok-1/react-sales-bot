import ReactMarkdown from "react-markdown";

function GPTReport(props) {

    return (
        <div className={'gpt-report px-4 mt-4'}>
            {props.isLoading &&
                <div className="report-loader">
                    <div className="report-inner report-one"></div>
                    <div className="report-inner report-two"></div>
                    <div className="report-inner report-three"></div>
                </div>
            }
            <ReactMarkdown children={props.report}/>
        </div>
    )
}

export default GPTReport
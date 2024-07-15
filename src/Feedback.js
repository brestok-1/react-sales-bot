function Feedback() {
    return (
        <div className="modal fade" id="feedBackModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Feedback</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="iframe-container">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfdaUzWBNNd_LM7bVTH8UVc3aDHtwsJyE056ZPJHC91yLTdDA/viewform?embedded=true"
                                className="responsive-iframe"
                                >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
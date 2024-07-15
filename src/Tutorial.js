function Tutorial() {
    return (
        <div className="modal fade" id="tutorialModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Tutorial</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="iframe-container">
                            Coming soon...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorial
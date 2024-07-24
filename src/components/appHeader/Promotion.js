function Promotion() {
    return (
        <div className="modal fade" id="promotionModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Promotion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Note: $5 to the first 100 users to give us feedback on our software ❤️
                        Lifetime access to the software for the first 25 people to get on a Zoom
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion
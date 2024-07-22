function Promotion() {
    return (
        <div class="modal fade" id="promotionModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
        aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Promotion</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Note: $5 to the first 100 users to give us feedback on our software ❤️
                        Lifetime access to the software for the first 25 people to get on a Zoom
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion
function AddNews() {
    return (
        <div className="container">
            <br></br><br></br>
            <a href="/" className="btn btn-light border border-dark form-control">Back to Home</a><p></p>
            <form>
                <div class="card">
                    <div class="card-header bg-danger text-white" align="center">
                        <b>Add News</b>
                    </div>
                    <div className="card-body">
                        <input type="text" placeholder="Heading" className="form-control"></input><p></p>
                        <textarea rows="4" cols="50" className="form-control" placeholder="News here">

                        </textarea><p></p>
                        <input type="text" placeholder="Author" className="form-control"></input><p></p>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <button type="Submit" className="btn btn-outline-success form-control">Submit</button>
                            </div>
                            <div className="col-md-6">
                                <button type="reset" className="btn btn-outline-warning form-control">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddNews;
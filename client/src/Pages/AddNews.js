import { useState } from 'react';
import Axios from "axios";
import $ from 'jquery';
function AddNews() {
    const [heading, setHeading] = useState("");
    const [news, setNews] = useState("");
    const [author, setAuthor] = useState("");
    const submitNews = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/addNews", {
            heading: heading,
            news: news,
            author:author
        }).then((response) => {
            console.log(response.data);
            var htmlText;
            if(response.data["result"]==true){
                htmlText=`<div class="alert alert-success">${"Added Successfully"}</div>`;
            }else{
                htmlText=`<div class="alert alert-danger">${"Added Successfully"}</div>`;
            }
            $("#alertBox").append(htmlText);
            $('#submission').trigger("reset");
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                $(".alert").trigger('close');
            });
        })
    }
    return (
        <div className="container">
            <br></br><br></br>
            <a href="/" className="btn btn-light border border-dark form-control">Back to Home</a><p></p>
            <div id="alertBox"></div>
            <form id="submission">
                <div className="card">
                    <div className="card-header bg-danger text-white" align="center">
                        <b>Add News</b>
                    </div>
                    <div className="card-body ">
                        <input type="text" onChange={(e) => { setHeading(e.target.value) }} placeholder="Heading" className="form-control"></input><p></p>
                        <textarea rows="4" onChange={(e) => { setNews(e.target.value) }} cols="50" className="form-control" placeholder="News here">

                        </textarea><p></p>
                        <input type="text" onChange={(e) => { setAuthor(e.target.value) }} placeholder="Author" className="form-control"></input><p></p>
                    </div>
                    <div className="card-footer ">
                        <div className="row">
                            <div className="col-md-6">
                                <button type="Submit" onClick={submitNews} className="btn btn-outline-success form-control">Submit</button>
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
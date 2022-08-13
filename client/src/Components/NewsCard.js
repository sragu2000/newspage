import React from "react";

function NewsCard(props) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header bg-warning">
        <b>{props.heading}</b>
        </div>
        <div className="card-body">
          <p>
            <a className="btn btn-light form-control border border-dark" data-bs-toggle="collapse" href={"#id"+props.newsid} role="button" aria-expanded="false" aria-controls={"id"+props.newsid}>
              Read more...
            </a>
          </p>
          <div className="collapse" id={"id"+props.newsid}>
            <div className="card card-body">{props.news}</div>
          </div>
        </div>
        <div className="card-footer">
        <i className="fa-regular fa-pen-to-square"></i>&nbsp;&nbsp;<i>{props.author}</i>
        </div>
      </div>
      <br></br>
    </React.Fragment>
  );
}
export default NewsCard;
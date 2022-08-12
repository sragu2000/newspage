function NewsCard(props){
    return(
      <div className="card">
        <div className="card-header bg-dark text-white">
            {props.heading}
        </div>
        <div className="card-body">
            {props.news}
        </div>
        <div className="card-footer">
            <a href={props.url} className="btn btn-outline-dark form-control">Read More</a>
        </div>
      </div>
    );
}
export default NewsCard;
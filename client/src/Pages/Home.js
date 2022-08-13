import NewsCard from "../Components/NewsCard";
import React, { useEffect, useState } from 'react';
import NavBarUser from "../Components/NavBarUser";

function Home() {
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/showNews")
            .then(response => response.json())
            .then((jsonData) => {
                setNewsData(jsonData);
            })
            .catch((error) => { console.error(error) })
    }, []);
    // console.log(newsData);
    return (
        <React.Fragment>
            <NavBarUser></NavBarUser>
            <div className="container">
                <br></br><br></br>
                {
                    newsData.map((val) => {
                        return (
                            <NewsCard
                                heading={val.heading}
                                news={val.newsBody}
                                author={val.author}
                                newsid={val.id}
                                key={val.id}
                            >
                            </NewsCard>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}
//showNews

export default Home;
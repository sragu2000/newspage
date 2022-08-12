import NewsCard from "../Components/NewsCard";

function Home(){
    return(
        <div className="container">
            <br></br><br></br>
            <NewsCard 
                heading="Hello" 
                news="Hiiiiiiiiii" 
                url="Raguraj"
            >
            </NewsCard>
        </div>
    );
}
export default Home;
import React,{useState,useEffect} from "react";
import Data from "./Data";
import Articles from "./Articles";
import Latest from "./Latest";
import "./Style.css";
import Title from "./Title";
import apiData from "./API";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Fetching = async () => {
      setData(await apiData());
    };
    Fetching();
  }, [data]);
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="head">
        <div className="leftimg">
          <h1>The Outer Space</h1>
          <p>23 Sep 2022</p>
        </div>
        <div className="rightimg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </div>
      </div>
      <Title title="Latest Articles" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.Category === "Bollywood").map((data) => (
            <Articles
              key={data.id}
              title={data.Title}
              img={data.image}
              pera={data.Description}
              category={data.Category}
              date={data.Date}
            />
          ))}

          
        </div>
        <div className="leftArticle">
         
          <Title title="Top Posts" />
          <div>
            {/* <Latest /> */}
            <Latest
              key={Data[0].id}
              title={Data[0].Title}
              img={Data[0].image}
              category={Data[0].Category}
              date={Data[0].Date}
            />{" "}
            <Articles
              key={Data[0].id}
              title={Data[0].Title}
              img={Data[0].image}
              category={Data[0].Category}
              date={Data[0].Date}
            />{" "}
            <Articles
              key={Data[7].id}
              title={Data[7].Title}
              img={Data[8].image}
              category={Data[7].Category}
              date={Data[7].Date}
            />{" "}
            <Articles
              key={Data[14].id}
              title={Data[14].Title}
              img={Data[14].image}
              category={Data[14].Category}
              date={Data[14].Date}
            />{" "}
            <Articles
              key={Data[20].id}
              title={Data[20].Title}
              img={Data[20].image}
              category={Data[20].Category}
              date={Data[20].Date}
            />{" "}
          </div>
          <div className="advertisement">Advertisement</div>
        </div>
      </div>
      </div>
  );
};

export default Home;
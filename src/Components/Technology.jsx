import React,{useState,useEffect} from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import "./Style.css";
import apiData from "./API";

const Technology = () => {
  // const { id, title, Description, category, Date } = Data;
  const [data, setData] = useState([]);

  useEffect(() => {
    const Fetching = async () => {
      setData(await apiData());
    };
    Fetching();
  }, [data]);
  return (
    <div>
      <Title title="Technology" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.Category === "Technology").map((data) => (
            <Articles
              index={data.id}
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
      
            {Data.filter((data) => data.Category === "Technology").map(
              (data) => (
                <Articles
                index={data.id}
              title={data.Title}
              img={data.image}
        
              category={data.Category}
              date={data.Date}
                />
              )
            )}
            {/* <Articles />
            <Articles />
            <Articles /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
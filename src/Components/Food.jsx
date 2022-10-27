import React,{useState,useEffect} from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import Latest from "./Latest";
import "./Style.css";
import apiData from "./API";

const Food = () => {
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
      <Title title="Food" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.Category === "Food").map((data) => (
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
            <Latest />
            {Data.filter((data) => data.Category === "Food").map(
              (data) => (
                <Articles
                  key={data.id}
                  title={data.Title}
                  img={data.image}
                  // pera={data.Description}
                  date={data.Date.slice(0,15)}
                
                  category={data.Category}
                
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

export default Food;
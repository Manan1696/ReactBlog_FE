import Data from "./Data";
import React,{useState,useEffect} from "react";
import Articles from "./Articles";
import Title from "./Title";
import Latest from "./Latest";
import "./Style.css";
import apiData from "./API";

const Bollywood = () => {
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
      <Title title="Bollywood" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.Category === "Bollywood").map((data) => (
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
          <Latest
              key={Data[15].id}
              title={Data[15].Title}
              img={Data[15].image}
              category={Data[15].Category}
              date={Data[15].Date}
            />{" "}
            {Data.filter((data) => data.Category === "Bollywood").map(
              (data) => (
                <Articles
                  key={data.id}
                  title={data.Title}
                  img={data.image}
                  // pera={data.Description}
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

export default Bollywood;
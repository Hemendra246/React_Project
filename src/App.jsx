import React from "react";
import Card from "./Card";
import NsData from "./NetflixData";
import Header from "./Header";
function App() {
  return (
    <>
      <Header />
      {NsData.map((item) => (
        <Card
          key={item.id}
          item={item}
          // imgsrc={item.imgsrc}
          // title={item.title}
          // sname={item.sname}
          // link={item.link}
        />
      ))}
    </>
  );
}
export default App;

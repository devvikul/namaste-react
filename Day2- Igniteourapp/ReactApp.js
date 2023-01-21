import React from "react";
import ReactDOM from "react-dom";
// const heading = React.createElement("h1",{},"JavaScript is dope")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// const heading1 = React.createElement(
//   "h2",
//   {
//     id: "newh2",
//     key: "1",
//     style: { color: "green", fontSize: "30px" },
//   },
//   "I am h2"
// );
// const heading2 = React.createElement(
//   "h3",
//   {
//     id: "newh3",
//     style: { color: "red", fontSize: "20px" },
//   },
//   "I am h5"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, heading2]
// );

// const ReactApp = () =>{
//   return(
//     <div className="container">
//       <h1>Namaste React class</h1>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<ReactApp/>);

const Header = () => {
  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="search"></input>
      </div>  
      <div className="user-icon">
        <h1> Hii</h1>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
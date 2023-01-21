const heading = React.createElement("h1", { id: "title" }, "Namaste React");
const subHeading = React.createElement("h1", { id: "sub_heading" }, "Yeah it's working");
const container = React.createElement("div", { id: "container" }, [
  heading,
  subHeading,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
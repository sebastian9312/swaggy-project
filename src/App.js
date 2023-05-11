// import "./categories.styles.scss"

const App = () => {

  const categories = [
    {
      id: 1,
      title: "HATS"
    },
    {
      id: 2,
      title: "JACKETS"
    },
    {
      id: 3,
      title: "SNICKERS"
    },
    {
      id: 4,
      title: "WOMANS"
    },
    {
      id: 5,
      title: "MANS"
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => {
        return (
          <div className="category-container" key={id}>
            {/* <img /> */}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>SHOP NOW</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;

import FilterCards from "./FilterCards";

const Filters = ({ image, setMainFilter }) => {
  const handleClick = () => {
    filtersTabOpen ? setFiltersTabOpen(false) : setFiltersTabOpen(true);
  };
  return (
    <div>
      FILTERS
      <i
        className="fas fa-sliders-h text-gray-500 text-4xl"
        onClick={handleClick}
      ></i>
      <FilterCards image={image} setMainFilter={setMainFilter} />
    </div>
  );
};

export default Filters;

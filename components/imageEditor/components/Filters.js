import FilterCards from "./FilterCards";

const Filters = ({
  image,
  setMainFilter,
  filtersTabOpen,
  setFiltersTabOpen,
  setBrightness,
  setContrast,
  setSaturation,
}) => {
  const handleClick = () => {
    filtersTabOpen ? setFiltersTabOpen(false) : setFiltersTabOpen(true);
  };
  return (
    <div>
      <i
        className="fas fa-sliders-h text-gray-500 text-4xl"
        onClick={handleClick}
      ></i>
      <FilterCards
        image={image}
        filtersTabOpen={filtersTabOpen}
        setMainFilter={setMainFilter}
        setBrightness={setBrightness}
        setSaturation={setSaturation}
        setContrast={setContrast}
      />
    </div>
  );
};

export default Filters;

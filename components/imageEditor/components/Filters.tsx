import FilterList from "./FilterList";

const Filters = ({
  image,
  filtersOpen,
  setMainFilter,
  mainFilter,
  captionsOpen,
  setFiltersOpen,
  setCaptionsOpen,
}) => {
  const handleClick = () => {
    setFiltersOpen(false);
    setCaptionsOpen(true);
    console.log("captionsOpen", captionsOpen);
  };
  return (
    <>
      {filtersOpen && (
        <div
          className={
            !filtersOpen
              ? "w-0 bg-plain-white mt-[90px] h-[100%]"
              : "filtersOpen bg-plain-white mt-[90px] h-[500px] -ml-5"
          }
        >
          {" "}
          <div className="flex justify-end">
            <h1
              onClick={handleClick}
              className="cursor-pointer font-bold text-link-blue right-10 p-3"
            >
              Next
            </h1>
          </div>
          <FilterList
            image={image}
            setMainFilter={setMainFilter}
            mainFilter={mainFilter}
          />
        </div>
      )}
    </>
  );
};

export default Filters;

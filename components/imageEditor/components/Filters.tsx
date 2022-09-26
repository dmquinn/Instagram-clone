import FilterList from "./FilterList";

const Filters = ({ image, filtersOpen, setMainFilter, mainFilter }) => {
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

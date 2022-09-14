import ToolOptions from "./ToolOptions";

const Tools = ({
  image,
  setToolsTabOpen,
  toolsTabOpen,
  setContrast,
  setBrightness,
  setSaturation,
}) => {
  const handleClick = () => {
    toolsTabOpen ? setToolsTabOpen(false) : setToolsTabOpen(true);
  };
  return (
    <div>
      <i
        className="fas fa-cogs text-gray-500 text-4xl"
        onClick={handleClick}
      ></i>{" "}
      <ToolOptions
        toolsTabOpen={toolsTabOpen}
        setContrast={setContrast}
        setBrightness={setBrightness}
        setSaturation={setSaturation}
      />
    </div>
  );
};

export default Tools;

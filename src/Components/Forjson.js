import { useContext } from "react";
import { AppContext } from "../App";

const Forjson = () => {
  const { setJsonObj } = useContext(AppContext);
  const handleJson = (e) => {
    setJsonObj(e.target.value);
  };

  const placeValue = `{ "key" : Value }`;

  return (
    <section className="mx-40 font-Custom pt-10 space-y-4 ">
      <h3 className="text-2xl font-semibold">Enter a Valid Json</h3>
      <textarea
        onChange={handleJson}
        className="border-2 border-black w-full p-1 text-lg"
        type="text"
        placeholder={placeValue}
      />
    </section>
  );
};

export default Forjson;

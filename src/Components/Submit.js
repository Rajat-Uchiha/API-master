import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
const Submit = () => {
  const { url, requestValue, jsonObj, setResponse } = useContext(AppContext);

  const handleSubmit = async () => {
    setResponse("Working on your request.....");
    if (requestValue === "get") {
      try {
        const res = await axios.get(url);
        const data = res.data;
        setResponse(data);
      } catch (error) {
        setResponse("Some error occured in your" + requestValue + "request");
      }
    } else {
      try {
        const res = await axios.post(url, JSON.parse(jsonObj));
        const data = res.data;
        setResponse(data);
      } catch (error) {
        setResponse("Some error occured in your" + requestValue + "request");
      }
    }
  };

  return (
    <div className="mx-40 my-8">
      <button
        disabled={url.length === 0}
        onClick={handleSubmit}
        className="border-2 border-black px-6 py-2 font-Custom cursor-pointer text-center text-xl bg-black text-white hover:scale-110 transition-all "
      >
        Submit
      </button>
    </div>
  );
};

export default Submit;

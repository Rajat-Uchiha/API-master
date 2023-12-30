import { useContext } from "react";
import { AppContext } from "../App";
const Hero = () => {
  const { setUrl, requestValue, setRequestValue } = useContext(AppContext);

  const handleRequestType = (event) => {
    setRequestValue(event.target.value);
  };

  return (
    <section className="mx-40 font-Custom pt-10">
      <div className="space-y-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Enter a Valid URL</h3>
          <input
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            className="border-2 border-black w-full p-1 text-lg"
            type="text"
            placeholder="https://example.com"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Request Type</h3>
          <div className="flex flex-col justify-start items-start space-y-4">
            <div className="space-x-4 flex justify-center items-center">
              <input
                value="get"
                type="radio"
                checked={requestValue === "get"}
                name="requestType"
                onChange={handleRequestType}
              />
              <label className="text-lg font-semibold" htmlFor="">
                GET
              </label>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <input
                value="post"
                type="radio"
                checked={requestValue === "post"}
                name="requestType"
                onChange={handleRequestType}
              />
              <label className="text-lg font-semibold" htmlFor="">
                POST
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Content Type</h3>
          <div className="flex flex-col justify-start items-start space-y-4">
            <div className="space-x-4 flex justify-center items-center">
              <input
                value="json"
                type="radio"
                checked={true}
                name="contentType"
              />
              <label className="text-lg font-semibold" htmlFor="">
                JSON
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

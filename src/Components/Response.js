import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useContext } from "react";
import { AppContext } from "../App";
const Response = () => {
  const { response } = useContext(AppContext);
  let codeString = response;
  return (
    <section className="mx-40 font-Custom">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Response</h3>
      </div>
      <SyntaxHighlighter
        className=" border-2 border-black max-h-96"
        language="javascript"
        style={twilight}
      >
        {JSON.stringify(codeString, null, 2)}
      </SyntaxHighlighter>
    </section>
  );
};

export default Response;

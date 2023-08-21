"use client";
import { getTestNotProxy, sendChatMessage } from "@/service/test";

export default function App() {
  async function getTest() {
    try {
      const result = await getTestNotProxy();
      console.log(result);
    } catch (err) {
      console.log("err===>>>", err);
    }
  }
  function postStrem() {
    sendChatMessage(
      {},
      {
        getAbortController: (abortController) => {
          // setAbortController(abortController);
        },
        onData: (message, isFirst, moreInfo) => {
          console.log("message===>>>", message);
          console.log("isFirst===>>>", isFirst);
          console.log("moreInfo===>>>", moreInfo);
        },
        async onCompleted(isFirst) {
          console.log("isFirst fun===>>>", isFirst);
        },
        onError(msg) {
          console.log("error msg===>>>", msg);
        },
      }
    );
  }
  return (
    <div className="flex flex-col">
      <button onClick={getTest}>click not proxy</button>
      <button onClick={postStrem}>click test stream</button>
    </div>
  );
}

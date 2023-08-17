"use client";
export default function Test() {
  function toApp() {
    console.log("hello world");
  }
  return (
    <div>
      <button style={{ border: "1px solid red" }} onClick={toApp}>
        click
      </button>
    </div>
  );
  //   return <div>nihaoaaa</div>;
}

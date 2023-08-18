"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function Test() {
  const pathName = usePathname();
  const router = useRouter();
  console.log("pathName===>>>", pathName);
  function toApp() {
    console.log("hello world");
  }
  return (
    <div>
      <button style={{ border: "1px solid red" }} onClick={toApp}>
        click
      </button>
      <br></br>
      <br></br>
      <Link href={"/"}>to home</Link>
      <br></br>
      <br></br>
      <button onClick={() => router.push("/")}>
        this is a programming route
      </button>
      <br></br>
      <br></br>
      <div style={{ height: "1000px" }}></div>
      <div id="hello">hello world</div>
    </div>
  );
  //   return <div>nihaoaaa</div>;
}

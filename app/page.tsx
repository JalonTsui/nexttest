"use client";
import ComList, { ComList2 } from "@/components/app/ComList";
import ComUseState from "@/components/app/ComUseState";
import AppHeader from "@/components/share/AppHeader";
import { useState } from "react";
const Hello = () => {
  return <div>hello world</div>;
};
const Box = (props: { width: string; height: string; children?: any }) => {
  return (
    <div
      style={{
        ...props,
        border: "1px solid red",
      }}
    >
      {props.children}
    </div>
  );
};
const Condition = ({ isShow }: { isShow: boolean }) => {
  if (isShow) {
    return <div>isShow</div>;
  } else {
    return <div>!isShow</div>;
  }
};

const Com1 = () => {
  return (
    <>
      <div>Com1</div>
    </>
  );
};

const Com2 = () => {
  return (
    <>
      <div>Com2</div>
    </>
  );
};

const Home = () => {
  const [moduleNow, setModuleNow] = useState("com1");
  const headerList = [
    { label: "com1", com: <Com1 /> },
    { label: "com2", com: <Com2 /> },
  ];
  const changeModuleNow = (module: { label: string }) => {
    setModuleNow(module.label);
  };
  const comModule = () => {
    return headerList.find((item) => item.label === moduleNow)?.com || <></>;
  };
  return (
    <>
      <AppHeader
        moduleNow={moduleNow}
        inClick={changeModuleNow}
        list={headerList}
      ></AppHeader>
      <div style={{ width: "100%", height: "1000px", border: "1px solid red" }}>
        {comModule()}
      </div>
      <Hello />
      <Hello />
      <Hello />
      <div style={{ color: "red" }}>nihao</div>
      <Box width={"100px"} height="100px">
        <div>nihaoa</div>
      </Box>
      <Box width={"150px"} height="200px"></Box>
      <Condition isShow={true}></Condition>
      <Condition isShow={false}></Condition>
      <ComList></ComList>
      <ComList2 />
      <ComUseState />
    </>
  );
};
export default Home;

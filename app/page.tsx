"use client";
import ComList, { ComList2 } from "@/components/app/ComList";
import ComUseState from "@/components/app/ComUseState";
import AppHeader from "@/components/share/AppHeader";
import { useState,useEffect,useRef } from "react";
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

/**
 * @method useEffect
 * 
*/

const Com1 = () => {
  const textList = ['hello world','good week']
  const [text,setText] = useState(0)
  const ref = useRef(null)
  useEffect(()=>{
    console.log('in useEffect')
    console.log('useEffect ref===>>>',ref.current)
    return ()=>console.log('return in useEffect')
  })
  console.log('normal ref===>>>',ref.current)
  return (
    <>
      <div ref={ref}>Com1</div>
      <button onClick={()=>setText(!!text ? 0 : 1)}>click</button>
      <p>{textList[text]}</p>
    </>
  );
};

const Com2 = () => {
  // const ref = useRef<null|HTMLDivElement>(null)
  useEffect(()=>{
    // const getSomething = async ()=>{
    //   try{
    //     const result = await fetch('http://127.0.0.1')
    //     console.log(result)
    //   }catch(err){
    //     console.log(err)
    //   }
    // }
    // getSomething()
  },[])
  const [isShow,setIsShow] = useState(true)
  return (
    <>
      {isShow ? <div>Com2</div> : null}
      <button onClick={()=>setIsShow(!isShow)}>click</button>
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
      {/* <ComList2 /> */}
      <ComUseState />
    </>
  );
};
export default Home;

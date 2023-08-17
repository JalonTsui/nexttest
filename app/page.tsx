import ComList, { ComList2 } from "@/components/app/ComList";
import ComUseState from "@/components/app/ComUseState";
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
const Home = () => {
  return (
    <>
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

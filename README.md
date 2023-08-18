# 1.useEffect的执行机制

```tsx
useEffect(() => {
  // 这里是副作用操作，在组件渲染和更新时执行
  
  // 返回一个清理函数
  return () => {
    // 在组件更新时的依赖变化或组件卸载时执行
    // 执行清理操作，如取消订阅、清除定时器等
  };
}, [dependency]);
```

在React中，`useEffect` 是一个用于处理副作用操作的钩子函数。副作用操作可以包括数据获取、订阅、DOM操作等。`useEffect` 的执行时机涉及到组件的渲染和更新过程。具体来说，`useEffect` 在以下情况下会被执行：

1. **组件的初始渲染（Mounting）：** 当组件首次被渲染到DOM时，`useEffect` 中的代码会被执行。这相当于类组件中的 `componentDidMount` 钩子。
2. **组件的更新（Updating）：** 每当组件状态或属性发生变化，且导致组件重新渲染时，`useEffect` 也会被执行。但是，这取决于 `useEffect` 的第二个参数数组（依赖数组）。

    - 如果没有提供依赖数组，`useEffect` 每次组件更新时都会执行。
    
    - 如果提供了依赖数组，`useEffect` 会比较前后两次渲染的依赖数组内容。如果依赖数组中的值发生了变化，`useEffect` 就会被执行。如果依赖数组为空，则 `useEffect` 只会在初始渲染时执行一次。
3. **组件卸载（Unmounting）：** 当组件从DOM中被卸载时，也会触发 `useEffect` 的执行。这时可以进行一些资源的清理工作，类似于类组件的 `componentWillUnmount` 钩子。



# 2.避免直接删除dom的操作会让react报错

错误示范：

```tsx
const Com2 = () => {
  const ref = useRef<null|HTMLDivElement>(null)
  return (
    <>
      <div ref={ref}>Com2</div>
      <button onClick={()=>ref.current && ref.current.remove()}>click</button>
    </>
  );
};
```

正确示范：

```tsx
const Com2 = () => {
  // const ref = useRef<null|HTMLDivElement>(null)
  const [isShow,setIsShow] = useState(true)
  return (
    <>
      {isShow ? <div>Com2</div> : null}
      <button onClick={()=>setIsShow(!isShow)}>click</button>
    </>
  );
};
```


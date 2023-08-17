"use client";
import { useState } from "react";

export default function ComUseState() {
  const [index, changeIndex] = useState({
    index: 0,
  });
  function add() {
    changeIndex({
      index: ++index.index,
    });
  }
  return (
    <div>
      <p>{index.index}</p>
      <button onClick={add}>click++</button>
    </div>
  );
}

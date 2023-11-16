import { useState } from "react";
import { useNavigate } from "react-router-dom";

const docs = [
  {
    name: "React",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Vite",
    url: "https://vitejs.dev/guide/",
  },
  {
    name: "Electron",
    url: "https://www.electronjs.org/docs",
  },
  {
    name: "Node",
    url: "https://nodejs.org/api/",
  },
];

export const Card = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-5">
      <h1 className="text-[24px]">Electron Vite Template</h1>

      <div className="flex w-[210px] flex-wrap items-center justify-center gap-2 text-[30px] font-bold">
        <span className="appStackCard">
          <img src="./electron.png" alt="" />
        </span>
        <span className="appStackCard">
          <img src="./vite.svg" alt="" />
        </span>
        <span className="appStackCard">
          <img src="./react.svg" alt="" />
        </span>
        <span className="appStackCard">
          <img src="./node.png" alt="" />
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <p>Hello to the Electron, Vite, React, and Node template!</p>
        <div className="flex gap-5">
          <button
            className="rounded-md border-2 bg-slate-200 p-2 focus:outline-none"
            onClick={() => setCount(prevState => prevState + 1)}
          >
            Count is: {count}
          </button>
          <button
            className="rounded-md border-2 bg-slate-200 p-2 focus:outline-none"
            onClick={() => navigate("/about")}
          >
            About Page
          </button>
        </div>
        <p>
          Edit <code className="text-blue-400">App.tsx</code> and save to test
          HMR updates.
        </p>
      </div>

      <div>
        View the docs:{" "}
        {docs.map((item, index) => (
          <>
            <a key={item.name} href={item.url} className="text-blue-400">
              {item.name}
            </a>
            {index !== docs.length - 1 ? ", " : ""}
          </>
        ))}
      </div>
    </div>
  );
};

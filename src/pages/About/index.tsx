import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-5 space-y-5">
      <h1 className="text-[24px]">About Page</h1>
      <div className="flex flex-col items-center justify-center gap-5">
        <p>This is the about page!</p>
        <div className="flex gap-5 space-y-5">
          <button
            className="rounded-md border-2 bg-slate-200 p-2 focus:outline-none"
            onClick={() => navigate("/")}
          >
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

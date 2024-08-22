import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgressBar from "./design/ProgressBar";

const App = () => {
  return (
    <>
      <div className="pt-[2rem] lg:pt-[2.25rem] px-6 lg:px-8 xl:px-20 max-lg:py-4  overflow-hidden">
        <ProgressBar />
        <Header />
        <Routes>
          <Route index element={<Hero />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

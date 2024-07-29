import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-yellow-600 mb-4">Hello Tailwind </h1>
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full"
          src="https://images.pexels.com/photos/26146560/pexels-photo-26146560/free-photo-of-people-hiking-in-the-mountains-with-trees-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure> */}
      <Cards username="Sandesh Rai" btnText="Talk to me" />
      <Cards username="Ram bahadur" btnText="Visit my website" />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import projects_data from "./assets/data.json";
import social_data from "./assets/social.json";

function App() {
  const [theme, setTheme] = useState("DARK");
  const [projects, setProjects] = useState(projects_data);
  const [socials, setSocials] = useState(social_data);

  function toggleTheme() {
    setTheme((prev) => {
      if (prev == "LIGHT") {
        document.documentElement.classList.add("dark");
        return "DARK";
      }

      document.documentElement.classList.remove("dark");
      return "LIGHT";
    });
  }

  console.log(projects);

  return (
    <>
      <div className="container mx-auto space-y-10">
        <div className="text-[50px] lg:text-[100px] font-bold text-center font-condense scale-y-150 russo-one-regular mt-10">
          ANDIKA WAHYUDI
        </div>

        <div>
          <div className="flex justify-between items-center border-y border-gray-400 dark:border-neutral-400 py-5 px-5 lg:px-0">
            <div className="hidden lg:block space-x-4">
              <a href="#andika-info" className="underline">
                INFO
              </a>
              <span>/</span>
              <a href="#andika-projects" className="underline">
                PROJECTS[6]
              </a>
              <span>/</span>
              <a
                href="/resume/Andika-Wahyudi-CV-2024.pdf"
                className="underline"
              >
                RESUME
              </a>
            </div>

            <div className="space-x-4 hidden lg:block " id="andika-info">
              <a href="mailto:andikawpb200@gmail.com" className="underline">
                andikawpb200@gmail.com
              </a>

              <span>/</span>
              <a href="#andika-contact" className="underline">
                CONTACT
              </a>

              <span>/</span>

              <button
                className="border border-gray-400 dark:border-neutral-400 px-4 py-2"
                onClick={toggleTheme}
              >
                {theme}
              </button>
            </div>

            <button
              className="block lg:hidden border border-gray-400 dark:border-neutral-400 px-4 py-2"
              onClick={toggleTheme}
            >
              MENU
            </button>

            <button
              className="block lg:hidden border border-gray-400 dark:border-neutral-400 px-4 py-2"
              onClick={toggleTheme}
            >
              {theme}
            </button>
          </div>

          <div className="grid grid-cols-2 divide-x divide-gray-400 dark:divide-neutral-400 lg:hidden border-b border-gray-400 dark:border-neutral-400">
            <div className="uppercase p-5 space-y-4">
              <p className="font-bold">Navigation</p>

              <div>
                <a href="#andika-info" className="underline">
                  INFO
                </a>
              </div>
              <div>
                <a href="#andika-projects" className="underline">
                  PROJECTS[6]
                </a>
              </div>
              <div>
                <a
                  href="/resume/Andika-Wahyudi-CV-2024.pdf"
                  className="underline"
                >
                  RESUME
                </a>
              </div>
            </div>

            <div className="uppercase p-5 space-y-4">
              <p className="font-bold">Navigation</p>

              <div>
                <a href="mailto:andikawpb200@gmail.com" className="underline">
                  EMAIL ME
                </a>
              </div>
              <div>
                <a href="#andika-contact" className="underline">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-10 xl:mx-0">
          <div>
            <img src="/me.jpg" alt="" />
          </div>
          <div className="space-y-5 uppercase">
            <p className="leading-6 text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp; I am a seasoned software engineer with 1
              years of experience in the field. Passionate about software
              engineering, I thrive on challenges encountered during the
              development process. To me, software engineering is not just a
              profession, but a vibrant passion that ignites creativity and
              innovation. Whether tackling complex algorithms or architecting
              elegant solutions, I approach each task with enthusiasm and
              dedication.
            </p>

            <p>Clients:</p>

            <p className="space-x-3">
              <a href="https://sistemparkir.com" className="underline">
                Media Kreasi Utama
              </a>
              <span>/</span>
              <a href="https://sistemparkir.com" className="underline">
                Sistem Kreasi Indonesia
              </a>{" "}
            </p>
          </div>
          <div className="space-y-5 uppercase">
            <p className="leading-6 text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp; Consistency, reliability, and client
              satisfaction define my approach to software engineering. The
              software solutions I develop are not merely good—they exceed
              expectations, offering robust functionality, seamless performance,
              and intuitive user experiences. My track record speaks for itself,
              as I continually strive to uphold the highest standards of
              excellence in every project I undertake.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#andika-projects">
            <button className="border border-gray-400 dark:border-neutral-400 px-4 py-2">
              PROJECTS
            </button>
          </a>
        </div>

        <div className="text-[50px] lg:text-[100px] font-bold text-center font-condense scale-y-150 russo-one-regular mt-10">
          PROJECTS
        </div>

        <div className="text-center font-light">Est. 2023</div>
      </div>

      <br />
      <br />

      <div
        className="border-y border-gray-400 dark:border-neutral-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-400 dark:bg-neutral-400"
        id="andika-projects"
      >
        {projects.map((e, i) => (
          <div className="p-5 space-y-5 bg-[#EAEAEA] dark:bg-[#242424]" key={i}>
            <div className="font-bold">{e.title}</div>

            <div className="border border-transparent hover:border-gray-400 dark:hover:border-neutral-400 transition-all">
              <img
                src={e.thumbnail_url}
                alt=""
                className="hover:scale-[0.97] transition-all"
              />
            </div>

            <div className="flex justify-between">
              <div className="font-bold">2024</div>
              <div>
                <a href="" className="underline">
                  Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />

      <div className="container mx-auto space-y-10">
        <div className="text-center">
          <a href="#andika-contact">
            <button className="border border-gray-400 dark:border-neutral-400 px-4 py-2">
              CONTACT
            </button>
          </a>
        </div>

        <div className="text-[50px] lg:text-[100px] font-bold text-center font-condense scale-y-150 russo-one-regular ">
          CONTACT
        </div>

        <div className="text-center font-light">Get in Touch</div>
      </div>

      <div className="block bg-[#242424] dark:bg-[#EAEAEA] text-gray-200 dark:text-gray-800 mt-10 p-10 space-y-10">
        <div className="flex justify-center">
          <div className="space-x-2">
            {socials.map((e, i) => (
              <a href={e.url} target="_blank">
                <button className="p-2 aspect-square" key={i}>
                  <img src={e.icon} alt="" width={30} height={30} />
                </button>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-center text-wrap w-[30ch]">
            Whether you have an idea for a project or just want to chat, feel
            free to shoot me an email!
          </div>
        </div>
        <div className="text-center">
          <a href="mailto:andikawpb200@gmail.com">
            <button
              className="border border-gray-400 dark:border-neutral-400 px-4 py-2"
              id="andika-contact"
            >
              SAY HELLO
            </button>
          </a>
        </div>
      </div>

      <div className="text-center p-5 text-sm">&copy; Andika Wahyudi 2024</div>
    </>
  );
}

export default App;

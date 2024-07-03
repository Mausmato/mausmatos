import Title from "../../components/title";
import WordRotate from "../../components/rotate";
import ShinyButton from "../../components/button";
import IconCloud from "../../components/tstack";
import { Link } from "react-router-dom";


import "../../style.css";

const Home: React.FC = () => {
  const titleWords = "Yo, I'm Matthew Singer 👋";
  const projectTitle = "Projects";
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "firebase",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ];

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-56 px-32 pb-0">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="relative min-h-screen scroll-pb-64">
            <div className="max-w-[730px] flex flex-col justify-center space-y-4 pt-24">
              <Title words={titleWords} />
            </div>
            <div className="md:text-xl pt-2">
              <span>
                I am a darn cool software developer that enjoys
                <WordRotate
                  className="font-bold"
                  words={[
                    "Fine Tuning LLM Models.",
                    "Web Development.",
                    "UI/UX Design.",
                    "AI (if its not better than me...)",
                    "Responsive Designs.",
                    "LAM Models.",
                    "Fine Tuning LLM Models.",
                    "Web Development.",
                    "UI/UX Design.",
                    "AI (if its not better than me...)",
                    "Responsive Designs.",
                    "LAM Models.",
                    "Fine Tuning LLM Models.",
                    "Web Development.",
                    "UI/UX Design.",
                    "AI (if its not better than me...)",
                    "Responsive Designs.",
                    "LAM Models.",
                    "Fine Tuning LLM Models.",
                    "Web Development.",
                    "UI/UX Design.",
                    "AI (if its not better than me...)",
                    "Responsive Designs.",
                    "LAM Models.",
                    "Fine Tuning LLM Models.",
                    "Web Development.",
                    "UI/UX Design.",
                    "AI (if its not better than me...)",
                    "Responsive Designs.",
                    "LAM Models.",
                    "Fine Tuning LLM Models.",
                    "Web Development.",
                    "UI/UX Design.",
                    "AI (if its not better than me...)",
                    "Responsive Designs.",
                    "LAM Models.",
                    "Fine Tuning LLM Models.",
                    "Web Development.",
                    "UI/UX Design.",
                    "AI (if its not better than me...)",
                    "Responsive Designs.",
                    "LAM Models.",
                  ]}
                />
              </span>
            </div>
            <div className="flex cursor-pointer">
              <div className="pr-3 cursor-pointer">
                <Link to="https://drive.google.com/file/d/1agag8DIWnpMSKTkWtMNwdDg_BtZ2OKio/view?usp=sharing">
                  <ShinyButton text="resume" />
                </Link>
              </div>
              <Link to="https://github.com/mausmato">
                <ShinyButton text="github" />
              </Link>
            </div>
          </div>
        </div>
        <div className="!pl-16 -mt-4 items-center justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

    </section>
  );
};

export default Home;

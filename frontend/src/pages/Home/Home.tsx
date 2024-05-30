import Title from "../../components/title";
import WordRotate from "../../components/rotate";
import ShinyButton from "../../components/button";
import OrbitingCircles from "../../components/tstack";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "../../style.css";

const Home: React.FC = () => {
  const titleWords = "Hi, I'm Matthew Singer 👋";

  return (
    <section className="w-full py-12 md:py-24 lg:py-56 px-32">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="relative min-h-screen scroll-pb-64">
            <div className="max-w-[729px] flex flex-col justify-center space-y-4">
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
                  ]}
                />
              </span>
            </div>
            <div className="flex">
              <div className="pr-3">
                <ShinyButton />
              </div>
              <ShinyButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

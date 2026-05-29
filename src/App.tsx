import Career from "./components/Career";
import ChatBot from "./components/ChatBot";
import CoverLetter from "./components/CoverLetter";
import Education from "./components/Education";
import FadeIn from "./components/FadeIn";
import Intro from "./components/Intro";
import OtherProjects from "./components/OtherProjects";
import ProjectSection from "./components/ProjectSection";
import ScrollProgress from "./components/ScrollProgress";
import Sidebar from "./components/Sidebar";
import { mainProjects, otherProjects } from "./data/projects";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <Sidebar />
        <main className="lg:pl-56 pt-[57px] lg:pt-0">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
            <div className="space-y-20">
              <Intro />
              <FadeIn>
                <CoverLetter />
              </FadeIn>
              <FadeIn>
                <Career />
              </FadeIn>
              <FadeIn>
                <div id="portfolio" className="pb-4">
                  <h2 className="text-2xl font-bold text-gray-900">포트폴리오</h2>
                  <div className="w-8 border-t-2 border-gray-900 mt-4" />
                </div>
              </FadeIn>
              {mainProjects.map((project) => (
                <FadeIn key={project.id}>
                  <ProjectSection project={project} />
                </FadeIn>
              ))}
              <FadeIn>
                <OtherProjects projects={otherProjects} />
              </FadeIn>
              <FadeIn>
                <Education />
              </FadeIn>
            </div>
          </div>
        </main>
      </div>
      <ChatBot />
    </>
  );
}

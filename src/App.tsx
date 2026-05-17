import FadeIn from "./components/FadeIn";
import Intro from "./components/Intro";
import OtherProjects from "./components/OtherProjects";
// import Others from "./components/Others";
import ProjectSection from "./components/ProjectSection";
import ScrollProgress from "./components/ScrollProgress";
import Sidebar from "./components/Sidebar";
import { mainProjects, otherProjects } from "./data/projects";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Sidebar />
      <main className="lg:pl-56 pt-[57px] lg:pt-0">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="space-y-20">
            <Intro />
            {mainProjects.map((project) => (
              <FadeIn key={project.id}>
                <ProjectSection project={project} />
              </FadeIn>
            ))}
            <FadeIn>
              <OtherProjects projects={otherProjects} />
            </FadeIn>
            {/* <FadeIn>
              <Others />
            </FadeIn> */}
          </div>
        </div>
      </main>
    </div>
  );
}

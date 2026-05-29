import { ExternalLink } from "lucide-react";
import type { Project } from "../types";
import AsisTobe from "./AsisTobe";

interface Props {
  project: Project;
}

export default function ProjectSection({ project }: Props) {
  return (
    <section id={project.id} className="pb-16 border-b border-gray-100">
      {/* Header */}
      <div className="flex items-stretch gap-4 mb-4">
        <div className="w-0.5 bg-emerald-400 rounded-full shrink-0" />
        <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
            )}
            <div className="min-w-0 flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight break-words">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-sm text-gray-400">{project.period}</span>
                {project.subtitle && (
                  <span className="px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full">
                    {project.subtitle}
                  </span>
                )}
              </div>
            </div>
          </div>
          {project.links && project.links.length > 0 && (
            <div className="flex items-center gap-2 shrink-0">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-md text-gray-600 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Screenshot */}
      {project.image &&
        (() => {
          const isMobile =
            project.platform?.includes("iOS") ||
            project.platform?.includes("Android");
          const useContain = isMobile;
          return (
            <div
              className={`project-image mb-8 rounded-xl overflow-hidden border border-gray-100 shadow-sm h-56 sm:h-120 flex items-center justify-center ${useContain ? "bg-white" : ""}`}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className={
                  useContain
                    ? "h-full object-contain transition-transform duration-300 hover:scale-105"
                    : "w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                }
              />
            </div>
          );
        })()}

      <div className="w-8 border-t-2 border-gray-900 mb-8" />

      {/* Overview */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">
          개요
        </h3>
        {project.platform && (
          <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-gray-100 text-gray-500 rounded-full mb-2">
            {project.platform}
          </span>
        )}
        <p className="text-sm text-gray-600 leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* Role */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">
          역할
        </h3>
        <p className="text-sm font-medium text-gray-700 mb-3">{project.role}</p>
        <ul className="space-y-1.5">
          {project.roleDetails.map((detail, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-gray-600"
            >
              <span className="text-emerald-500 mt-0.5 text-xs shrink-0">
                ✦
              </span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Subsections */}
      {project.subsections.length > 0 && (
        <div className="space-y-8">
          {project.subsections.map((sub, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                {sub.title}
              </h3>
              {sub.description && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {sub.description}
                </p>
              )}
              {sub.asIsToBe && (
                <AsisTobe asIs={sub.asIsToBe.asIs} toBe={sub.asIsToBe.toBe} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Retrospective */}
      {project.retrospective && (
        <div className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">
            회고
          </h3>
          <blockquote className="relative pl-4 border-l-2 border-emerald-300">
            <p className="text-sm text-gray-600 leading-relaxed italic">
              {project.retrospective}
            </p>
          </blockquote>
        </div>
      )}
    </section>
  );
}

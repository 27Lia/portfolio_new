import type { Project } from '../types'
import AsisTobe from './AsisTobe'

interface Props {
  project: Project
}

export default function ProjectSection({ project }: Props) {
  return (
    <section id={project.id} className="pb-16 border-b border-gray-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">{project.title}</h2>
        <span className="text-sm text-gray-400 whitespace-nowrap sm:pt-1">{project.period}</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
        {project.platform && (
          <span className="text-sm text-gray-500">{project.platform}</span>
        )}
        {project.links && project.links.length > 0 && (
          <div className="flex items-center gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                {link.label}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="w-8 border-t-2 border-gray-900 mb-8" />

      {/* Overview */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">개요</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{project.overview}</p>
      </div>

      {/* Role */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">역할</h3>
        <p className="text-sm font-medium text-gray-700 mb-3">{project.role}</p>
        <ul className="space-y-1.5">
          {project.roleDetails.map((detail, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
              <span className="text-emerald-500 mt-0.5 text-xs shrink-0">✦</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">Skills</h3>
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
              <h3 className="text-sm font-semibold text-gray-800 mb-4">{sub.title}</h3>
              {sub.description && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{sub.description}</p>
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
          <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">회고</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{project.retrospective}</p>
        </div>
      )}
    </section>
  )
}

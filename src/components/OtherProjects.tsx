import type { OtherProject } from '../types'

interface Props {
  projects: OtherProject[]
}

export default function OtherProjects({ projects }: Props) {
  return (
    <section id="other-projects" className="pb-16 border-b border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Other Projects</h2>
        <div className="w-8 border-t-2 border-gray-900 mt-4" />
      </div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <div key={i} className="pb-8 border-b border-gray-50 last:border-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                {project.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{project.period}</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">{project.role}</p>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <ul className="space-y-1">
              {project.contributions.map((c, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-emerald-500 mt-0.5 text-xs shrink-0">✦</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

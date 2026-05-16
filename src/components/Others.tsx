import { ExternalLink } from "lucide-react";
import { openSourceContribs } from "../data/projects";

export default function Others() {
  return (
    <section id="others" className="pb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Others</h2>
        <div className="w-8 border-t-2 border-gray-900 mt-4" />
      </div>

      {/* Study Notes */}
      <div className="mb-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900">Study Notes</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          개발하면서 배운 것들을 꾸준히 노션에 정리하고 있습니다.
        </p>
        <a
          href="https://www.notion.so/Study-12c28b23590581da901eead049bbebea"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          Notion에서 보기
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Open Source */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-1">
          Open Sources
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          오픈소스 프로젝트 개선을 위해 기여한 경험이 있습니다.
        </p>
        <ul className="space-y-2">
          {openSourceContribs.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-emerald-500 mt-0.5 text-xs shrink-0">
                ✦
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                <span className="text-gray-400 text-xs shrink-0">
                  {item.date}
                </span>
                <span className="font-medium text-gray-800 text-xs">
                  {item.repo}
                </span>
                <span className="text-gray-600 text-xs">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

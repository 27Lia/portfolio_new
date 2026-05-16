import { Download, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/projects";

export default function Intro() {
  return (
    <section id="intro" className="pb-16 border-b border-gray-100">
      {/* Title */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-xs font-semibold text-emerald-600 tracking-widest uppercase mb-3">
            Frontend Developer
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {PERSONAL_INFO.name}
          </h1>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 rounded-2xl mb-10">
        {[
          { value: "단독 완결", label: "개발·배포·운영 단독 수행" },
          { value: "Web + App", label: "React · RN 실서비스" },
          { value: "iOS · Android", label: "스토어 직접 출시" },
          { value: "Toss · IAP · NICE", label: "외부 연동" },
        ].map(({ value, label }) => (
          <div key={label} className="bg-white px-5 py-5">
            <p className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight leading-tight whitespace-nowrap">
              {value}
            </p>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mb-10">
        {PERSONAL_INFO.summary.split("\n").map((line, i) => (
          <p
            key={i}
            className={`text-gray-600 leading-relaxed text-[15px] ${i > 0 ? "mt-3" : ""}`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* About */}
      {/* <div className="mb-10">
        <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
          About
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <Mail className="w-4 h-4 text-gray-400" />
            {PERSONAL_INFO.email}
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            {PERSONAL_INFO.github.replace("https://", "")}
          </a>
        </div>
      </div> */}

      {/* Skills */}
      <div>
        <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
          Skills
        </h2>
        <ul className="space-y-2">
          {PERSONAL_INFO.skills.map((skill, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-gray-700"
            >
              <span className="text-emerald-500 mt-0.5 text-xs">✦</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

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
          <p className="mt-2 text-sm text-gray-500 font-medium tracking-tight">
            프론트엔드 · 크로스플랫폼 웹앱
          </p>
        </div>
      </div>

      {/* Stats + Skills */}
      <div className="grid grid-cols-2 gap-px bg-gray-100 rounded-2xl mb-10">
        {[
          {
            title: "크로스플랫폼",
            sub: "Web · iOS · Android",
            tags: ["React", "React Native", "TypeScript", "WebView 브릿지"],
          },
          {
            title: "상태 & 데이터",
            sub: "전역상태 · 서버동기화",
            tags: ["Zustand", "React Query", "i18n"],
          },
          {
            title: "결제 & 인증",
            sub: "실서비스 보안 연동",
            tags: ["Toss Payments", "IAP", "FCM", "NICE 본인인증"],
          },
          {
            title: "배포 & AI",
            sub: "스토어 출시 · AI 챗봇",
            tags: ["App Store", "Google Play", "Anthropic API", "SSE 스트리밍"],
          },
        ].map(({ title, sub, tags }) => (
          <div
            key={title}
            className="bg-white p-5 first:rounded-tl-2xl [&:nth-child(2)]:rounded-tr-2xl [&:nth-child(3)]:rounded-bl-2xl last:rounded-br-2xl"
          >
            <p className="text-sm font-bold text-gray-900 leading-tight">
              {title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 mb-3">{sub}</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-medium bg-gray-50 border border-gray-100 text-gray-600 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

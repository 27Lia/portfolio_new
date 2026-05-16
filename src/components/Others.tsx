import { openSourceContribs } from '../data/projects'

export default function Others() {
  return (
    <section id="others" className="pb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Others</h2>
        <div className="w-8 border-t-2 border-gray-900 mt-4" />
      </div>

      {/* estudy */}
      <div className="mb-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900">estudy</h3>
          <span className="text-xs text-gray-400">2022.06 – present</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-1">
          지식을 습득하고, 메타인지 활성화를 위하여 꾸준히 기록장을 작성중입니다.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          서버, 백엔드 그리고 더 넓게 나아가 소프트웨어 학문 그 자체를 학습하고 기록합니다.
        </p>
        <p className="mt-2 text-xs text-emerald-600 font-medium">GitHub Star +200</p>
      </div>

      {/* rks-java */}
      <div className="mb-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900">rks-java</h3>
          <span className="text-xs text-gray-400">2024.04 – present</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          CLI 환경에서 Redis의 주요 사용 통계를 분석하고 모니터링하기 위해 개발한 CLI Tool 오픈소스 프로젝트.
        </p>
      </div>

      {/* Open Source */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-1">Open Sources</h3>
        <p className="text-sm text-gray-500 mb-4">오픈소스 프로젝트 개선을 위해 기여한 경험이 있습니다.</p>
        <ul className="space-y-2">
          {openSourceContribs.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-emerald-500 mt-0.5 text-xs shrink-0">✦</span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                <span className="text-gray-400 text-xs shrink-0">{item.date}</span>
                <span className="font-medium text-gray-800 text-xs">{item.repo}</span>
                <span className="text-gray-600 text-xs">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

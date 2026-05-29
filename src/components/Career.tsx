import { Building2 } from "lucide-react";

function calcDuration(startYear: number, startMonth: number): string {
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - startYear) * 12 + (now.getMonth() + 1 - startMonth);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months}개월`;
  if (months === 0) return `${years}년`;
  return `${years}년 ${months}개월`;
}

const CAREER = {
  company: "itda",
  position: "사원",
  category: "SI ‧ 플랫폼",
  period: "2024. 07 - 재직중",
  startYear: 2024,
  startMonth: 7,
  skills: ["TypeScript", "React-Native", "Zustand", "Anthropic API"],
  descriptions: [
    "React, React Native 기반 웹·iOS·Android 크로스플랫폼 서비스 개발 및 운영 수행",
    "Toss Payments 연동, iOS/Android In-App Purchase 구축, FCM 푸시 알림 및 NICE 본인인증 연동 수행",
    "WebView 브릿지 기반 네이티브-웹 데이터 송수신 구조 구현, 위치·카메라·연락처 권한 제어 처리 수행",
    "App Store, Google Play 직접 배포, TestFlight 심사 대응 및 런칭 프로세스 완수",
  ],
};

export default function Career() {
  return (
    <section id="career" className="pb-16 border-b border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">경력</h2>
        <div className="w-8 border-t-2 border-gray-900 mt-4" />
      </div>

      <div className="flex gap-4">
        {/* Logo */}
        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <Building2 className="w-6 h-6 text-gray-500" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
            <h3 className="text-base font-bold text-gray-900">
              {CAREER.company}
            </h3>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {CAREER.period} · {calcDuration(CAREER.startYear, CAREER.startMonth)}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-3">
            {CAREER.position} · {CAREER.category}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {CAREER.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Descriptions */}
          <ul className="space-y-1.5">
            {CAREER.descriptions.map((desc, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-600"
              >
                <span className="text-emerald-500 mt-0.5 text-xs shrink-0">
                  ✦
                </span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

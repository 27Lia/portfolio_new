import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const COVER_LETTER = [
  {
    title: "지원 동기: 비즈니스 신뢰도와 사용자 경험을 동시에 책임지는 개발자",
    body: "프론트엔드 개발자는 사용자가 비즈니스를 마주하는 최전선이자 결제와 인증 등 서비스의 핵심 가치가 최종 완성되는 영역을 책임집니다. 저는 에이전시 환경에서 React Native 기반 하이브리드 앱들을 설계하고 출시하며 서비스의 비즈니스 안정성을 강화하는 프론트엔드의 역할에 매력을 느꼈습니다.\n\n특히 Toss Payments 및 인앱 결제(IAP) 시스템을 전담하며 15종 이상의 결제 런타임 예외 케이스를 정의하고 방어 로직을 구축했습니다. 외부 게이트웨이가 요구하는 브라우저 레벨의 POST 리다이렉션 스펙을 충족하기 위해, 백엔드로부터 암호화 세션 데이터를 전달받은 뒤 자바스크립트로 메모리 상에 가상의 form과 input 요소를 동적으로 생성 및 제출하는 표준 보안 리다이렉트 아키텍처를 구현했습니다. 돈과 개인정보를 다루는 민감한 도메인에서 예외를 철저히 방어해 본 경험을 바탕으로, 귀사에서도 사용자가 가장 신뢰할 수 있는 매끄러운 사용자 경험을 제공하겠습니다.",
  },
  {
    title: "직무 관련 성공 경험: 구조적 설계와 기술적 집요함으로 사용자 이탈 차단",
    body: "협업을 통한 구조적 설계와 하이브리드 환경의 집요한 분석으로 비즈니스 문제를 해결합니다.\n\n첫째, 4단계 KYC 신뢰 인증 플로우에서 앱 비정상 종료 시 데이터가 유실되는 문제를 해결하기 위해 백엔드와 협업했습니다. 각 단계 완료 시마다 12개 이상의 필드를 서버에 임시 저장하고 복구하는 비동기 프로세스를 설계 및 구축했고, 재진입 시 상태를 즉시 복원하도록 구현해 사용자 이탈 요소를 사전 차단했습니다.\n\n둘째, 웹뷰 화면 전환 시 전역 객체인 window.fileSelectCallback이 중복 등록되어 파일 업로드가 오작동하는 메모리 누수를 해결했습니다. 원인이 전역 콜백의 누적 등록에 있음을 파악하고, 최상단에서 한 번만 초기화한 후 필요한 드로어별 콜백만 동적으로 교체하는 싱글톤 구조의 FileUploadManager로 리팩토링하여 파일 업로드 오작동 요인을 차단했습니다.",
  },
  {
    title: "입사 후 포부 및 목표: 선제적 예외 방어와 실시간 기술로 기여하는 엔지니어",
    body: "입사 후에는 서버 불안정성이나 예기치 못한 환경에서도 사용자가 지연 없이 피드백을 받는 선제적 예외 방어 아키텍처를 견고히 구축하겠습니다. 이전 프로젝트에서 분석 서버 유휴 상태에 대응하고자 본 요청 전 서버 헬스체크 API를 선행 호출하는 2중 예외 방어 구조를 설계하고, 무한 대기 대신 즉각적인 안내 모달을 노출해 사용성을 지켜낸 바 있습니다.\n\n더불어, Anthropic API와 SSE 단방향 스트리밍을 연동해 실시간 응답 화면을 처리하는 AI 챗봇 기능을 구현했던 비동기 데이터 처리 경험을 활용해, 귀사의 신규 AI 연동 기능에 즉각 기여하겠습니다. Recharts 기반 대규모 지표 시각화 경험을 더해 구성원들이 비즈니스 지표를 쉽고 명확하게 모니터링할 수 있는 대시보드 도구 설계까지 주도적으로 확장해 나가겠습니다.",
  },
];

export default function CoverLetter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="cover-letter" className="pb-16 border-b border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">자기소개서</h2>
        <div className="w-8 border-t-2 border-gray-900 mt-4" />
      </div>

      <div className="space-y-2">
        {COVER_LETTER.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-800 pr-4">{item.title}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 border-t border-gray-50">
                  {item.body.split("\n\n").map((para, j) => (
                    <p key={j} className={`text-sm text-gray-600 leading-relaxed ${j > 0 ? "mt-3" : "mt-3"}`}>
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

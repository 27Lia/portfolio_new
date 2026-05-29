import type { OpenSourceItem, OtherProject, Project } from '../types'

import pickmeupLogo from '../assets/픽미업로고.svg'
import pickmeupImg from '../assets/픽미업.svg'
import shakalakLogo from '../assets/샤카라카사용자로고.svg'
import shakalakaImg from '../assets/샤카라카.svg'
import shakalakaAdminImg from '../assets/샤카라카관리자.svg'
import inventoryImg from '../assets/샤카라카재고관리.svg'
import expoLogo from '../assets/원예치유로고.svg'
import expoImg from '../assets/원예치유.svg'
import piggicelImg from '../assets/피기셀.svg'

export const PERSONAL_INFO = {
  name: '김선미',
  title: 'Frontend Developer',
  summary:'',
    // '개발 운영 배포까지 경험해온 프론트엔드 개발자입니다.\n 결제·KYC·IAP 등 난이도 높은 기능을 React · React Native로 직접 구현했으며, 에이전시에서 다양한 도메인을 빠르게 소화하며 실행력을 쌓았습니다.',
  email: 'tjs4114@gmail.com',
  github: 'https://github.com/27Lia',
  skills: [
    'React, React Native 기반의 IOS, Android 크로스 플랫폼 앱 개발',
    'Zustand, React Query, 다국어 i18n',
    'Toss Payments, IAP(iOS/Android), FCM(푸시알림) NICE 본인인증',
    'WebView 브릿지 통신',
    'App Store / Google Play 배포 및 운영',
    'Anthropic API 연동 (SSE 스트리밍 AI 챗봇 구현)',
]
}

export const mainProjects: Project[] = [
  {
    id: 'pickmeup',
    title: 'PickMeUp',
    subtitle: '결혼 매칭 플랫폼 앱',
    period: '2025.06 – 2025.11',
    platform: 'Android / iOS',
    logo: pickmeupLogo,
    image: pickmeupImg,
    links: [
      {
        label: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.itda.pickmeup',
      },
      {
        label: 'iOS',
        url: 'https://apps.apple.com/kr/app/%ED%94%BD%EB%AF%B8%EC%97%85-%EC%96%BC%EA%B5%B4-%EC%8A%A4%ED%8E%99%EC%82%AC%EA%B8%B0-%EC%97%86%EB%8A%94-%EA%B2%80%EC%A6%9D%EA%B8%B0%EB%B0%98/id6751931463',
      },
    ],
    overview:
      '결혼을 목적으로 한 프리미엄 매칭 플랫폼. KYC 기반 신뢰 인증, AI 추천 매칭, iOS·Android IAP 결제 시스템을 갖춘 크로스플랫폼 앱으로, 허위 프로필 없는 검증 기반 서비스를 목표로 합니다.',
    role: '프론트엔드 개발 (단독)',
    roleDetails: [
      'KYC 4단계 인증 플로우 설계 및 구현',
      'iOS / Android IAP 결제 연동 (선불/후불 요금제)',
      'NICE 본인인증 연동',
      'AI 추천 매칭 카드 UI 및 인터랙션 구현',
      'App Store / Google Play 배포',
    ],
    skills: ['React Native', 'TypeScript', 'React Query', 'IAP', 'NICE 본인인증'],
    subsections: [
      {
        title: 'KYC 4단계 신뢰 인증 플로우',
        asIsToBe: {
          asIs: '신분증·혼인관계증명·소득증명·자격증 4종의 서류를 제출하는 4단계 KYC 인증 플로우에서, 앱 비정상 종료나 예기치 못한 네트워크 유실 시 기존에 입력 및 업로드한 데이터가 모두 손실되어 처음부터 다시 작성해야 하는 높은 사용자 이탈 위험이 존재했습니다.',
          toBe: '클라이언트 단기 메모리에만 의존하는 전역 상태 관리 대신, 각 단계 완료 시마다 중간 데이터를 백엔드에 비동기식으로 실시간 임시 저장하는 세션 보존 프로세스를 설계했습니다. 이를 통해 사용자가 앱 이탈 후 재진입하더라도 이전 상태를 서버로부터 즉시 동기화하여 복원하는 견고한 복구 로직을 구현하고 사용자 이탈을 차단했습니다',
        },
      },
      {
        title: 'React Native WebView 파일 업로드 콜백 중복 버그 해결',
        asIsToBe: {
          asIs: '카메라·갤러리·파일 업로드 시 엉뚱한 화면에 파일이 올라가는 버그가 지속 발생했습니다. 신분증을 촬영하면 프로필 사진 슬롯에 업로드되는 식으로, 어느 화면에서 업로드해도 재현됐습니다.',
          toBe: '네이티브 → 웹 파일 전달 시 호출되는 window.fileSelectCallback이 드로어가 열릴 때마다 중복 등록되어 나중에 등록된 콜백이 앞의 것을 덮어쓰는 구조적 원인을 파악했습니다. FileUploadManager를 앱 최상단에서 단 한 번만 초기화하고, 현재 열려있는 드로어의 콜백만 교체하는 싱글톤 구조로 분리했습니다. isInitialized 플래그로 중복 초기화를 방지하여 iOS·Android 전 화면의 파일 업로드 오작동을 완전히 해소했습니다.',
        },
      },
      {
        title: 'NICE 본인인증 연동',
        asIsToBe: {
          asIs: 'NICE 본인인증 게이트웨이가 보안을 위해 브라우저 표준 POST 리다이렉션 방식을 요구함에 따라, 단일 페이지 애플리케이션(SPA) 환경에서 일반적인 비동기 AJAX(Axios) 요청으로는 사용자 브라우저 화면을 외부 도메인으로 POST 페이로드와 함께 직접 이동시킬 수 없는 브라우저 샌드박스 제약이 있었습니다.',
          toBe: "백엔드 세션 API로부터 수신한 일회성 토큰 및 암호화 데이터를 바탕으로, 메모리 상에 가상의 HTML Form과 Hidden Input 요소를 동적 생성하여 서브밋하는 웹 표준 대응 핸들러를 구현했습니다. 데이터 전송 완료 후 즉시 해당 요소를 DOM에서 해제하여 불필요한 메모리 점유를 방지했으며, URL 파라미터(returnUrl)를 동적으로 추적하고 인계하여 인증 완료 후 아이디 찾기나 비밀번호 재설정 등 각각의 원래 인입 페이지로 복귀하는 멀티 엔드포인트 라우팅 처리를 보존했습니다.",
        },
      },
    ],
    retrospective:
      '단독 개발임에도 도메인 복잡도가 가장 높았던 프로젝트였습니다. KYC·IAP·NICE 등 외부 연동이 집중된 만큼 플랫폼 문서를 깊이 읽고 예외 케이스를 선제적으로 방어하는 습관이 생겼습니다. WebView 콜백 중복 버그는 증상만으로 원인을 바로 찾기 어려웠는데, 네이티브-웹 브릿지 구조를 코드 레벨에서 직접 추적하며 근본 원인을 찾아낸 경험이 이후 디버깅 접근 방식에 큰 영향을 주었습니다.',
  },
  {
    id: 'shakalaka',
    title: 'SHAKALAKA',
    subtitle: 'B2B/B2C 도매 커머스 플랫폼',
    period: '2024.09 – 2025.04',
    platform: 'Android / iOS',
    logo: shakalakLogo,
    image: shakalakaImg,
    overview:
      '셀러·브랜드 페이지, 상품 등록, 장바구니, 결제, 구독 시스템을 갖춘 B2B/B2C 도매 커머스 웹앱입니다.',
    role: '프론트엔드 개발 (2인 팀)',
    roleDetails: [
      '다중 조건 가격 계산 로직 설계 및 구현',
      'Toss Payments 일반결제 및 정기구독 빌링키 연동',
      '판매자 상품 등록 플로우 (복잡한 옵션 조합 폼) 구현',
      '장바구니 재고 기반 구매 제한 및 셀러별 배송비 분리 로직',
      'i18n 다국어 지원 시스템 (한국어/영어/일어/중국어) 적용',
    ],
    skills: ['React', 'TypeScript', 'React Query', 'Zustand', 'Toss Payments', 'Ant Design', 'i18n'],
    subsections: [
      {
        title: '다중 조건 가격 계산 로직',
        asIsToBe: {
          asIs: '구독 여부 · 상품 컨디션(NEW/중고) · 국내/해외 배송 · 셀러별 무료배송 기준이 모두 교차하는 가격 계산 로직을 하나의 함수에서 처리하다 보니, 조건이 추가될수록 분기가 기하급수적으로 복잡해져 유지보수가 어려운 상태였습니다.',
          toBe: '각 가격 계산 단계(셀러별 기본가, 조건별 배송비, 구독 할인 등)를 순차적으로 통과하는 단방향 계산 파이프라인 구조로 재설계하여 각 조건 간의 의존성을 분리했습니다. 폼 변경에 따른 계산 비용을 useMemo 기반으로 최적화하여 렌더링 시 무거운 재연산을 방지하고, 새로운 조건이 추가되어도 기존 연산 흐름을 해치지 않도록 유지보수성을 확보했습니다.',
        },
      },
      {
        title: 'Toss Payments 정기구독 연동',
        asIsToBe: {
          asIs: '일반 결제(카드·무통장입금)와 정기구독(빌링키 발급) 플로우가 서로 달라 결제 성공·실패·품절 상태별 UX 분기 처리가 혼재되어 있었습니다.',
          toBe: 'requestBillingAuth로 빌링키 발급 플로우를 분리하고, 결제 상태(성공·실패·품절·환불)에 따른 UX 분기를 명확히 정의해 사용자에게 일관된 피드백을 제공했습니다.',
        },
      },
    ],
    retrospective:
      '에이전시에서 진행한 프로젝트 중 비즈니스 로직이 가장 복잡했던 프로젝트입니다. 가격 계산 하나에도 여러 조건이 얽혀있어 단순히 구현하는 것보다 구조를 어떻게 설계하느냐가 더 중요하다는 것을 체감했습니다. 커머스 도메인 특유의 엣지 케이스(재고 소진, 결제 실패, 환불 등)를 꼼꼼하게 처리하면서 사용자 경험을 끝까지 책임지는 관점을 가지게 되었습니다.',
  },
  {
    id: 'shakalaka-admin',
    title: 'SHAKALAKA Admin',
    subtitle: '운영 관리자 대시보드',
    period: '2024.09 – 2025.04',
    platform: 'Web',
    image: shakalakaAdminImg,
    overview:
      '회원·상품·주문·정산·지표를 관리하는 운영자 전용 어드민 대시보드입니다.',
    role: '프론트엔드 개발 (2인 팀)',
    roleDetails: [
      'Recharts 기반 퍼널·코호트·MAU/DAU·LTV 분석 대시보드 구현',
      '판매자 수수료 반영 정산 워크플로우 UI 구현',
      '회원·상품·주문 관리 테이블 및 필터 UI 구현',
    ],
    skills: ['React', 'TypeScript', 'React Query', 'Recharts', 'Ant Design'],
    subsections: [
      {
        title: '분석 대시보드 구현',
        description:
          'Recharts 기반으로 퍼널 분석 · 코호트 리텐션 · MAU/DAU · 매출 · 구독 지표를 시각화했습니다. 월별 코호트 기반 유지율·이탈률·LTV 차트를 구현하여 운영팀이 데이터 기반으로 의사결정할 수 있는 도구를 제공했습니다.',
      },
    ],
  },
  {
    id: 'shakalaka-inventory',
    title: 'SHAKALAKA Inventory Management',
    subtitle: 'AI 기반 재고 관리 앱',
    period: '2025.04 – 2025.06',
    platform: 'Android / iOS',
    image: inventoryImg,
    overview:
      '의류 재고를 촬영 한 장으로 등록하는 재고 관리 앱. 사진을 찍으면 AI가 카테고리·색상·패턴을 자동 분류하고, 결과를 재고 등록 폼에 자동 반영하는 플로우로 구성됩니다.',
    role: '프론트엔드 개발 (단독)',
    roleDetails: [
      '촬영 → AI 분류 → 재고 등록 단계별 플로우 설계 및 구현',
      'react-easy-crop + Canvas API 기반 이미지 크롭 UI 구현',
      'AI 서버 헬스체크 기반 사전 에러 방어',
      '복잡한 옵션 조합 폼 (색상·사이즈·수량 다중 입력) 구현',
      '검색·필터·정렬·아코디언 기반 재고 탐색 UI 구현',
    ],
    skills: ['React Native', 'TypeScript', 'Zustand', 'React Query', 'Canvas API'],
    subsections: [
      {
        title: '촬영 → AI 분류 → 등록 플로우',
        asIsToBe: {
          asIs: '촬영 이미지를 AI 서버로 전송하는 과정에서 크롭된 이미지의 데이터 포맷 변환 처리와 AI 서버 장애 상황에 대한 에러 핸들링이 없어, 서버가 응답하지 않을 때 사용자는 아무 피드백 없이 대기하게 되는 문제가 있었습니다.',
          toBe: 'react-easy-crop + Canvas API로 크롭 UI를 구현하고, 크롭된 영역을 Blob → File로 변환 후 순차적으로 파일 업로드와 AI 분석을 호출했습니다. AI 서버 헬스체크를 분석 요청 전에 선행하여 서버 불가 상태를 사전에 감지하고 사용자에게 명확한 피드백을 제공했습니다. 분석 결과(카테고리·색상·패턴)는 Zustand 스토어에 저장하여 다음 단계 폼에 자동 반영되도록 설계했습니다.',
        },
      },
    ],
  },
  {
    id: 'expo',
    title: '원예치유박람회',
    subtitle: '박람회 전용 크로스플랫폼 앱',
    period: '2026.01 – 2026.04',
    platform: 'Android / iOS',
    logo: expoLogo,
    image: expoImg,
    links: [
      {
        label: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.taean.healingexpo&pli=1',
      },
      {
        label: 'iOS',
        url: 'https://apps.apple.com/kr/app/%ED%83%9C%EC%95%88%EC%9B%90%EC%98%88%EC%B9%98%EC%9C%A0/id6759705805',
      },
    ],
    overview:
      '태안 원예치유 박람회 방문객을 위한 QR 스캔 기반 체험형 앱. 박람회 내 구역 QR을 스캔하면 해당 꽃·식물 정보를 확인하고, 실시간 위치 기반 지도에서 현재 위치를 표시해주는 앱입니다.',
    role: '프론트엔드 개발 (단독)',
    roleDetails: [
      'React Native ↔ 웹 WebView 브릿지 양방향 메시지 패싱 구조 설계 및 구현',
      'react-native-vision-camera 기반 QR 스캔 구현',
      'Geolocation.watchPosition 기반 실시간 위치 추적 및 지도 표시',
      '카카오 알림톡 딥링크 처리 (앱 설치 여부에 따른 앱 실행/스토어 분기)',
      'iOS · Android 카메라 · 위치 권한 분기 처리 (react-native-permissions)',
      'App Store / Google Play 배포',
    ],
    skills: [
      'React Native',
      'TypeScript',
      'react-native-vision-camera',
      'react-native-permissions',
      'Geolocation API',
    ],
    subsections: [
           {
        title: 'React Native ↔ 웹 WebView 양방향 브릿지 통신 설계',

        asIsToBe: {
          asIs: '웹뷰 내부 웹페이지에서 GPS 위치 추적, 카메라 QR 스캔, 딥링크 로그인 기능을 요청할 때 모바일 기기 권한 제어 및 데이터 연동이 불가능했습니다',
          toBe: 'React Native와 웹뷰 간의 onMessage 브릿지를 구축하여 Geolocation.watchPosition 기반의 실시간 위치 좌표 전송, react-native-vision-camera를 활용한 QR 스캔 결과 전달, 그리고 웹뷰 로딩 완료(WEB_READY) 시점까지 딥링크 데이터를 useRef로 임시 보존 후 인계하는 안전한 데이터 동기화 흐름을 구현했습니다',
        },
      },
    ],
    retrospective:
      '딥링크·권한처리·WebView 브릿지를 하나의 프로젝트에서 모두 다룬 경험이었습니다. 스토어 배포를 처음부터 끝까지 단독으로 진행하면서 TestFlight 심사 거절 사유 대응, Google Play 정책 검토 등 배포 프로세스 전반을 직접 익힐 수 있었습니다.',
  },
  {
    id: 'piggicel',
    title: 'Piggicel (충전돼지)',
    subtitle: 'Next.js 이벤트 기능 개발',
    period: '2025.05 – 2025.06',
    platform: 'Web',
    image: piggicelImg,
    links: [{ label: 'Site', url: 'https://app.piggycell.io/ko/home' }],
    overview:
      '기존 서비스에 출석 체크 이벤트 기능을 단독으로 설계 및 개발. 외부 개발자로 투입되어 낯선 코드베이스를 분석한 후 독립적으로 기능을 구현했습니다.',
    role: '프론트엔드 개발 (단독)',
    roleDetails: [
      '기존 서비스 코드베이스 분석 후 출석 체크 이벤트 기능 설계 및 개발',
      '백엔드 API 연동을 통한 출석 데이터 기록 및 보상 지급 처리',
      '출석 여부 및 보상 알림 UI 커스텀 구현',
    ],
    skills: ['Next.js', 'TypeScript'],
    subsections: [],
  },
  {
    id: 'portfolio',
    title: '개인 포트폴리오',
    subtitle: 'AI 챗봇 포함 포트폴리오 웹사이트',
    period: '2026.05',
    platform: 'Web',
    links: [{ label: 'Site', url: 'https://27lia.github.io/portfolio_new/' }],
    overview:
      '직접 제작한 포트폴리오 사이트. Anthropic API를 활용한 AI 챗봇을 내장하여 방문자가 경력·기술·프로젝트에 대해 자연어로 질문하면 실시간으로 답변받을 수 있습니다.',
    role: '기획 및 개발 (단독)',
    roleDetails: [
      'Anthropic API를 fetch로 직접 연동, SSE 스트림 파싱으로 실시간 스트리밍 구현',
      '포트폴리오 전체 데이터를 system prompt로 주입해 경력 질문에 자동 응답하는 AI 어시스턴트 구현',
      'GitHub Secrets에 API 키 저장 → GitHub Actions 빌드 시 VITE_ 환경변수로 주입 후 GitHub Pages 배포',
    ],
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Anthropic API'],
    subsections: [
      {
        title: 'Anthropic API 스트리밍 챗봇',
        asIsToBe: {
          asIs: '포트폴리오를 방문한 채용담당자가 경력·기술 스택을 처음부터 끝까지 읽어야만 원하는 정보를 얻을 수 있었습니다.',
          toBe: '별도의 백엔드 서버 없이 정적 호스팅(GitHub Pages)만으로 동작하는 환경을 구축하기 위해, API 키 노출을 방지하고자 GitHub Actions 빌드 프로세스 내에서 Secrets를 활용한 암호화 환경변수 주입 방식을 채택했습니다. 또한, 사용자 대기 시간을 최소화하기 위해 Anthropic API의 스트리밍 출력을 받아 가변 길이의 SSE(Server-Sent Events) 청크 데이터를 프론트엔드에서 수동 파싱하여 실시간으로 타이핑 효과처럼 렌더링되도록 비동기 데이터 파이프라인을 직접 제어했습니다.',
        },
      },
    ],
  },
]

export const otherProjects: OtherProject[] = [
  {
    title: 'CarMarket — 폐차 차량 수출 연계 웹서비스',
    period: '2024.07 – 2024.09',
    role: 'Frontend Developer',
    description: '해외 바이어 대상 폐차 차량 수출 연계 플랫폼.',
    contributions: [
      '로그인/회원가입, 차량 조회, 상담 요청 기능 UI 구현',
      'i18n 기반 다국어 지원 시스템 적용',
      '기본 CRUD 기반 서비스 UI 개발',
    ],
    links: [{ label: 'Site', url: 'https://korea-carmarket.com/' }],
  },
  {
    title: 'Readme-decorate — SVG 동적 생성 웹서비스',
    period: '2024.05',
    role: 'Frontend Developer',
    description: '사용자 입력 파라미터 기반으로 GitHub README용 SVG 배지/배너를 동적 생성하는 웹서비스.',
    contributions: [
      '텍스트/폰트/색상/배경/스타일 커스터마이즈 폼 구현',
      'Next.js API(Route Handler) 기반 이미지 생성 API 개발',
    ],
    links: [{ label: 'Site', url: 'https://readme-decorate.vercel.app/' }],
  },
  {
    title: 'NCT MBTI TEST — 멤버 추천 MBTI 서비스',
    period: '2024.01',
    role: 'Frontend Developer',
    description: '사용자 MBTI 결과 기반으로 NCT 멤버를 추천하는 서비스. 2주간 약 2만 명 이상 유입.',
    contributions: [
      '사용자 MBTI 결과 기반 멤버 추천 서비스 개발',
      'CryptoJS 기반 결과 데이터 암호화 및 안전한 공유 기능 구현',
      '2주간 약 2만 명 이상 사용자 유입',
    ],
    links: [{ label: 'Site', url: 'https://27lia.github.io/mbti/' }],
  },
]

export const openSourceContribs: OpenSourceItem[] = [
  { date: '2024.08', repo: 'Quiz-to-Contribute-OSS', description: 'style, layout 개선' },

]

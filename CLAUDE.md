# 포트폴리오 프로젝트

## 기술 스택
- React 19 + TypeScript + Vite 5
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인, `@theme` 사용)
- pnpm 패키지 매니저

## 실행
```
pnpm dev        # localhost:5174 (또는 5173)
pnpm build      # TypeScript 체크 + Vite 빌드
```

## 배포
- GitHub Pages: `https://27lia.github.io/portfolio_new/`
- `vite.config.ts`의 `base: '/portfolio_new/'`
- GitHub Actions 빌드 시 `VITE_ANTHROPIC_API_KEY` 환경변수 주입 (GitHub Secrets)

## 파일 구조
```
src/
  App.tsx                    # 루트 (Sidebar + main + ChatBot)
  index.css                  # 글로벌 + @media print 스타일
  data/projects.ts           # 모든 프로젝트 데이터 (mainProjects, otherProjects)
  types/index.ts             # Project, OtherProject 등 타입
  assets/                    # SVG 이미지들 (한글 파일명)
  components/
    Intro.tsx                # 소개 섹션
    ProjectSection.tsx       # 프로젝트 카드 (이미지 + AsIsToBe + 회고)
    AsisTobe.tsx             # AS-IS / TO-BE 카드
    Sidebar.tsx              # 좌측 네비게이션
    OtherProjects.tsx        # 기타 프로젝트 목록
    ChatBot.tsx              # Anthropic API 챗봇 (SSE 스트리밍)
    FadeIn.tsx               # 스크롤 페이드인 애니메이션
    ScrollProgress.tsx       # 상단 스크롤 진행 바
```

## 데이터 수정
모든 포트폴리오 내용은 `src/data/projects.ts`에서 관리:
- `PERSONAL_INFO`: 이름, 이메일, GitHub, skills 목록
- `mainProjects`: 메인 프로젝트 배열 (순서 = 화면 순서)
- `otherProjects`: 기타 프로젝트 배열

프로젝트 타입: `id`, `title`, `subtitle`, `period`, `platform`, `logo?`, `image?`, `links?`, `overview`, `role`, `roleDetails[]`, `skills[]`, `subsections[]`, `retrospective?`

## Tailwind 테마
커스텀 컬러: `accent=#10b981`, `accent-light=#ecfdf5`, `accent-dark=#059669`

## 프린트/PDF (`src/index.css` @media print)
- `@page { margin: 0 }` + `body { padding: 14mm 15mm }` → 브라우저 헤더/푸터(URL·날짜·제목) 제거
- `.project-image { height: 160px }` → 이미지 표시 (숨기지 않음)
- sidebar, chatbot 등 UI 요소 숨김

## 챗봇
`src/components/ChatBot.tsx`: Anthropic API fetch 직접 연동, SSE 스트리밍 파싱
`src/lib/systemPrompt.ts`: 포트폴리오 데이터 기반 system prompt

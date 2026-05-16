import { Download, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "../data/projects";

const navItems = [
  { id: "intro", label: "소개" },
  { id: "pickmeup", label: "PickMeUp" },
  { id: "shakalaka", label: "SHAKALAKA" },
  { id: "shakalaka-admin", label: "SHAKALAKA Admin" },
  { id: "shakalaka-inventory", label: "SHAKALAKA Inventory" },
  { id: "expo", label: "원예치유박람회" },
  { id: "piggicel", label: "Piggicel" },
  { id: "other-projects", label: "Other Projects" },
  { id: "others", label: "Others" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("intro");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="mobile-topbar lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-xs text-gray-500">{PERSONAL_INFO.title}</p>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-gray-600 hover:text-gray-900"
          aria-label="메뉴 열기"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[57px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg">
          <nav className="px-5 py-3 space-y-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  activeId === id
                    ? "text-emerald-600 bg-emerald-50 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {activeId === id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-emerald-500 rounded-full" />
                )}
                <span className={activeId === id ? "pl-1.5" : ""}>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-56 border-r border-gray-100 bg-white z-30 overflow-y-auto scrollbar-hide">
        {/* Profile */}
        <div className="px-6 pt-10 pb-6 border-b border-gray-100">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mb-3">
            <span className="text-white text-xs font-bold">✦</span>
          </div>
          <p className="text-sm font-bold text-gray-900 leading-tight">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">{PERSONAL_INFO.title}</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5">
          {navItems.map(({ id, label }, i) => {
            const isDivider = i === 1 || i === 8;
            const isActive = activeId === id;
            return (
              <div key={id}>
                {isDivider && <div className="my-2 border-t border-gray-100" />}
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 relative ${
                    isActive
                      ? "text-emerald-600 bg-emerald-50 font-medium"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-emerald-500 rounded-full" />
                  )}
                  <span
                    className={`transition-all duration-200 ${isActive ? "pl-1.5" : ""}`}
                  >
                    {label}
                  </span>
                </button>
              </div>
            );
          })}
        </nav>

        {/* Footer links */}
        <div className="px-6 py-5 border-t border-gray-100 space-y-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {PERSONAL_INFO.email}
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>

          <button
            onClick={() => window.print()}
            className="print-btn flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-md text-gray-500 hover:text-emerald-600 hover:border-emerald-300 transition-colors shrink-0 mt-1"
          >
            <Download className="w-3.5 h-3.5" />
            PDF
          </button>
        </div>
      </aside>
    </>
  );
}

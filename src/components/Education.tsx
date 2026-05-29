import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="pb-16 border-b border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">학력</h2>
        <div className="w-8 border-t-2 border-gray-900 mt-4" />
      </div>

      <div className="flex gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-gray-500" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900 mb-0.5">
            백석예술대학교
          </h3>
          <p className="text-sm text-gray-500">2018-2020 ‧ 졸업</p>
        </div>
      </div>
    </section>
  );
}

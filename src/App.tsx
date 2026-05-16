import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="lg:pl-56 pt-[57px] lg:pt-0">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-16 space-y-24">
          <section id="intro" className="min-h-[50vh]">
            <p className="text-gray-400 text-sm">소개 섹션 (다음 커밋에서 완성)</p>
          </section>
        </div>
      </main>
    </div>
  )
}

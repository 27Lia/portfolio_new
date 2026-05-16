interface Props {
  asIs: string
  toBe: string
}

export default function AsisTobe({ asIs, toBe }: Props) {
  return (
    <div className="space-y-2">
      <div className="rounded-lg bg-gray-50 border-l-[3px] border-gray-300 p-4">
        <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">AS-IS</span>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{asIs}</p>
      </div>
      <div className="rounded-lg bg-emerald-50 border-l-[3px] border-emerald-400 p-4">
        <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">TO-BE</span>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">{toBe}</p>
      </div>
    </div>
  )
}

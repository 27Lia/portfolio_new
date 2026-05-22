import { AlertCircle, Send, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { SYSTEM_PROMPT } from '../lib/systemPrompt'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  '어떤 프로젝트를 해보셨나요?',
  '결제 연동 경험이 있나요?',
  'React Native 경력이 궁금해요',
  '단독 개발 경험 있나요?',
]

function parseErrorMessage(msg: string): string {
  if (msg.includes('credit balance is too low'))
    return 'API 크레딧이 부족합니다. 잠시 후 다시 시도해주세요.'
  if (msg.includes('rate limit'))
    return '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.'
  if (msg.includes('invalid') && msg.includes('key'))
    return 'API 키가 유효하지 않습니다.'
  return '오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
}

function RobotCharacter() {
  return (
    <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      {/* Antenna */}
      <line x1="16" y1="2" x2="16" y2="8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="1.5" r="1.8" fill="white" />
      {/* Head */}
      <rect x="3" y="8" width="26" height="24" rx="7" fill="white" fillOpacity="0.95" />
      {/* Eyes */}
      <circle cx="11.5" cy="17" r="2.8" fill="#059669" />
      <circle cx="20.5" cy="17" r="2.8" fill="#059669" />
      <circle cx="12.5" cy="16" r="1" fill="white" />
      <circle cx="21.5" cy="16" r="1" fill="white" />
      {/* Smile */}
      <path d="M11 24 Q16 27.5 21 24" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <ellipse cx="6.5" cy="22" rx="2.5" ry="1.5" fill="#bbf7d0" fillOpacity="0.8" />
      <ellipse cx="25.5" cy="22" rx="2.5" ry="1.5" fill="#bbf7d0" fillOpacity="0.8" />
    </svg>
  )
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [showBubble, setShowBubble] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 1500)
    return () => clearTimeout(t)
  }, [])

  const showToast = (message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(message)
    toastTimer.current = setTimeout(() => setToast(null), 4000)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const newMessages: Message[] = [...messages, { role: 'user', content }]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1024,
          stream: true,
          system: SYSTEM_PROMPT,
          messages: newMessages,
        }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err?.error?.message ?? 'API error')
      }
      if (!response.body) throw new Error('API error')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data)
            if (
              parsed.type === 'content_block_delta' &&
              parsed.delta?.type === 'text_delta'
            ) {
              const text: string = parsed.delta.text
              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = {
                  role: 'assistant',
                  content: updated[updated.length - 1].content + text,
                }
                return updated
              })
            }
          } catch {
            // incomplete JSON chunk
          }
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'API error'
      showToast(parseErrorMessage(message))
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-600 px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <RobotCharacter />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">AI 어시스턴트</p>
                <p className="text-emerald-200 text-[10px]">김선미의 포트폴리오 봇</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Toast */}
          {toast && (
            <div className="mx-3 mt-2 flex items-center gap-2 rounded-xl bg-red-50 border border-red-100 px-3 py-2 text-xs text-red-600 shrink-0">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {toast}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-2xl rounded-tl-none px-3 py-2.5 text-sm text-gray-700 leading-relaxed">
                  안녕하세요! 김선미의 포트폴리오 AI 어시스턴트입니다.
                  <br />
                  경력, 기술 스택, 프로젝트에 대해 뭐든 물어보세요.
                </div>
                <div className="space-y-1.5">
                  {SUGGESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="w-full text-left text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl px-3 py-2 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-emerald-600 text-white rounded-tr-none'
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    {msg.content === '' ? (
                      <span className="flex items-center gap-1 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                      </span>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3 flex gap-2 shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="질문을 입력하세요..."
              disabled={isLoading}
              className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:border-emerald-400 transition-colors disabled:bg-gray-50 disabled:text-gray-400"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-200 text-white flex items-center justify-center transition-colors shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Character + speech bubble */}
      {!isOpen && (
        <div className="flex items-end gap-2">
          {/* Speech bubble */}
          {showBubble && (
            <div className="relative mb-1 animate-in slide-in-from-right-2 fade-in duration-300">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-br-none shadow-lg px-3.5 py-2.5 max-w-[180px]">
                <p className="text-xs font-semibold text-gray-800">궁금한 거 있으세요?</p>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                  경력·프로젝트 뭐든 물어보세요!
                </p>
              </div>
              {/* bubble tail */}
              <div className="absolute -right-2 bottom-3 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-[-45deg]" />
              {/* close */}
              <button
                onClick={() => setShowBubble(false)}
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-2 h-2 text-gray-600" />
              </button>
            </div>
          )}

          {/* Robot character button */}
          <button
            onClick={() => {
              setIsOpen(true)
              setShowBubble(false)
            }}
            className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 relative"
            aria-label="AI 어시스턴트 열기"
          >
            <RobotCharacter />
            {/* pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-20" />
          </button>
        </div>
      )}

      {/* Close button when open */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
          aria-label="닫기"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
      )}
    </div>
  )
}

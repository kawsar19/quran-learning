'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'এই কোর্সে কারা ভর্তি হতে পারবে?',
    a: 'যেকোনো বয়সের মুসলিম ভাই ও বোনেরা এই কোর্সে ভর্তি হতে পারবেন। কোরআন শেখার জন্য কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই।',
  },
  {
    q: 'কোর্সের মেয়াদ কতদিন?',
    a: 'কোর্সটি ৩০ দিনের। প্রতিদিন একটি করে লেসন সম্পন্ন করতে হবে।',
  },
  {
    q: 'কোর্স কি অনলাইনে হবে?',
    a: 'হ্যাঁ, সম্পূর্ণ কোর্সটি অনলাইনে পরিচালিত হবে। আপনি যেকোনো সময় যেকোনো স্থান থেকে লেসন দেখতে পারবেন।',
  },
  {
    q: 'কোর্স ফি কিভাবে পরিশোধ করতে হবে?',
    a: 'বিকাশ, নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে কোর্স ফি পরিশোধ করা যাবে।',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="text-emerald-600 font-bold">
                {String(i + 1).padStart(2, '0')}
              </span>
              {faq.q}
            </span>
            <span className="text-2xl text-emerald-600 shrink-0 ml-4">
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

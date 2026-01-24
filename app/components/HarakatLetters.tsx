'use client'

const letters = [
  { base: 'ا', name: 'আলিফ', fatha: 'اَ', fathaSound: 'আ', kasra: 'اِ', kasraSound: 'ই', damma: 'اُ', dammaSound: 'উ' },
  { base: 'ب', name: 'বা', fatha: 'بَ', fathaSound: 'বা', kasra: 'بِ', kasraSound: 'বি', damma: 'بُ', dammaSound: 'বু' },
  { base: 'ت', name: 'তা', fatha: 'تَ', fathaSound: 'তা', kasra: 'تِ', kasraSound: 'তি', damma: 'تُ', dammaSound: 'তু' },
  { base: 'ث', name: 'ছা', fatha: 'ثَ', fathaSound: 'ছা', kasra: 'ثِ', kasraSound: 'ছি', damma: 'ثُ', dammaSound: 'ছু' },
  { base: 'ج', name: 'জীম', fatha: 'جَ', fathaSound: 'জা', kasra: 'جِ', kasraSound: 'জি', damma: 'جُ', dammaSound: 'জু' },
  { base: 'ح', name: 'হা', fatha: 'حَ', fathaSound: 'হা', kasra: 'حِ', kasraSound: 'হি', damma: 'حُ', dammaSound: 'হু' },
  { base: 'خ', name: 'খ', fatha: 'خَ', fathaSound: 'খা', kasra: 'خِ', kasraSound: 'খি', damma: 'خُ', dammaSound: 'খু' },
  { base: 'د', name: 'দাল', fatha: 'دَ', fathaSound: 'দা', kasra: 'دِ', kasraSound: 'দি', damma: 'دُ', dammaSound: 'দু' },
  { base: 'ذ', name: 'যাল', fatha: 'ذَ', fathaSound: 'যা', kasra: 'ذِ', kasraSound: 'যি', damma: 'ذُ', dammaSound: 'যু' },
  { base: 'ر', name: 'রা', fatha: 'رَ', fathaSound: 'রা', kasra: 'رِ', kasraSound: 'রি', damma: 'رُ', dammaSound: 'রু' },
  { base: 'ز', name: 'যা', fatha: 'زَ', fathaSound: 'যা', kasra: 'زِ', kasraSound: 'যি', damma: 'زُ', dammaSound: 'যু' },
  { base: 'س', name: 'সীন', fatha: 'سَ', fathaSound: 'সা', kasra: 'سِ', kasraSound: 'সি', damma: 'سُ', dammaSound: 'সু' },
  { base: 'ش', name: 'শীন', fatha: 'شَ', fathaSound: 'শা', kasra: 'شِ', kasraSound: 'শি', damma: 'شُ', dammaSound: 'শু' },
  { base: 'ص', name: 'সাদ', fatha: 'صَ', fathaSound: 'সা', kasra: 'صِ', kasraSound: 'সি', damma: 'صُ', dammaSound: 'সু' },
  { base: 'ض', name: 'দাদ', fatha: 'ضَ', fathaSound: 'দা', kasra: 'ضِ', kasraSound: 'দি', damma: 'ضُ', dammaSound: 'দু' },
  { base: 'ط', name: 'ত্বা', fatha: 'طَ', fathaSound: 'ত্বা', kasra: 'طِ', kasraSound: 'ত্বি', damma: 'طُ', dammaSound: 'ত্বু' },
  { base: 'ظ', name: 'যোয়া', fatha: 'ظَ', fathaSound: 'যোয়া', kasra: 'ظِ', kasraSound: 'যোয়ি', damma: 'ظُ', dammaSound: 'যোয়ু' },
  { base: 'ع', name: 'আইন', fatha: 'عَ', fathaSound: 'আ', kasra: 'عِ', kasraSound: 'ই', damma: 'عُ', dammaSound: 'উ' },
  { base: 'غ', name: 'গাইন', fatha: 'غَ', fathaSound: 'গা', kasra: 'غِ', kasraSound: 'গি', damma: 'غُ', dammaSound: 'গু' },
  { base: 'ف', name: 'ফা', fatha: 'فَ', fathaSound: 'ফা', kasra: 'فِ', kasraSound: 'ফি', damma: 'فُ', dammaSound: 'ফু' },
  { base: 'ق', name: 'ক্বফ', fatha: 'قَ', fathaSound: 'ক্বা', kasra: 'قِ', kasraSound: 'ক্বি', damma: 'قُ', dammaSound: 'ক্বু' },
  { base: 'ك', name: 'কাফ', fatha: 'كَ', fathaSound: 'কা', kasra: 'كِ', kasraSound: 'কি', damma: 'كُ', dammaSound: 'কু' },
  { base: 'ل', name: 'লাম', fatha: 'لَ', fathaSound: 'লা', kasra: 'لِ', kasraSound: 'লি', damma: 'لُ', dammaSound: 'লু' },
  { base: 'م', name: 'মীম', fatha: 'مَ', fathaSound: 'মা', kasra: 'مِ', kasraSound: 'মি', damma: 'مُ', dammaSound: 'মু' },
  { base: 'ن', name: 'নূন', fatha: 'نَ', fathaSound: 'না', kasra: 'نِ', kasraSound: 'নি', damma: 'نُ', dammaSound: 'নু' },
  { base: 'ه', name: 'হা', fatha: 'هَ', fathaSound: 'হা', kasra: 'هِ', kasraSound: 'হি', damma: 'هُ', dammaSound: 'হু' },
  { base: 'و', name: 'ওয়াও', fatha: 'وَ', fathaSound: 'ওয়া', kasra: 'وِ', kasraSound: 'ওয়ি', damma: 'وُ', dammaSound: 'ঊ' },
  { base: 'ي', name: 'ইয়া', fatha: 'يَ', fathaSound: 'ইয়া', kasra: 'يِ', kasraSound: 'ঈ', damma: 'يُ', dammaSound: 'ইয়ু' },
]

export default function HarakatLetters() {
  return (
    <div className="space-y-8" dir="rtl">
      {letters.map((letter, index) => (
        <div key={index} className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden">
          {/* Letter Header - Premium Emerald Gradient */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20">
                {index + 1}
              </span>
              <span className="text-xl font-bold text-white tracking-tight leading-none">
                {letter.name}
              </span>
            </div>
            <span
              className="text-4xl text-white group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              {letter.base}
            </span>
          </div>

          {/* Harakat Cards */}
          <div className="grid grid-cols-3 gap-4 p-6">
            {/* Fatha */}
            <div className="relative group/card bg-rose-50/30 rounded-3xl p-5 text-center border border-rose-100/50 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 flex flex-col items-center">
              <div className="text-[10px] uppercase tracking-widest font-black text-rose-500 mb-2">ফাতহা (যবর)</div>
              <div
                className="text-5xl md:text-6xl text-slate-800 mb-6 leading-tight group-hover/card:scale-110 transition-transform duration-500"
                style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
              >
                {letter.fatha}
              </div>
              <div className="mt-auto text-base font-black text-rose-600 bg-white px-4 py-1 rounded-xl shadow-sm border border-rose-100">
                {letter.fathaSound}
              </div>
            </div>

            {/* Kasra */}
            <div className="relative group/card bg-emerald-50/30 rounded-3xl p-5 text-center border border-emerald-100/50 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 flex flex-col items-center">
              <div className="text-[10px] uppercase tracking-widest font-black text-emerald-500 mb-2">কাসরা (যের)</div>
              <div
                className="text-5xl md:text-6xl text-slate-800 mb-6 leading-tight group-hover/card:scale-110 transition-transform duration-500"
                style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
              >
                {letter.kasra}
              </div>
              <div className="mt-auto text-base font-black text-emerald-600 bg-white px-4 py-1 rounded-xl shadow-sm border border-emerald-100">
                {letter.kasraSound}
              </div>
            </div>

            {/* Damma */}
            <div className="relative group/card bg-sky-50/30 rounded-3xl p-5 text-center border border-sky-100/50 hover:border-sky-300 hover:bg-sky-50 transition-all duration-300 flex flex-col items-center">
              <div className="text-[10px] uppercase tracking-widest font-black text-sky-500 mb-2">দাম্মা (পেশ)</div>
              <div
                className="text-5xl md:text-6xl text-slate-800 mb-6 leading-tight group-hover/card:scale-110 transition-transform duration-500"
                style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
              >
                {letter.damma}
              </div>
              <div className="mt-auto text-base font-black text-sky-600 bg-white px-4 py-1 rounded-xl shadow-sm border border-sky-100">
                {letter.dammaSound}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


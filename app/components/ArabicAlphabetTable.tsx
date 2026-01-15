import AudioButton from './AudioButton'

interface ArabicLetter {
  name: string
  sound: string
  audioUrl: string
  independent: string
}

const arabicLetters: ArabicLetter[] = [
  { name: 'Alif', sound: 'A / long a', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/01-Aalif.mp3', independent: 'ا' },
  { name: 'Ba', sound: 'b', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/02-baA.mp3', independent: 'ب' },
  { name: 'Ta', sound: 't', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/03-taA.mp3', independent: 'ت' },
  { name: 'Tha', sound: 'th', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/04-thaA.mp3', independent: 'ث' },
  { name: 'Jim', sound: 'j', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/05-jiim.mp3', independent: 'ج' },
  { name: 'Ha', sound: 'H', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/06-HaA.mp3', independent: 'ح' },
  { name: 'Kha', sound: 'kh', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/07-khaA.mp3', independent: 'خ' },
  { name: 'Dal', sound: 'd', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/08-daal.mp3', independent: 'د' },
  { name: 'Dhal', sound: 'dh', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/09-thaal.mp3', independent: 'ذ' },
  { name: 'Ra', sound: 'r', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/10-raaA.mp3', independent: 'ر' },
  { name: 'Zay', sound: 'z', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/11-zayn.mp3', independent: 'ز' },
  { name: 'Sin', sound: 's', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/12-siin.mp3', independent: 'س' },
  { name: 'Shin', sound: 'sh', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/13-shiin.mp3', independent: 'ش' },
  { name: 'Sad', sound: 'S', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/14-Saad.mp3', independent: 'ص' },
  { name: 'Dad', sound: 'D', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/15-Daad.mp3', independent: 'ض' },
  { name: 'Ta', sound: 'T', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/16-TaaA.mp3', independent: 'ط' },
  { name: 'Dha', sound: 'Z', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/17-THaaA.mp3', independent: 'ظ' },
  { name: 'Ayn', sound: "'", audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/18-3ayn.mp3', independent: 'ع' },
  { name: 'Ghayn', sound: 'gh', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/19-ghayn.mp3', independent: 'غ' },
  { name: 'Fa', sound: 'f', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/20-faaA.mp3', independent: 'ف' },
  { name: 'Qaf', sound: 'q', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/21-qaaf.mp3', independent: 'ق' },
  { name: 'Kaf', sound: 'k', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/22-kaaf.mp3', independent: 'ك' },
  { name: 'Lam', sound: 'l', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/23-laam.mp3', independent: 'ل' },
  { name: 'Mim', sound: 'm', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/24-miim.mp3', independent: 'م' },
  { name: 'Nun', sound: 'n', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/25-noon.mp3', independent: 'ن' },
  { name: 'Ha', sound: 'h', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/26-haaA.mp3', independent: 'ه' },
  { name: 'Waw', sound: 'w / long u', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/27-waaw.mp3', independent: 'و' },
  { name: 'Ya', sound: 'y / long i', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/28-yaaA.mp3', independent: 'ي' },
]

export default function ArabicAlphabetTable() {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
      <table className="w-full table-auto border-collapse text-lg">
        <thead>
          <tr className="bg-emerald-100 text-gray-700">
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-center">Sound</th>
            <th className="px-6 py-4 text-center">Audio</th>
            <th className="px-6 py-4 text-center">Independent</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {arabicLetters.map((letter, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{letter.name}</td>
              <td className="px-6 py-4 text-center">{letter.sound}</td>
              <td className="px-6 py-4 text-center">
                <AudioButton audioUrl={letter.audioUrl} />
              </td>
              <td className="px-6 py-4 text-center text-5xl" style={{ fontFamily: "'Traditional Arabic', 'Scheherazade New', Arial, sans-serif" }}>
                {letter.independent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

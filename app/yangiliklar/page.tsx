'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Herbalife: Oziq-ovqat chiqindilari hajmini kamaytirish va sayyoraga yordam berishning 5 ta usuli',
    date: '5-Iyun, 2026',
    description: '5-iyun Butunjahon atrof-muhitni muhofaza qilish kuni. Shu kun arafasida Herbalife ovqatlanish bo’yicha mutaxassisi Gulbaxor Ishanxodjayeva ongli iste’mol haqida gapirdi va ushbu amaliyotni kundalik hayotga tatbiq etish bo’yicha maslahatlar bilan o’rtoqlashdi.',
    content: `5-iyun Butunjahon atrof-muhitni muhofaza qilish kuni. Shu kun arafasida Herbalife ovqatlanish bo’yicha mutaxassisi Gulbaxor Ishanxodjayeva ongli iste’mol haqida gapirdi va ushbu amaliyotni kundalik hayotga tatbiq etish bo’yicha maslahatlar bilan o’rtoqlashdi.

BMT tadqiqotlariga ko’ra, dunyoda oziq-ovqatning taxminan 30% tashlab yuboriladi. Buning sababi shundaki, insonlar iste’mol qilishlari mumkin bo’lganidan ko’ra ko’p narsani sotib olishadi yoki tovarlarning yaroqlilik muddati xaridorga yetib bormasidanoq do’konda tugaydi. Natijada, sayyorada oziq-ovqat chiqindilari chiqaradigan issiqxona gazlarining ulushi taxminan 10% ni tashkil qiladi. 2023-yilda Global Food Waste ma’lumotlariga ko’ra, agar oziq-ovqat chiqindilari mamlakat bo’lganida, u issiqxona gazlari chiqarilishi bo’yicha dunyoda Xitoy va AQShdan keyin uchinchi o’rinda turgan bo’lardi.

5-iyun kuni butun dunyo nishonlayotgan atrof-muhitni muhofaza qilish kunida Herbalife kompaniyasining ovqatlanish bo’yicha mutaxassisi Gulbaxor Ishanxodjayeva ongli ravishda iste’mol qilish nima ekanligini aytib berdi va sizning ratsioningizni yanada ekologikroq qilish uchun beshta oddiy maslahat berdi.

Ongli iste’mol - bu iste’molchi sotib olgan narsasiga va qancha miqdorda ekanligiga javobgarlikni o’z zimmasiga olishidir. Mahsulot qanday ishlab chiqarilganligini, yaroqlilik muddati qancha bo’lishini va utilizatsiya qilinganidan keyin u bilan nima bo’lishini hisobga olish kerak. US Environmental Protection Agency tadqiqotlariga ko’ra, har bir kishi kuniga taxminan 1 kg maishiy axlat ishlab chiqaradi va uning katta qismini oziq-ovqat chiqindilari tashkil qiladi. Shuning uchun quyidagi maslahatlar aynan shulardan boshlanadi.

Oldindan rejalashtirish

Do’konga borishdan oldin mahsulotlar ro’yxatini tuzishni odat qilish kerak — bu qadam ortiqcha xarajatlarni oldini olishga va keraksiz tovarlarni sotib olishdan qochishga yordam beradi. Bu hafta uchun oilaviy menyumi yoki do’stlaringiz bilan uchrashuvlar uchun bayramona stolmi, muhim emas, oldindan rejalashtirish orqali siz tayyorlanadigan barcha taomlar yeyilishini nazorat qilishingiz mumkin.

Ekologik mahsulotlarga ustunlik berish

Carbon Brief ma’lumotlariga ko’ra, go’sht va sut mahsulotlari ishlab chiqarish global issiqxona gazlari chiqindilarining taxminan 14,5 foizini tashkil qiladi. Shuning uchun hayvon oqsillarining ozgina qismini o’simlik oqsillariga almashtirish ham atrof-muhitga uzoq muddatli ijobiy ta’sir ko’rsatishi mumkin.

Misol uchun, soya tarkibida inson organizmi o’z-o’zidan ishlab chiqara olmaydigan to’qqizta muhim aminokislotalar mavjud, shuningdek, mol go’shti, tuxum yoki sutga qaraganda birlik maydoniga ko’proq oqsil ishlab chiqaradi. Bundan tashqari, bu ekin ishlab chiqarishda ekologikroqdir, chunki u hayvondan kelib chiqadiganiga qaraganda kamroq suv iste’mol qiladi va kamroq uglerod chiqaradi.

Taomlarni portsiyalarga bo’lib dasturxonga tortish

Taomlarni bitta katta idishda tortgandan ko’ra, darhol portsiyalarga bo’lganingiz ma’qul. Stolda o’tirganlar o’zlari uchun ovqat solishganda, ko’pincha ular yeyishi mumkin bo’lganidan ko’ra ko’p narsani likopchalariga solishadi. Va qolgan barcha ovqatlar muqarrar ravishda axlat chelakka tushadi.

Tashqi ko’rinish - bu yaroqlilik muddati emas

Mahsulotlar biroz so’lg’in ko’rinishni boshlagan bo’lsa ham, ular ovqat uchun ishlatilishi mumkin. Masalan, yumshab qolgan pomidorlardan sous tayyorlash mumkin, yumshab qolgan bananlardan smuzi tayyorlash va ezilgan sabzavotlardan sho’rva yoki ragu tayyorlash mumkin.

Funksional mahsulotlarga e’tibor qaratish

Funktsional mahsulotlar - bu vitaminlar, minerallar va oqsillar kabi ozuqa moddalarining yuqori konsentratsiyasiga ega oziq-ovqat mahsulotlaridir. Qoida tariqasida, ular o’simlik tarkibiy qismlariga asoslangan, ya’ni ulardan foydalanish nafaqat sizning salomatligingizni qo’llab-quvvatlaydi, balki atrof-muhitga salbiy ta’sirni kamaytiradi.

Masalan, Herbalifening "Formula 1" proteinli kokteyli nonushta yoki kechki ovqatni to’laqonli almashtirishi mumkin, bu ayniqsa taom tayyorlash uchun vaqt bo’lmaganda mos keladi. Ichimlikning asosini yuqori sifatli soya oqsili tashkil etadi, unga qo’shimcha ravishda ozuqaviy tolalar va yigirmadan ortiq muhim vitamin va minerallar, shu jumladan B6, B12, D va C vitaminlari mavjud.

Oziq-ovqat chiqindilari hajmini kamaytirish - insonning atrof-muhitga zararli ta’sirini kamaytirish yo’lidagi muhim qadamdir. Ammo siz bir qadam oldinga qadam qo’yishingiz mumkin. Ongli iste’mol qilish yo’lini tanlagan odam uchun foydali bo’lgan yana bir nechta layfxaklar:

Bir martali ishlatiladigan qadoqlar - plastik qutilar, paketlar, qog’oz stakanchalar va ichimlik naychalaridan voz kechish. Ekologik toza materialdan tayyorlangan ko’p marta ishlatiladigan xaridalar-xaltasini va qahva uchun o’zingiz bilan olib yuriladigan chiroyli tubusni sotib olish yaxshiroqdir.
Tortiladigan oziq-ovqat mahsulotlarini o’z idishlarida sotib olishni afzal ko’rish. "Nolinchi qadoq bilan" do’konlar global trenddir va ularning soni kundan-kunga ko’payib bormoqda.
O’z hududingizda alohida axlat yig’ish punktlarini topish, uyingiz yonida esa plastik, qog’oz, shisha, batareykalar va alohida topshirmoqchi bo’lgan boshqa materiallar uchun konteynerlarni joylashtirish.`,
    image: '🆕📢',
    category: 'Ekologiya',
    slug: 'herbalife-oz-iq-chiqindilari-kamaytirish',
  },
  {
    id: 2,
    title: 'Yangi Herbalife Mahsulotlar Koleksiyasi',
    date: '15-Mart, 2026',
    description: 'Bugun Herbalife kompaniyasi yangi qator sog\'lik va oziqlanish mahsulotlarini taqdim etdi. Yangi formulalar turli sog\'lik ehtiyojlari uchun eng yaxshi natijalarni ta\'minlaydi.',
    content: 'Yangi koleksiya yuqori sifat va samaradorlik bilan tayyorlangan. Hama mahsulotlar natural ingredientlar bilan tayyorlangan va klinik sinov o\'tgan.',
    image: '🥗',
    category: 'Mahsulot',
    slug: 'yangi-herbalife-mahsulotlar-koleksiyasi',
  },
  {
    id: 3,
    title: 'Herbalife Orttirish Dasturi Yangisi',
    date: '05-Mart, 2026',
    description: 'Yangi loyalty programa ildirildi. Har bir sotish uchun ballar yig\'ing va pul qaytarish qiling.',
    content: 'Yangi dastur ko\'proq imkoniyat va mukofotlarni taqdim etadi. Dasturchisi jadval bilan har oyda yangi taklif qabul qilishingiz mumkin.',
    image: '⭐',
    category: 'Dastur',
    slug: 'herbalife-orttirish-dasturi-yangisi',
  },
  {
    id: 4,
    title: 'Mobil Ilovasi Yangilandi',
    date: '28-Fevral, 2026',
    description: 'Yangi interfeys va qo\'shimcha funksiyalar bilan mobile ilovasi yangilandi. Endi boshqa tez va oson bo\'ldi.',
    content: 'Ilovada yangi dizayn, oson navigatsiya va tezroq saralash mavjud. iOS va Android uchun mavjud.',
    image: '📱',
    category: 'Texnika',
    slug: 'mobil-ilovasi-yangilandi',
  },
  {
    id: 5,
    title: 'Sog\'lik Maslahatining Mahsulot Unvoni',
    date: '20-Fevral, 2026',
    description: 'Bizning sog\'lik mutaxassislari yangi blog seriyasini boshladi. Sog\'lik va oziqlanish haqida foydali maslahatlar.',
    content: 'Blog har hafta yangi maqolalar bilan yangilanadi. Sog\'lik haqida qiziqarli va foydali ma\'lumotlar o\'qing.',
    image: '💚',
    category: 'Mashvara',
    slug: 'sog-lik-maslahatining-mahsulot-unvoni',
  },
  {
    id: 6,
    title: 'Yangi Filiallar Ochildi',
    date: '15-Fevral, 2026',
    description: 'Herbalife 5 ta yangi filiallar ochildi. Endi yanada qo\'l ostida mahsulotlarni sotib olish mumkin.',
    content: 'Yangi filiallar Tashkent shaharining turli qismlarida joylashgan. Barcha filial eng yuqori sifat xizmatini taqdim etadi.',
    image: '🏢',
    category: 'Xabar',
    slug: 'yangi-filiallar-ochildi',
  },
];

export default function YangilikalarPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Obuna muvaffaqiyatli!');
        setEmail('');
      } else {
        setMessage('Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.');
      }
    } catch (error) {
      setMessage('Server bilan bog‘lanishda xatolik yuz berdi.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-green-200 dark:border-green-900 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900 transition-colors text-green-600 dark:text-green-400"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Yangiliklar</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Featured News */}
        {NEWS_ITEMS.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Eng yangi yangiliklar
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-green-200 dark:border-green-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5 bg-green-50 dark:bg-slate-800 flex items-center justify-center p-8 text-5xl">
                  {NEWS_ITEMS[0].image}
                </div>
                <div className="p-6 md:p-8 md:w-3/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                      {NEWS_ITEMS[0].category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar size={14} />
                      {NEWS_ITEMS[0].date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {NEWS_ITEMS[0].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {NEWS_ITEMS[0].description}
                  </p>
                  <details className="mt-2">
                    <summary className="text-green-600 dark:text-green-400 font-semibold hover:underline cursor-pointer">Ko'proq o'qish</summary>
                    <p className="text-slate-600 dark:text-slate-300 mt-2 whitespace-pre-line">{NEWS_ITEMS[0].content}</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Boshqa yangiliklar
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.slice(1)
              .filter((news) => ![3, 5, 6].includes(news.id))
              .map((news) => (
              <div
                key={news.id}
                className="bg-white dark:bg-slate-900 rounded-lg border border-green-100 dark:border-green-900 overflow-hidden hover:shadow-md hover:border-green-300 dark:hover:border-green-700 transition-all hover:-translate-y-1"
              >
                <div className="h-40 bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-4xl">
                  {news.image}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-1 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                      {news.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <details className="mt-2">
                    <summary className="text-green-600 dark:text-green-400 font-semibold hover:underline cursor-pointer">Ko'proq o'qish</summary>
                    <p className="text-slate-600 dark:text-slate-300 mt-2 whitespace-pre-line">{news.content}</p>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 rounded-xl p-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">Yangiliklar uchun obuna bo'ling</h2>
            <p className="text-green-100 mb-6">
              Eng yangi yangiliklar va taklif haqida birinchi bo'lib xabar oling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Sizning email..."
                className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-green-200 border border-green-400 border-opacity-30 focus:outline-none focus:border-opacity-100 focus:ring-2 focus:ring-green-300"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors whitespace-nowrap"
              >
                Obuna bo'ling
              </button>
            </div>
            {message && <p className="mt-4 text-sm text-green-200">{message}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}

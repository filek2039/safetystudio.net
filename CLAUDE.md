# CLAUDE.md — SafetyStudio.net

Bu dosya Claude'a proje hakkında bağlam sağlar ve her oturumda otomatik okunur.

---

## Proje Özeti

SafetyStudio.net, HSE (Health, Safety & Environment) danışmanlık hizmetleri sunan bir kurumsal web sitesidir. Next.js 14 ile geliştirilmiş olup; servis tanıtımı, blog, ücretsiz araçlar (Incident Rate Calculator, Safety Moment Library) ve iletişim bölümlerinden oluşur. Hedef sektörler: petrol & gaz, inşaat ve endüstriyel tesisler.

---

## Teknoloji Stack'i

| Katman | Teknoloji | Versiyon |
|--------|-----------|----------|
| **Framework** | Next.js (App Router) | 14.2.35 |
| **Dil** | TypeScript | ^5, strict mode |
| **Stil** | Tailwind CSS | ^3.4.1 |
| **Animasyon** | Framer Motion | ^12.38.0 |
| **Fontlar** | Cormorant Garamond (başlıklar), DM Sans (gövde) | — |
| **Deploy** | Cloudflare Pages — statik export (`out/`) | — |
| **Paket Yöneticisi** | npm | — |
| **Linter** | ESLint (eslint-config-next) | ^8 |

---

## Klasör Yapısı

```
SafetyStudio.net/
├── app/                         # YALNIZCA Next.js routing dosyaları
│   ├── layout.tsx               # Root layout — fontlar (5 adet), OG meta, anti-flash theme script, skip-link
│   ├── page.tsx                 # Ana sayfa — yalnızca Hero + LegacyHashRedirect
│   ├── globals.css              # Global stiller, tema tokenleri, drafting-grid, print stylesheet
│   ├── sitemap.ts               # Otomatik sitemap.xml üretimi
│   ├── not-found.tsx            # Özel 404 sayfası
│   ├── services/page.tsx        # Hizmetler sayfası (kendi metadata + canonical)
│   ├── tools/page.tsx           # Ücretsiz araçlar sayfası
│   ├── library/page.tsx         # Safety Moment Library sayfası
│   ├── about/page.tsx           # Hakkımızda + İletişim sayfası (#contact anchor)
│   ├── privacy/page.tsx         # Gizlilik politikası
│   └── blog/
│       ├── page.tsx             # Blog index sayfası
│       └── [yeni-slug]/
│           └── page.tsx         # Yeni blog makaleleri bu şekilde eklenir
├── components/                  # Tüm UI bileşenleri burada
│   ├── Nav.tsx                  # Navbar (usePathname aktif-sayfa çizgisi, mobil focus-trap, ARIA, Escape)
│   ├── Hero.tsx                 # Tipografik hero (drafting-grid + hazard-stripe; video yok)
│   ├── HeroBarrierFigure.tsx    # Hero figürü: bariyer istifi + döngüsel tehlike darbesi (CSS, pause düğmesi, reduced-motion statik)
│   ├── Services.tsx             # Numaralı indeks satırları (01–06, ikon yok)
│   ├── FreeTools.tsx            # Ücretsiz araçlar sarmalayıcısı — IncidentRateCalc'ı render eder
│   ├── Library.tsx              # Safety Moment Library sarmalayıcısı
│   ├── About.tsx                # Hakkımızda — asimetrik 7/5 grid + pull-quote
│   ├── FAQ.tsx                  # SSS — native details/summary akordeon (JS yok)
│   ├── Contact.tsx              # İletişim paneli (hazard-stripe üst kenar, form + mailto)
│   ├── ContactForm.tsx          # Web3Forms formu — anahtar yoksa null döner (mailto fallback)
│   ├── Footer.tsx               # 3-kolonlu footer
│   ├── LegacyHashRedirect.tsx   # Eski /#services vb. hash linklerini yeni rotalara yönlendirir
│   ├── ThemeToggle.tsx          # data-theme + localStorage tema düğmesi
│   ├── tools/                   # Etkileşimli araç bileşenleri
│   │   ├── IncidentRateCalc.tsx # 3 CalcFrame: Personal Injury / SIF Potential / Motor Vehicle
│   │   └── SafetyMomentLibrary.tsx # Safety moment kütüphanesi (clause-numaralı kartlar)
│   ├── blog/                    # Blog chrome (BlogArticleLayout, ToC, ReadingProgress)
│   └── ui/                      # Atomik / paylaşımlı UI bileşenleri
│       ├── BackToTop.tsx        # Scroll-triggered geri-dön butonu
│       ├── BrandMark.tsx        # Logo işareti (bariyer istifi) — tema-uyumlu SVG
│       ├── Container.tsx        # max-w-[1200px] içerik sarmalayıcısı — her section'da kullan
│       ├── ClauseTag.tsx        # Standart-klozu etiketi (ör. "RISK ANALYSIS")
│       ├── DimensionRule.tsx    # Teknik-çizim bölücü (uç tikli hairline + mono etiket)
│       └── SignalButton.tsx     # CTA: solid (turuncu) / text (altı çizili) varyantları
├── brand/                       # Logo brand pack — SVG varyantları + BRAND.md kullanım rehberi
├── data/
│   ├── safetyMoments.ts         # Safety Moment veri deposu (UI bağımlılığı yok)
│   └── faq.ts                   # SSS içeriği — FAQ.tsx VE FAQPage JSON-LD aynı diziden beslenir
├── lib/
│   └── irCalculations.ts        # Incident Rate hesaplama — saf fonksiyonlar
├── public/
│   ├── robots.txt               # Cloudflare'e kopyalanır
│   ├── favicon.ico              # 16+32px legacy favicon (bariyer istifi)
│   └── _headers                 # Cloudflare Pages security header'ları + CSP (bkz. Güvenlik)
├── out/                         # Build çıktısı — elle düzenleme
├── next.config.mjs              # output:'export', trailingSlash:true, images.unoptimized
├── tailwind.config.ts           # Renk tokenleri ve font değişkenleri
├── tsconfig.json                # strict:true, @/* → root path alias
├── wrangler.toml                # Cloudflare Pages — name:"safetystudio", assets.directory="out"
└── IMPROVEMENTS.md              # Tamamlanan ve bekleyen geliştirmeler
```

> ⚠️ **Kritik ayrım:** `app/` yalnızca routing dosyalarını içerir. Yeni bir UI bileşeni eklerken her zaman `components/` altına koy — `app/` altına değil.

---

## Geliştirme Komutları

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (localhost:3000)
npm run dev

# Statik build al (out/ klasörüne)
npm run build

# Linter çalıştır
npm run lint
```

> ⚠️ `next start` kullanma — proje `output: 'export'` ile çalışır, `next start` statik export'u desteklemez.
> `trailingSlash: true` aktif, tüm linklerde sona `/` ekle: `/blog/` ✓ `/blog` ✗

---

## Import Path Convention

`tsconfig.json`'da `@/*` root'a (`./`) map edilmiştir:

```ts
import Nav from '@/components/Nav'           // ✓ doğru
import { irCalc } from '@/lib/irCalculations' // ✓ doğru
import Hero from '../components/Hero'         // ✗ relative path kullanma
```

---

## Site Rotaları

Hash-tab router kaldırıldı — her bölüm kendi statik rotasında yaşar (SEO: her sayfanın kendi metadata + canonical'ı var):

| Rota | İçerik |
|------|--------|
| `/` | Hero (yalnızca) |
| `/services/` | Services — numaralı indeks (01–06) |
| `/tools/` | FreeTools — 3 CalcFrame: Personal Injury · SIF Potential · Motor Vehicle |
| `/library/` | Safety Moment Library (`#safety-moment-library` anchor) |
| `/about/` | About + Contact (`#contact` anchor) |
| `/blog/` | Blog index + makaleler |
| `/privacy/` | Gizlilik politikası |

Nav linkleri: **Services · Free Tools · Library · Blog · About · Get in Touch**

Eski `/#services` tarzı hash linkleri `components/LegacyHashRedirect.tsx` (yalnızca ana sayfada render edilir) yeni rotalara yönlendirir. Yeni bir sayfa eklerken: `app/[slug]/page.tsx` oluştur (metadata + canonical ile), `Nav.tsx` ve `Footer.tsx` link dizilerini ve `app/sitemap.ts`'i güncelle.

---

## Tasarım Sistemi & Renkler — "Field Standard"

Site, güzelce dizgilenmiş bir güvenlik-mühendisliği standardı gibi tasarlanmıştır: clause numaraları (`ClauseTag`), teknik-çizim bölücüler (`DimensionRule`), drafting-grid dokusu ve tek sinyal rengi. Inline HEX kullanma — her zaman token kullan. Değerler tema başına `globals.css`'te tanımlıdır (`:root` = koyu "night shift", `[data-theme="light"]` = açık "engineering paper"):

| Token | Koyu | Açık | Kullanım |
|-------|------|------|----------|
| `paper` | `#14181D` | `#F4F2EC` | Sayfa arka planı |
| `paper-raised` | `#1B2129` | `#FDFCF9` | Kart / panel yüzeyi |
| `ink` | `#E9E6DE` | `#161D26` | Ana metin |
| `ink-soft` | `#9AA5B1` | `#4C5866` | İkincil metin (AA uyumlu) |
| `line` | `#2A323C` | `#D8D3C8` | Hairline, çerçeve, drafting-grid |
| `signal` | `#FF6A3D` | `#B8401D` | CTA, aktif durum, vurgu — kıtlıkla kullan |
| `steel` | `#7FA3C0` | `#33526B` | İkincil vurgu, tag metni |
| `ok` / `warn` / `danger` | emerald-500 / amber-500 / red-400 | emerald-700 / amber-800 / red-700 | Hesaplayıcı benchmark renkleri |

Fontlar: `font-head` (Big Shoulders Display — başlıklar, uppercase), `font-body` (IBM Plex Sans — gövde), `font-data` (IBM Plex Mono — veri, etiketler). `font-display` (Cormorant) yalnızca blog makale başlıklarında kalır; `font-sans` (DM Sans) base fallback'tir.

**Logo**: "Bariyer istifi" — Reason'ın defense-in-depth modeli; boşlukları hizalanmayan üç bariyer, turuncu bar "tutan bariyer". Bileşen: `components/ui/BrandMark.tsx` (tema-uyumlu), favicon: `app/icon.svg`, dış kullanım varyantları + kurallar: `brand/BRAND.md`. İşareti yeniden renklendirme, döndürme veya bar ekleme/çıkarma yapma.

> ⚠️ Tailwind alpha değerleri 5'in katı olmalı (`/10`, `/15`...) ya da arbitrary yazılmalı (`/[0.12]`) — `/12` gibi geçersiz değerler **sessizce derlenmez** ve border preflight grisine düşer.
> ⚠️ Açık temadaki `signal`/`ok`/`warn`/`danger` değerleri WCAG AA (4.5:1) için özel seçilmiştir — Tailwind'in stok `-500` tonlarını açık zeminde kullanma.
> ⚠️ `hazard-stripe` sınıfı site genelinde tam iki kullanımla sınırlıdır (Hero taban çizgisi + Contact panel üst kenarı) — her yerde kullanmak imzayı kostüme çevirir.

---

## Erişilebilirlik (a11y) Kuralları

Erişilebilirlik bu projede birinci önceliktir:

- `<main>` elementine mutlaka `id="main-content"` ekle (skip-link için)
- Form elemanlarında `id`/`htmlFor` eşleştirmesi zorunlu
- Animasyonlarda `useReducedMotion()` hook'unu uygula (Framer Motion)
- Renk kontrastını WCAG AA standardında tut
- Klavye navigasyonunu test et; modal/drawer'larda focus trap ekle
- Etkileşimli elemanlara `aria-label` veya `aria-expanded` ekle
- Tüm görsel-yalnızca öğelerde `aria-hidden="true"` kullan

---

## SEO Kuralları

- Her sayfa için `metadata` objesi tanımla: title, description, OG, canonical
- `metadataBase` her zaman `new URL('https://safetystudio.net')` olmalı
- Blog yazılarına `Article` JSON-LD schema ekle (publishedTime, authors, tags)
- `app/sitemap.ts` dosyasına yeni rotaları ekle
- Tüm harici linkler için `rel="noopener noreferrer"` kullan

---

## Blog Yazısı Ekleme Rehberi

Yeni bir blog yazısı eklemek için şu adımları takip et:

**1. Klasör oluştur:**
```
app/blog/[yazi-slug]/page.tsx
```

**2. `page.tsx` yapısı — `BlogArticleLayout` kullan:**

`BlogArticleLayout` (`components/blog/BlogArticleLayout.tsx`) tüm blog yazıları için ortak chrome'u sağlar:
- ReadingProgress bar (signal turuncu, sayfanın üstünde)
- Nav + Footer + BackToTop
- Sticky TableOfContents sidebar (xl: 1280px+ ekranlarda)
- JSON-LD script injection

```tsx
import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/blog/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Başlık — Safety Studio',
  description: '...',
  openGraph: {
    type: 'article',
    publishedTime: '2026-XX-XXT00:00:00Z',
    authors: ['Safety Studio'],
    tags: ['tag1', 'tag2'],
  },
  alternates: { canonical: 'https://safetystudio.net/blog/[yazi-slug]/' },
}

const header = (
  <header className="pt-36 pb-12 px-16 max-md:px-6 border-b border-signal/10">
    {/* tag, h1, meta satırı */}
  </header>
)

const cta = (
  <div className="px-16 max-md:px-6 pb-24 max-w-2xl">
    {/* CTA strip */}
  </div>
)

const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', /* ... */ })

export default function ArticlePage() {
  return (
    <BlogArticleLayout header={header} cta={cta} jsonLd={jsonLd}>
      {/* Sadece makale gövdesi — <article> ve flex wrapper BlogArticleLayout tarafından sağlanır */}
      <h2 id="section-id" className="font-display font-light text-[1.7rem] text-ink mt-12 mb-2 leading-[1.2]">
        Bölüm Başlığı
      </h2>
      <p>...</p>
    </BlogArticleLayout>
  )
}
```

> ⚠️ **Kritik:** ToC'nin çalışması için tüm `<h2>` başlıklarının `id` attribute'u olmalı.
> `BlogArticleLayout`'u import etmeyi unutma — `Nav`, `Footer`, `BackToTop` ayrıca import etme.

**3. Blog index'e yazıyı ekle (`app/blog/page.tsx`):**
`posts` dizisine yeni obje ekle: `{ slug, tag, date, readTime, title, excerpt }`

**4. `app/sitemap.ts` dosyasını güncelle** — yeni route'u ekle.

---

## Güvenlik Kuralları

Bu proje statik bir site olduğu için sunucu taraflı saldırılar geçerli değil, ancak istemci tarafı ve deploy güvenliği kritik önem taşır:

**Kod İçi Güvenlik:**
- Kaynak koda asla API key, token veya sır bilgisi yazma — statik export'ta tüm kod tarayıcıda görünür
- Build-time env variable'lar (`NEXT_PUBLIC_*`) bundle'a gömülür — hassas değerleri buraya koyma
- Harici form servisleri (Formspree, Web3Forms) için public key kullan, private key asla client'a taşıma
- `dangerouslySetInnerHTML` kullanımı yalnızca güvenilir JSON-LD içeriği için (layout.tsx) — kullanıcı girdisini buraya asla verme

**Harici Linkler & İçerik:**
- Tüm `<a target="_blank">` linkleri `rel="noopener noreferrer"` içermeli (tab hijacking önlemi)
- Kullanıcıdan alınan hiçbir veriyi doğrudan DOM'a enjekte etme (XSS)
- `mailto:` linklerinde e-posta adresini açıkça yaz — obfuscation gerekmez (statik site)

**Cloudflare Güvenliği:**
- HTTP Security Header'lar `public/_headers` dosyasında tanımlı (CSP dahil) ve Cloudflare Pages tarafından uygulanır
- ⚠️ **CSP tuzağı:** `_headers` yalnızca Cloudflare'de etkilidir, `next dev` onu YOKSAYAR. İstemcinin konuştuğu her yeni harici servis (fetch/script/img) ilgili CSP direktifine eklenmeli — yoksa localhost'ta çalışır, canlıda sessizce bloklanır. (Web3Forms bu şekilde `connect-src`'a eklendi, 2026-07.)
- `robots.txt` `public/` klasöründe mevcut — hassas path'leri burada `Disallow` et

**Bağımlılık Güvenliği:**
- `npm audit` ile düzenli olarak bağımlılıkları tara
- `package-lock.json` her zaman commit'e dahil et
- `node_modules/` `.gitignore`'da olduğundan emin ol

---

## TypeScript Kuralları

`tsconfig.json`'da `strict: true` aktif. Bunlar kesinlikle gerekli:

- `any` tip kullanımından kaçın — bilinmeyen tipler için `unknown` kullan
- Component prop'ları için arayüz (`interface`) veya tip (`type`) tanımla
- Server Component'ta `useEffect`/`useState` kullanılamaz — dosya başına `"use client"` ekle

---

## Yapılacaklar Takibi

Bekleyen geliştirmeler için `IMPROVEMENTS.md` dosyasını kontrol et.

**Öncelikli bekleyenler:**

| Görev | Dosyalar | Öncelik |
|-------|----------|---------|
| Sosyal kanıt / vaka çalışmaları | `components/About.tsx` — sahibinden gerçek metrik bekliyor, placeholder istatistik DEPLOY EDİLMEZ | Orta (park) |
| SEO içerik kümesi + Organization JSON-LD + Search Console | `app/blog/*` | Orta |
| Blog içerik genişletme | `app/blog/[slug]/page.tsx` | Düşük |
| Servis kartı detayları | `components/Services.tsx` | Düşük |
| Framer Motion → CSS geçişi | tüm bileşenler (ayrı, dikkatli bir geçiş olarak) | Düşük |

✅ Tamamlananlar (2026-07): FAQ (`components/FAQ.tsx` + `data/faq.ts`, FAQPage JSON-LD) ve iletişim formu (`components/ContactForm.tsx`, Web3Forms) canlıda çalışıyor. Form anahtarı: `.env.local` + Cloudflare Pages env var `NEXT_PUBLIC_WEB3FORMS_KEY`.

---

## Yapılmaması Gerekenler ⚠️

- `next start` kullanma — statik export ile çalışmaz
- Server Component'ta `useEffect`/`useState` kullanma — `"use client"` direktifi gerektirir
- `out/` klasörünü elle düzenleme — `npm run build` ile yeniden oluştur
- Bileşenleri `app/` altında oluşturma — sadece routing dosyaları `app/` altında
- Inline HEX renk kullanma — Tailwind config tokenlarını kullan
- `ink-soft` için `/50` veya altı opacity kullanma — WCAG kontrastı bozar
- Geçersiz Tailwind alpha adımı yazma (`/12`, `/8` gibi) — sınıf sessizce derlenmez; `/[0.12]` kullan
- Yeni renk eklerken hem `globals.css` (iki tema bloğu) hem `tailwind.config.ts`'i güncelle; açık tema değerini AA kontrast için doğrula
- `npm run build`'i dev sunucusu çalışırken çalıştırma — `.next` cache'ini bozar
- Kaynak koda API key veya token yazma — statik bundle'da açığa çıkar
- Harici link'te `rel="noopener noreferrer"` unutma

---

## Notlar

- Site e-postası: `safety@safetystudio.net`
- İletişim formu Web3Forms üzerinden çalışır; public anahtar `NEXT_PUBLIC_WEB3FORMS_KEY` (lokalde `.env.local`, canlıda Cloudflare Pages env var). Anahtar tanımsızsa `ContactForm` null döner ve yalnızca mailto görünür.
- Deploy Git-bağlantılı: `main`'e her push Cloudflare Pages build'ini otomatik tetikler
- Cloudflare deploy: `wrangler.toml` → `name = "safetystudio"`, `assets.directory = "out"`, `compatibility_date = "2025-01-01"`
- `lib/irCalculations.ts` saf hesaplama fonksiyonları içerir, UI bağımlılığı yoktur
- `data/safetyMoments.ts` statik veri deposudur, doğrudan import edilir
- Next.js Image Optimization statik export'ta çalışmaz — `images.unoptimized: true` bu yüzden açık

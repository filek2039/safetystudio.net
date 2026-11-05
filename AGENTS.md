# AGENTS.md — SafetyStudio.net

Bu dosya Codex'a proje hakkında bağlam sağlar ve her oturumda otomatik okunur.

---

## Proje Özeti

SafetyStudio.net, HSE (Health, Safety & Environment) danışmanlık hizmetleri sunan bir kurumsal web sitesidir. Next.js 16 ile geliştirilmiş olup; servis tanıtımı, blog, ücretsiz araçlar (Incident Rate Calculator, Safety Moment Library) ve iletişim bölümlerinden oluşur. Hedef sektörler: petrol & gaz, inşaat ve endüstriyel tesisler.

---

## Teknoloji Stack'i

| Katman | Teknoloji | Versiyon |
|--------|-----------|----------|
| **Framework** | Next.js (App Router) | ^16.4.5 |
| **Dil** | TypeScript | ^5, strict mode |
| **Stil** | Tailwind CSS | ^3.4.1 |
| **Animasyon** | Framer Motion | ^12.38.0 |
| **Fontlar** | Cormorant Garamond (başlıklar), DM Sans (gövde) | — |
| **Deploy** | Cloudflare Pages — statik export (`out/`) | — |
| **Paket Yöneticisi** | npm | — |
| **Linter** | ESLint (eslint-config-next) | ^9 |

---

## Klasör Yapısı

```
SafetyStudio.net/
├── app/                         # YALNIZCA Next.js routing dosyaları
│   ├── layout.tsx               # Root layout — fontlar, OG meta, JSON-LD, skip-link
│   ├── page.tsx                 # Ana sayfa — section bileşenlerini sıralar
│   ├── globals.css              # Global stiller, Tailwind directives
│   ├── sitemap.ts               # Otomatik sitemap.xml üretimi
│   ├── not-found.tsx            # Özel 404 sayfası
│   └── blog/
│       ├── page.tsx             # Blog index sayfası
│       ├── sif-serious-injury-fatality/
│       │   └── page.tsx         # Mevcut makale (SIF analizi)
│       └── [yeni-slug]/
│           └── page.tsx         # Yeni blog makaleleri bu şekilde eklenir
├── components/                  # Tüm UI bileşenleri burada
│   ├── Nav.tsx                  # Navbar (mobil açılır menü, ARIA, Escape key)
│   ├── Hero.tsx                 # Hero/banner bölümü
│   ├── Services.tsx             # Hizmetler bölümü
│   ├── FreeTools.tsx            # Ücretsiz araçlar — max-w-3xl mx-auto, IncidentRateCalc'ı doğrudan render eder (ToolCard kaldırıldı)
│   ├── Library.tsx              # Safety Moment Library bölümü (/#library) — max-w-3xl mx-auto
│   ├── About.tsx                # Hakkımızda bölümü
│   ├── Contact.tsx              # İletişim bölümü (mailto CTA)
│   ├── Footer.tsx               # 3-kolonlu footer
│   ├── tools/                   # Etkileşimli araç bileşenleri
│   │   ├── IncidentRateCalc.tsx # 3 CalcFrame bölümü: Personal Injury / SIF Potential Events / Motor Vehicle Incidents
│   │   └── SafetyMomentLibrary.tsx # Safety moment kütüphanesi
│   └── ui/                      # Atomik / paylaşımlı UI bileşenleri
│       ├── BackToTop.tsx        # Scroll-triggered geri-dön butonu
│       ├── Button.tsx           # Temel buton bileşeni
│       ├── CounterStat.tsx      # Animasyonlu istatistik sayacı
│       ├── GoldDivider.tsx      # Dekoratif altın bölücü
│       ├── SectionHeader.tsx    # Bölüm başlık bileşeni
│       └── ToolCard.tsx         # Araç kartı (defaultOpen prop'u var)
├── data/
│   └── safetyMoments.ts         # Safety Moment veri deposu (UI bağımlılığı yok)
├── lib/
│   └── irCalculations.ts        # Incident Rate hesaplama — saf fonksiyonlar
├── public/
│   └── robots.txt               # Cloudflare'e kopyalanır
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

## Sayfalar ve Tasarım Sistemi

Ana sayfa `Hero` ve `HomeOverview` bileşenlerini gösterir. Servisler, araçlar, kütüphane, blog ve hakkımızda ayrı rotalardır (`/services/`, `/tools/`, `/library/`, `/blog/`, `/about/`). Eski hash bağlantıları `LegacyHashRedirect` ile yönlendirilir. Mobil menü bir açılır navigasyondur; Escape ile kapanır.

Renkler `tailwind.config.ts` ve `app/globals.css` içindeki tema tokenlarından (`paper`, `ink`, `signal`, `line` vb.) gelir. Başlık, gövde ve veri fontları sırasıyla Big Shoulders, IBM Plex Sans ve IBM Plex Mono'dur. Mevcut hero düzenini ve hareketini koru; animasyon bir kez oynar ve azaltılmış hareket tercihini destekler.

Node sürümü `.node-version` dosyasında belirtilir. `npm run build` Webpack ile statik export üretir; `npm run lint` ESLint CLI kullanır. Next.js 16 derleme sırasında lint çalıştırmaz; iki kontrolü de ayrı çalıştır.

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
- ReadingProgress bar (altın renk, sayfanın üstünde)
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
}

const header = (
  <header className="pt-36 pb-12 px-16 max-md:px-6 border-b border-gold/10">
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
      <h2 id="section-id" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
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
- HTTP Security Header'lar Cloudflare dashboard'dan ya da `_headers` dosyasıyla yönetilir
- Önerilen header'lar (Cloudflare Pages `public/_headers` dosyasına ekle):
  ```
  /*
    X-Frame-Options: DENY
    X-Content-Type-Options: nosniff
    Referrer-Policy: strict-origin-when-cross-origin
    Permissions-Policy: camera=(), microphone=(), geolocation=()
  ```
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
| FAQ bölümü | `components/FAQ.tsx` + `FAQPage` JSON-LD | Orta |
| Blog içerik genişletme | `app/blog/[slug]/page.tsx` | Düşük |
| İletişim formu | `components/ContactForm.tsx`, `components/Contact.tsx` | Düşük |
| Servis kartı detayları | `components/Services.tsx` | Düşük |
| Sosyal kanıt / referanslar | `components/About.tsx` | Düşük |

---

## Yapılmaması Gerekenler ⚠️

- `next start` kullanma — statik export ile çalışmaz
- Server Component'ta `useEffect`/`useState` kullanma — `"use client"` direktifi gerektirir
- `out/` klasörünü elle düzenleme — `npm run build` ile yeniden oluştur
- Bileşenleri `app/` altında oluşturma — sadece routing dosyaları `app/` altında
- Inline HEX renk kullanma — Tailwind config tokenlarını kullan
- `muted` için `/50` veya altı opacity kullanma — WCAG kontrastı bozar
- Yeni renk eklerken `tailwind.config.ts`'i güncellemeden devam etme
- Kaynak koda API key veya token yazma — statik bundle'da açığa çıkar
- Harici link'te `rel="noopener noreferrer"` unutma

---

## Notlar

- Site e-postası: `safety@safetystudio.net`
- Cloudflare deploy: `wrangler.toml` → `name = "safetystudio"`, `assets.directory = "out"`, `compatibility_date = "2025-01-01"`
- `lib/irCalculations.ts` saf hesaplama fonksiyonları içerir, UI bağımlılığı yoktur
- `data/safetyMoments.ts` statik veri deposudur, doğrudan import edilir
- Next.js Image Optimization statik export'ta çalışmaz — `images.unoptimized: true` bu yüzden açık

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

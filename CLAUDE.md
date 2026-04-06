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
│   ├── Nav.tsx                  # Navbar (mobil focus-trap, ARIA, Escape key)
│   ├── Hero.tsx                 # Hero/banner bölümü
│   ├── Services.tsx             # Hizmetler bölümü
│   ├── FreeTools.tsx            # Ücretsiz araçlar (yalnızca Incident Rate Calculator)
│   ├── Library.tsx              # Safety Moment Library bölümü (/#library)
│   ├── About.tsx                # Hakkımızda bölümü
│   ├── Contact.tsx              # İletişim bölümü (mailto CTA)
│   ├── Footer.tsx               # 3-kolonlu footer
│   ├── tools/                   # Etkileşimli araç bileşenleri
│   │   ├── IncidentRateCalc.tsx # Incident Rate hesaplayıcı
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

## Ana Sayfa Bölüm Sırası

`app/page.tsx` artık `TabbedContent` ile hash-driven tab router kullanır. Aktif sekmeye göre bölümler şunlardır:

| Hash | Bölüm |
|------|-------|
| (boş) | Hero |
| `#services` | Services |
| `#tools` | FreeTools (yalnızca Incident Rate Calculator) |
| `#library` | Library (Safety Moment Library) |
| `#about` / `#contact` | About + Contact |

Nav linkleri: **Services · Free Tools · Library · Blog · About · Get in Touch**

Yeni bir sekme eklenirken `TabbedContent.tsx` içindeki `Section` tipini, `HASH_SECTION_MAP`'i ve `SECTION_CONTENT`'i güncelle. Aynı zamanda `Nav.tsx`'teki `links` dizisine yeni linki ekle.

---

## Tasarım Sistemi & Renkler

Inline HEX kullanma — her zaman `tailwind.config.ts`'deki tokenları kullan:

| Token | Değer | Kullanım |
|-------|-------|----------|
| `navy` | `#0a1628` | Ana arka plan |
| `navy-mid` | `#112240` | Kart / bölüm arka planı |
| `navy-light` | `#1d3461` | Hafif vurgu arka planı |
| `cream` | `#f5f0e8` | Ana metin rengi |
| `gold` | `#c9a84c` | CTA, divider, focus ring, tag |
| `gold-light` | `#e8c96a` | Hover durumu, vurgu |
| `muted` | `#9fb0cc` | İkincil metin (WCAG AA uyumlu) |

Font değişkenleri: `--font-cormorant` → `font-display` (başlıklar), `--font-dm-sans` → `font-sans` (gövde).

> ⚠️ `muted` rengi için `/50` veya `#8a9ab5` gibi düşük opacity değerleri WCAG kontrastını bozar — minimum `/70` kullan.

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
| Framer Motion reduced-motion | Tüm animasyonlu bileşenler | Orta |
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

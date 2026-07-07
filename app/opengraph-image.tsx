import { ImageResponse } from 'next/og'

export const alt = 'SafetyStudio — HSE consultancy, training, risk analysis and audits'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#E9E6DE'
const SIGNAL = '#FF6A3D'
const BAR = { height: 40, borderRadius: 8 }

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 72,
          background: '#14181D',
        }}
      >
        {/* Barrier-stack mark */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', gap: 56 }}>
            <div style={{ ...BAR, width: 200, background: INK }} />
            <div style={{ ...BAR, width: 72, background: INK }} />
          </div>
          <div style={{ display: 'flex', gap: 56 }}>
            <div style={{ ...BAR, width: 72, background: INK }} />
            <div style={{ ...BAR, width: 200, background: SIGNAL }} />
          </div>
          <div style={{ display: 'flex', gap: 56 }}>
            <div style={{ ...BAR, width: 144, background: INK }} />
            <div style={{ ...BAR, width: 128, background: INK }} />
          </div>
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            <span style={{ color: INK }}>SAFETY</span>
            <span style={{ color: SIGNAL }}>STUDIO</span>
          </div>
          <div style={{ fontSize: 30, color: '#9AA5B1', marginTop: 8 }}>
            Where safety meets expertise
          </div>
          <div style={{ fontSize: 24, color: SIGNAL, marginTop: 28 }}>
            safetystudio.net
          </div>
        </div>
      </div>
    ),
    size
  )
}

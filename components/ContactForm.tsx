'use client'
import { useState, type FormEvent } from 'react'
import SignalButton from '@/components/ui/SignalButton'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  if (!WEB3FORMS_KEY) return null

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New enquiry — safetystudio.net',
          ...data,
        }),
      })

      if (res.ok && (await res.json()).success) {
        setStatus('sent')
        window.gtag?.('event', 'form_submit', { form: 'contact' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-line bg-paper-raised px-6 py-8" role="status">
        <p className="font-head font-bold text-xl text-ink mb-2">Received.</p>
        <p className="font-body text-sm text-ink-soft">Thanks — we typically reply within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label htmlFor="cf-name" className="flex flex-col gap-1.5">
          <span className="font-data text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft">Name</span>
          <input id="cf-name" name="name" type="text" required autoComplete="name" />
        </label>
        <label htmlFor="cf-company" className="flex flex-col gap-1.5">
          <span className="font-data text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft">Company (optional)</span>
          <input id="cf-company" name="company" type="text" autoComplete="organization" />
        </label>
      </div>

      <label htmlFor="cf-email" className="flex flex-col gap-1.5">
        <span className="font-data text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft">Email</span>
        <input id="cf-email" name="email" type="email" required autoComplete="email" />
      </label>

      <label htmlFor="cf-message" className="flex flex-col gap-1.5">
        <span className="font-data text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft">Message</span>
        <textarea id="cf-message" name="message" required rows={5} />
      </label>

      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <SignalButton variant="solid">{status === 'sending' ? 'Sending…' : 'Send message'}</SignalButton>

      <p aria-live="polite" className="font-data text-xs text-danger min-h-[1rem]">
        {status === 'error' ? 'Something went wrong — please email us directly at safety@safetystudio.net.' : ''}
      </p>
    </form>
  )
}

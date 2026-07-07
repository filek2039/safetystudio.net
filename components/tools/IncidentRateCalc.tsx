'use client'
import { useState, ChangeEvent } from 'react'
import { calculateIR, defaultInputs, IRInputs } from '@/lib/irCalculations'

function Field({ label, id, children }: { label: string; id?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="font-data text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft">{label}</span>
      {children}
    </label>
  )
}

function MetricCard({
  label,
  formula,
  value,
  emptyHint,
  bench,
  cite,
}: {
  label: string
  formula: string
  value: string | null
  emptyHint: string
  bench?: string
  cite?: string
}) {
  const benchColor =
    bench?.startsWith('✓')
      ? 'text-ok'
      : bench?.startsWith('⚠')
      ? 'text-warn'
      : bench?.startsWith('✗')
      ? 'text-danger'
      : 'text-ink-soft'

  return (
    <div className="bg-paper-raised border border-line px-5 py-4">
      <div className="font-data text-[0.68rem] tracking-[0.1em] uppercase text-ink-soft mb-1">{label}</div>
      <div className="font-data text-[0.62rem] text-ink-soft/70 mb-2">{formula}</div>
      {value !== null ? (
        <div className="font-head font-bold text-3xl text-ink mb-2 tabular-nums">{value}</div>
      ) : (
        <div className="font-body text-sm text-ink-soft italic mb-2">{emptyHint}</div>
      )}
      {value !== null && bench && <div className={`font-data text-xs ${benchColor} mb-1`}>{bench}</div>}
      {value !== null && cite && <div className="font-data text-[0.6rem] text-ink-soft/70">{cite}</div>}
    </div>
  )
}

function Subtotal({ label, value, formula }: { label: string; value: number; formula: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-data text-[0.68rem] tracking-[0.1em] uppercase text-signal">{label}</span>
      <span className="font-head font-bold text-2xl text-ink">{value}</span>
      <span className="font-data text-[0.62rem] text-ink-soft/70">{formula}</span>
    </div>
  )
}

function CalcFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-line bg-paper">
      <div className="px-5 py-3.5 border-b border-line bg-paper-raised">
        <h3 className="font-data text-[0.72rem] tracking-[0.15em] uppercase text-ink-soft">{title}</h3>
      </div>
      <div className="px-5 py-6 space-y-5">
        {children}
      </div>
    </div>
  )
}

function TargetRow({
  label,
  current,
  target,
  reductionPct,
  onReductionChange,
  decimals = 2,
}: {
  label: string
  current: number | null
  target: number | null
  reductionPct: number
  onReductionChange: (e: ChangeEvent<HTMLInputElement>) => void
  decimals?: number
}) {
  const fmt = (n: number | null) => (n !== null ? n.toFixed(decimals) : '—')
  return (
    <div className="flex items-center gap-3 flex-wrap mb-3 last:mb-0">
      <span className="font-data text-xs text-ink-soft w-14">{label}</span>
      <span className="font-head font-bold text-base text-ink w-14">{fmt(current)}</span>
      <span className="text-signal text-xs">&rarr;</span>
      <div className="flex items-center gap-1.5">
        <input
          type="number"
          value={reductionPct || ''}
          onChange={onReductionChange}
          min={1}
          max={99}
          className="!w-14 !px-2 text-center"
        />
        <span className="font-data text-[0.65rem] text-ink-soft">% reduction</span>
      </div>
      <span className="font-head font-bold text-lg text-signal ml-auto">{fmt(target)}</span>
    </div>
  )
}

export default function IncidentRateCalc() {
  const [inputs, setInputs] = useState<IRInputs>(defaultInputs)
  const [copied, setCopied] = useState(false)
  const results = calculateIR(inputs)

  const update =
    (field: keyof IRInputs) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const val = parseFloat(e.target.value)
      setInputs((prev) => ({ ...prev, [field]: isNaN(val) ? 0 : val }))
    }

  const fmt = (n: number | null, decimals = 2) =>
    n !== null ? n.toFixed(decimals) : '—'

  const handleCopyResults = async () => {
    const lines: string[] = [
      '=== Incident Rate Calculator Results ===',
      '',
      `Hours Worked: ${inputs.hours.toLocaleString()}`,
      `Base Figure: ${results.baseLabel} hrs`,
      '',
      '--- Case Counts ---',
      `Fatality (FAT): ${inputs.fat}`,
      `Lost Workday Case (LWC): ${inputs.lwc}`,
      `Restricted Workday Case (RWC): ${inputs.rwc}`,
      `Medical Treatment Case (MTC): ${inputs.mtc}`,
      '',
      `LTI (LWC + FAT): ${results.lti}`,
      `TRC (LWC + RWC + MTC + FAT): ${results.trc}`,
      '',
      '--- Frequency Rates ---',
      `LTIF: ${fmt(results.ltif)}`,
      results.ltifBench ? `  ${results.ltifBench}` : '',
      `TRCF: ${fmt(results.trcf)}`,
      results.trcfBench ? `  ${results.trcfBench}` : '',
      '',
      '--- Improvement Targets ---',
      `LTIF Target (${inputs.ltifReductionPct}% reduction): ${fmt(results.ltifTarget)}`,
      `TRCF Target (${inputs.trcfReductionPct}% reduction): ${fmt(results.trcfTarget)}`,
    ]

    if (inputs.sifp > 0 || results.sifpRate !== null) {
      lines.push(
        '',
        '--- SIF-Potential ---',
        `SIFp Events: ${inputs.sifp}`,
        `SIFpR: ${fmt(results.sifpRate)}`,
        `SIFp Target (${inputs.sifpReductionPct}% reduction): ${fmt(results.sifpTarget)}`,
      )
    }

    if (inputs.km > 0 || results.mvifr !== null) {
      lines.push(
        '',
        '--- Motor Vehicle Incidents ---',
        `km Driven: ${inputs.km.toLocaleString()}`,
        `Fatal MVI: ${inputs.mviFatal}`,
        `Serious MVI: ${inputs.mviSerious}`,
        `Minor MVI: ${inputs.mviMinor}`,
        `Total MVI: ${results.mviTotal}`,
        `MVIFR: ${fmt(results.mvifr, 3)}`,
        results.mvifrBench ? `  ${results.mvifrBench}` : '',
        `Fatal MVIFR: ${fmt(results.mviFatalFr, 3)}`,
        `MVIFR Target (${inputs.mviReductionPct}% reduction): ${fmt(results.mvifrTarget, 3)}`,
      )
    }

    lines.push('', 'Generated by Safety Studio — safetystudio.net')

    try {
      await navigator.clipboard.writeText(lines.filter(Boolean).join('\n'))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      window.gtag?.('event', 'tool_used', {
        tool_name: 'incident_rate_calculator',
        action: 'copy_results',
      })
    } catch {
      // clipboard not available
    }
  }

  return (
    <div className="space-y-6 print-calc">

      {/* Frame 1: Personal Injury Incident Rate Calculator */}
      <CalcFrame title="Personal Injury Incident Rate Calculator">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <Field label="Hours Worked (period)" id="ir-hours">
            <input
              id="ir-hours"
              name="hours"
              type="number"
              autoComplete="off"
              value={inputs.hours || ''}
              onChange={update('hours')}
              placeholder="e.g. 1000000"
              min="0"
            />
          </Field>
          <Field label="Base Figure" id="ir-base">
            <select id="ir-base" name="base" autoComplete="off" value={inputs.base} onChange={update('base')}>
              <option value={1000000}>1,000,000 hrs — International</option>
              <option value={200000}>200,000 hrs — US OSHA</option>
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <Field label="Fatality (FAT)" id="ir-fat">
            <input id="ir-fat" name="fat" type="number" autoComplete="off" value={inputs.fat || ''} onChange={update('fat')} placeholder="0" min="0" />
          </Field>
          <Field label="Lost Workday Case (LWC)" id="ir-lwc">
            <input id="ir-lwc" name="lwc" type="number" autoComplete="off" value={inputs.lwc || ''} onChange={update('lwc')} placeholder="0" min="0" />
          </Field>
          <Field label="Restricted Workday Case (RWC)" id="ir-rwc">
            <input id="ir-rwc" name="rwc" type="number" autoComplete="off" value={inputs.rwc || ''} onChange={update('rwc')} placeholder="0" min="0" />
          </Field>
          <Field label="Medical Treatment Case (MTC)" id="ir-mtc">
            <input id="ir-mtc" name="mtc" type="number" autoComplete="off" value={inputs.mtc || ''} onChange={update('mtc')} placeholder="0" min="0" />
          </Field>
        </div>

        <div className="flex flex-wrap gap-6 bg-paper-raised border border-line px-5 py-3.5">
          <Subtotal label="LTI" value={results.lti} formula="(LWC + FAT)" />
          <div className="w-px h-8 bg-line self-center hidden sm:block" />
          <Subtotal label="TRC" value={results.trc} formula="(LWC + RWC + MTC + FAT)" />
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <MetricCard
            label="LTIF — Lost Time Injury Frequency"
            formula={`(LTI ÷ Hours) × ${results.baseLabel}`}
            value={results.ltif !== null ? fmt(results.ltif) : null}
            emptyHint="Enter hours worked to calculate"
            bench={results.ltifBench}
            cite={results.ltifCite}
          />
          <MetricCard
            label="TRCF — Total Recordable Case Frequency"
            formula={`(TRC ÷ Hours) × ${results.baseLabel}`}
            value={results.trcf !== null ? fmt(results.trcf) : null}
            emptyHint="Enter hours worked to calculate"
            bench={results.trcfBench}
            cite={results.trcfCite}
          />
        </div>

        <div className="border border-line px-5 py-4">
          <div className="font-data text-[0.68rem] tracking-[0.12em] uppercase text-ink-soft mb-4">
            Improvement Targets
          </div>
          <TargetRow
            label="LTIF"
            current={results.ltif}
            target={results.ltifTarget}
            reductionPct={inputs.ltifReductionPct}
            onReductionChange={update('ltifReductionPct')}
          />
          <TargetRow
            label="TRCF"
            current={results.trcf}
            target={results.trcfTarget}
            reductionPct={inputs.trcfReductionPct}
            onReductionChange={update('trcfReductionPct')}
          />
        </div>
      </CalcFrame>

      {/* Frame 2: SIF Potential Events */}
      <CalcFrame title="SIF Potential Events">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 items-end">
          <Field label="SIF-Potential Events (SIFp)" id="ir-sifp">
            <input
              id="ir-sifp"
              name="sifp"
              type="number"
              autoComplete="off"
              value={inputs.sifp || ''}
              onChange={update('sifp')}
              placeholder="0"
              min="0"
            />
          </Field>
          <div className="font-body text-[0.65rem] text-ink-soft leading-relaxed pb-1">
            Count of events that, under slightly different circumstances, could have resulted in a
            fatality or permanently disabling injury — regardless of actual outcome.
          </div>
        </div>

        <MetricCard
          label="SIFpR — SIF-Potential Frequency Rate"
          formula={`(SIFp ÷ Hours) × ${results.baseLabel}`}
          value={results.sifpRate !== null ? fmt(results.sifpRate) : null}
          emptyHint="Enter hours worked to calculate"
          bench="Track trend over time — no universal industry benchmark due to variation in SIFp classification criteria."
          cite="Ref: Campbell Institute / NSC, Preventing Serious Injuries & Fatalities (2015)"
        />

        <div className="border border-line px-5 py-4">
          <div className="font-data text-[0.68rem] tracking-[0.12em] uppercase text-ink-soft mb-4">
            SIFp Improvement Target
          </div>
          <TargetRow
            label="SIFpR"
            current={results.sifpRate}
            target={results.sifpTarget}
            reductionPct={inputs.sifpReductionPct}
            onReductionChange={update('sifpReductionPct')}
          />
        </div>
      </CalcFrame>

      {/* Frame 3: Motor Vehicle Incidents */}
      <CalcFrame title="Motor Vehicle Incidents">
        <div className="grid grid-cols-1 max-w-xs">
          <Field label="Total km Driven (period)" id="ir-km">
            <input
              id="ir-km"
              name="km"
              type="number"
              autoComplete="off"
              value={inputs.km || ''}
              onChange={update('km')}
              placeholder="e.g. 5000000"
              min="0"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <Field label="Fatal MVI" id="ir-mvi-fatal">
            <input id="ir-mvi-fatal" name="mviFatal" type="number" autoComplete="off" value={inputs.mviFatal || ''} onChange={update('mviFatal')} placeholder="0" min="0" />
          </Field>
          <Field label="Serious MVI (with injury)" id="ir-mvi-serious">
            <input id="ir-mvi-serious" name="mviSerious" type="number" autoComplete="off" value={inputs.mviSerious || ''} onChange={update('mviSerious')} placeholder="0" min="0" />
          </Field>
          <Field label="Minor MVI (property damage)" id="ir-mvi-minor">
            <input id="ir-mvi-minor" name="mviMinor" type="number" autoComplete="off" value={inputs.mviMinor || ''} onChange={update('mviMinor')} placeholder="0" min="0" />
          </Field>
          <div className="flex items-end">
            <div className="flex items-baseline gap-2 bg-paper-raised border border-line px-4 py-3 w-full">
              <Subtotal label="Total MVI" value={results.mviTotal} formula="(all types)" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <MetricCard
            label="MVIFR — Motor Vehicle Incident Frequency Rate"
            formula={`(Total MVI ÷ km) × 1,000,000`}
            value={results.mvifr !== null ? fmt(results.mvifr, 3) : null}
            emptyHint="Enter km driven to calculate"
            bench={results.mvifrBench}
            cite={results.mvifrCite}
          />
          <MetricCard
            label="Fatal MVIFR — Fatal Motor Vehicle Incident Rate"
            formula={`(Fatal MVI ÷ km) × 1,000,000`}
            value={results.mviFatalFr !== null ? fmt(results.mviFatalFr, 3) : null}
            emptyHint="Enter km driven to calculate"
          />
        </div>

        <div className="border border-line px-5 py-4">
          <div className="font-data text-[0.68rem] tracking-[0.12em] uppercase text-ink-soft mb-4">
            MVI Improvement Target
          </div>
          <TargetRow
            label="MVIFR"
            current={results.mvifr}
            target={results.mvifrTarget}
            reductionPct={inputs.mviReductionPct}
            onReductionChange={update('mviReductionPct')}
            decimals={3}
          />
        </div>
      </CalcFrame>

      {/* Copy Results */}
      <div className="flex justify-end pt-2 no-print">
        <button
          onClick={handleCopyResults}
          className={`font-data text-[0.68rem] tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-200 ${
            copied
              ? 'text-ok border-ok/40'
              : 'text-ink-soft border-line hover:text-signal hover:border-signal/40'
          }`}
        >
          {copied ? 'Copied to clipboard ✓' : 'Copy all results'}
        </button>
      </div>
    </div>
  )
}

'use client'
import { useState, ChangeEvent } from 'react'
import { calculateIR, defaultInputs, IRInputs } from '@/lib/irCalculations'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.7rem] tracking-[0.12em] uppercase text-muted font-medium">{label}</span>
      {children}
    </label>
  )
}

function MetricCard({
  label,
  formula,
  value,
  bench,
  cite,
}: {
  label: string
  formula: string
  value: string
  bench?: string
  cite?: string
}) {
  const benchColor =
    bench?.startsWith('✓')
      ? 'text-emerald-400'
      : bench?.startsWith('⚠')
      ? 'text-amber-400'
      : bench?.startsWith('✗')
      ? 'text-red-400'
      : 'text-muted'

  return (
    <div className="bg-navy/60 border border-gold/12 rounded-sm px-5 py-4">
      <div className="text-[0.68rem] tracking-[0.12em] uppercase text-muted mb-1 font-medium">{label}</div>
      <div className="text-[0.62rem] text-muted/60 mb-2 italic">{formula}</div>
      <div className="font-display font-light text-3xl text-white mb-2">{value}</div>
      {bench && <div className={`text-xs font-light ${benchColor} mb-1`}>{bench}</div>}
      {cite && <div className="text-[0.6rem] text-muted/50 italic">{cite}</div>}
    </div>
  )
}

function Subtotal({ label, value, formula }: { label: string; value: number; formula: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[0.68rem] tracking-[0.15em] uppercase text-gold font-medium">{label}</span>
      <span className="font-display text-2xl text-white font-light">{value}</span>
      <span className="text-[0.62rem] text-muted/60 italic">{formula}</span>
    </div>
  )
}

function SectionSep({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-gold/12" />
      <span className="text-[0.65rem] tracking-[0.18em] uppercase text-gold whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-gold/12" />
    </div>
  )
}

export default function IncidentRateCalc() {
  const [inputs, setInputs] = useState<IRInputs>(defaultInputs)
  const results = calculateIR(inputs)

  const update =
    (field: keyof IRInputs) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const val = parseFloat(e.target.value)
      setInputs((prev) => ({ ...prev, [field]: isNaN(val) ? 0 : val }))
    }

  const fmt = (n: number | null, decimals = 2) =>
    n !== null ? n.toFixed(decimals) : '—'

  return (
    <div className="space-y-6">
      {/* Hours + Base */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <Field label="Hours Worked (period)">
          <input
            type="number"
            value={inputs.hours || ''}
            onChange={update('hours')}
            placeholder="e.g. 1000000"
            min="0"
          />
        </Field>
        <Field label="Base Figure">
          <select value={inputs.base} onChange={update('base')}>
            <option value={1000000}>1,000,000 hrs — International</option>
            <option value={200000}>200,000 hrs — US OSHA</option>
          </select>
        </Field>
      </div>

      {/* Case types */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <Field label="Fatality (FAT)">
          <input type="number" value={inputs.fat || ''} onChange={update('fat')} placeholder="0" min="0" />
        </Field>
        <Field label="Lost Workday Case (LWC)">
          <input type="number" value={inputs.lwc || ''} onChange={update('lwc')} placeholder="0" min="0" />
        </Field>
        <Field label="Restricted Workday Case (RWC)">
          <input type="number" value={inputs.rwc || ''} onChange={update('rwc')} placeholder="0" min="0" />
        </Field>
        <Field label="Medical Treatment Case (MTC)">
          <input type="number" value={inputs.mtc || ''} onChange={update('mtc')} placeholder="0" min="0" />
        </Field>
      </div>

      {/* Subtotals */}
      <div className="flex flex-wrap gap-6 bg-navy/40 border border-gold/10 rounded-sm px-5 py-3.5">
        <Subtotal label="LTI" value={results.lti} formula="(LWC + FAT)" />
        <div className="w-px h-8 bg-gold/15 self-center hidden sm:block" />
        <Subtotal label="TRC" value={results.trc} formula="(LWC + RWC + MTC + FAT)" />
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <MetricCard
          label="LTIF — Lost Time Injury Frequency"
          formula={`(LTI ÷ Hours) × ${results.baseLabel}`}
          value={fmt(results.ltif)}
          bench={results.ltifBench}
          cite={results.ltifCite}
        />
        <MetricCard
          label="TRCF — Total Recordable Case Frequency"
          formula={`(TRC ÷ Hours) × ${results.baseLabel}`}
          value={fmt(results.trcf)}
          bench={results.trcfBench}
          cite={results.trcfCite}
        />
      </div>

      {/* Improvement Targets */}
      <div className="border border-gold/12 rounded-sm px-5 py-4">
        <div className="text-[0.68rem] tracking-[0.18em] uppercase text-gold mb-4 font-medium">
          Improvement Targets
        </div>
        {[
          { key: 'ltifReductionPct' as const, label: 'LTIF', current: results.ltif, target: results.ltifTarget },
          { key: 'trcfReductionPct' as const, label: 'TRCF', current: results.trcf, target: results.trcfTarget },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-3 flex-wrap mb-3 last:mb-0">
            <span className="text-xs text-muted w-12">{row.label}</span>
            <span className="font-display text-base text-white w-14">{fmt(row.current)}</span>
            <span className="text-gold/50 text-xs">→</span>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                value={inputs[row.key] || ''}
                onChange={update(row.key)}
                min={1}
                max={99}
                className="!w-14 !px-2 text-center"
              />
              <span className="text-[0.65rem] text-muted">% reduction</span>
            </div>
            <span className="font-display text-lg text-gold ml-auto">{fmt(row.target)}</span>
          </div>
        ))}
      </div>

      {/* SIF-Potential Section */}
      <SectionSep label="SIF-Potential Events" />

      {/* SIFp input */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 items-end">
        <Field label="SIF-Potential Events (SIFp)">
          <input
            type="number"
            value={inputs.sifp || ''}
            onChange={update('sifp')}
            placeholder="0"
            min="0"
          />
        </Field>
        <div className="text-[0.65rem] text-muted/60 font-light leading-relaxed pb-1">
          Count of events that, under slightly different circumstances, could have resulted in a
          fatality or permanently disabling injury — regardless of actual outcome.
        </div>
      </div>

      {/* SIFpR Result */}
      <MetricCard
        label="SIFpR — SIF-Potential Frequency Rate"
        formula={`(SIFp ÷ Hours) × ${results.baseLabel}`}
        value={fmt(results.sifpRate)}
        bench="Track trend over time — no universal industry benchmark due to variation in SIFp classification criteria."
        cite="Ref: Campbell Institute / NSC, Preventing Serious Injuries & Fatalities (2015)"
      />

      {/* SIFp Improvement Target */}
      <div className="border border-gold/12 rounded-sm px-5 py-4">
        <div className="text-[0.68rem] tracking-[0.18em] uppercase text-gold mb-4 font-medium">
          SIFp Improvement Target
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-muted w-14">SIFpR</span>
          <span className="font-display text-base text-white w-14">{fmt(results.sifpRate)}</span>
          <span className="text-gold/50 text-xs">→</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              value={inputs.sifpReductionPct || ''}
              onChange={update('sifpReductionPct')}
              min={1}
              max={99}
              className="!w-14 !px-2 text-center"
            />
            <span className="text-[0.65rem] text-muted">% reduction</span>
          </div>
          <span className="font-display text-lg text-gold ml-auto">{fmt(results.sifpTarget)}</span>
        </div>
      </div>

      {/* MVI Section */}
      <SectionSep label="Motor Vehicle Incidents" />

      {/* km driven */}
      <div className="grid grid-cols-1 max-w-xs">
        <Field label="Total km Driven (period)">
          <input
            type="number"
            value={inputs.km || ''}
            onChange={update('km')}
            placeholder="e.g. 5000000"
            min="0"
          />
        </Field>
      </div>

      {/* MVI case types */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <Field label="Fatal MVI">
          <input type="number" value={inputs.mviFatal || ''} onChange={update('mviFatal')} placeholder="0" min="0" />
        </Field>
        <Field label="Serious MVI (with injury)">
          <input type="number" value={inputs.mviSerious || ''} onChange={update('mviSerious')} placeholder="0" min="0" />
        </Field>
        <Field label="Minor MVI (property damage)">
          <input type="number" value={inputs.mviMinor || ''} onChange={update('mviMinor')} placeholder="0" min="0" />
        </Field>
        <div className="flex items-end">
          <div className="flex items-baseline gap-2 bg-navy/40 border border-gold/10 rounded-sm px-4 py-3 w-full">
            <Subtotal label="Total MVI" value={results.mviTotal} formula="(all types)" />
          </div>
        </div>
      </div>

      {/* MVI Results */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <MetricCard
          label="MVIFR — Motor Vehicle Incident Frequency Rate"
          formula="(Total MVI ÷ km) × 1,000,000"
          value={fmt(results.mvifr, 3)}
          bench={results.mvifrBench}
          cite={results.mvifrCite}
        />
        <MetricCard
          label="Fatal MVIFR — Fatal Motor Vehicle Incident Rate"
          formula="(Fatal MVI ÷ km) × 1,000,000"
          value={fmt(results.mviFatalFr, 3)}
        />
      </div>

      {/* MVI Target */}
      <div className="border border-gold/12 rounded-sm px-5 py-4">
        <div className="text-[0.68rem] tracking-[0.18em] uppercase text-gold mb-4 font-medium">
          MVI Improvement Target
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-muted w-14">MVIFR</span>
          <span className="font-display text-base text-white w-16">{fmt(results.mvifr, 3)}</span>
          <span className="text-gold/50 text-xs">→</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              value={inputs.mviReductionPct || ''}
              onChange={update('mviReductionPct')}
              min={1}
              max={99}
              className="!w-14 !px-2 text-center"
            />
            <span className="text-[0.65rem] text-muted">% reduction</span>
          </div>
          <span className="font-display text-lg text-gold ml-auto">{fmt(results.mvifrTarget, 3)}</span>
        </div>
      </div>
    </div>
  )
}

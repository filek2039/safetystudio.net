export interface IRInputs {
  hours: number
  base: number // 1000000 or 200000
  fat: number
  lwc: number
  rwc: number
  mtc: number
  ltifReductionPct: number
  trcfReductionPct: number
  // SIF-Potential
  sifp: number
  sifpReductionPct: number
  // MVI
  km: number
  mviFatal: number
  mviSerious: number
  mviMinor: number
  mviReductionPct: number
}

export interface IRResults {
  lti: number
  trc: number
  ltif: number | null
  trcf: number | null
  ltifBench: string
  trcfBench: string
  ltifCite: string
  trcfCite: string
  ltifTarget: number | null
  trcfTarget: number | null
  baseLabel: string
  // SIF-Potential
  sifpRate: number | null
  sifpTarget: number | null
  // MVI
  mviTotal: number
  mvifr: number | null
  mviFatalFr: number | null
  mvifrBench: string
  mvifrCite: string
  mvifrTarget: number | null
}

export const defaultInputs: IRInputs = {
  hours: 0,
  base: 1000000,
  fat: 0,
  lwc: 0,
  rwc: 0,
  mtc: 0,
  ltifReductionPct: 10,
  trcfReductionPct: 20,
  sifp: 0,
  sifpReductionPct: 10,
  km: 0,
  mviFatal: 0,
  mviSerious: 0,
  mviMinor: 0,
  mviReductionPct: 15,
}

export function calculateIR(inputs: IRInputs): IRResults {
  const {
    hours, base, fat, lwc, rwc, mtc,
    ltifReductionPct, trcfReductionPct,
    sifp, sifpReductionPct,
    km, mviFatal, mviSerious, mviMinor, mviReductionPct,
  } = inputs

  const lti = lwc + fat
  const trc = lwc + rwc + mtc + fat
  const isIntl = base === 1000000
  const baseLabel = isIntl ? '1,000,000' : '200,000'
  const mviTotal = mviFatal + mviSerious + mviMinor

  // MVI calculations (independent of hours)
  let mvifr: number | null = null
  let mviFatalFr: number | null = null
  let mvifrBench = ''
  let mvifrCite = ''
  let mvifrTarget: number | null = null

  if (km > 0) {
    mvifr = (mviTotal / km) * 1000000
    mviFatalFr = (mviFatal / km) * 1000000
    mvifrBench =
      mvifr <= 2.5
        ? '✓ Below global avg (≈2.5 per 1M km, road transport)'
        : mvifr <= 5.0
        ? '⚠ Above average — driver safety programme recommended'
        : '✗ Significantly above average — immediate road safety review'
    mvifrCite = 'Source: IOGP 2022 Safety Performance Indicators — Road Transport'
    mvifrTarget = mvifr * (1 - mviReductionPct / 100)
  }

  if (hours === 0) {
    return {
      lti, trc,
      ltif: null, trcf: null,
      ltifBench: '', trcfBench: '', ltifCite: '', trcfCite: '',
      ltifTarget: null, trcfTarget: null, baseLabel,
      sifpRate: null, sifpTarget: null,
      mviTotal, mvifr, mviFatalFr, mvifrBench, mvifrCite, mvifrTarget,
    }
  }

  const ltif = (lti / hours) * base
  const trcf = (trc / hours) * base
  const sifpRate = (sifp / hours) * base
  const sifpTarget = sifpRate * (1 - sifpReductionPct / 100)

  let ltifBench: string
  let trcfBench: string
  let ltifCite: string
  let trcfCite: string

  if (isIntl) {
    ltifBench =
      ltif <= 1.0
        ? '✓ Below global avg (≈1.0, oil & gas)'
        : ltif <= 2.0
        ? '⚠ Above average — improvement recommended'
        : '✗ Significantly above average — urgent review'
    trcfBench =
      trcf <= 4.5
        ? '✓ Below industry avg (≈4.5, general)'
        : trcf <= 7.0
        ? '⚠ Above average — improvement recommended'
        : '✗ Significantly above average — urgent review'
    ltifCite = 'Source: IOGP 2022 Safety Performance Indicators Report'
    trcfCite = 'Source: HSE UK Industry-Wide Statistics (non-fatal injuries)'
  } else {
    ltifBench =
      ltif <= 1.5
        ? '✓ Below industry avg (≈1.5, BLS general industry)'
        : ltif <= 2.5
        ? '⚠ Above average — improvement recommended'
        : '✗ Significantly above average — urgent review'
    trcfBench =
      trcf <= 3.0
        ? '✓ Below industry avg (≈3.0, BLS general industry)'
        : trcf <= 5.0
        ? '⚠ Above average — improvement recommended'
        : '✗ Significantly above average — urgent review'
    ltifCite =
      'Source: U.S. Bureau of Labor Statistics (BLS), Survey of Occupational Injuries & Illnesses'
    trcfCite =
      'Source: U.S. Bureau of Labor Statistics (BLS), Survey of Occupational Injuries & Illnesses'
  }

  const ltifTarget = ltif * (1 - ltifReductionPct / 100)
  const trcfTarget = trcf * (1 - trcfReductionPct / 100)

  return {
    lti, trc, ltif, trcf,
    ltifBench, trcfBench, ltifCite, trcfCite,
    ltifTarget, trcfTarget, baseLabel,
    sifpRate, sifpTarget,
    mviTotal, mvifr, mviFatalFr, mvifrBench, mvifrCite, mvifrTarget,
  }
}

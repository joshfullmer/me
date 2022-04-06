// https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed
const xmur3 = (str: string) => {
  let h = 1779033703 ^ str.length
  for(let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = h << 13 | h >>> 19;
  }

  return () => {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return (h ^= h >>> 16) >>> 0;
  }
}

const mulberry32 = (a: number) => {
  return () => {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

export const shuffleBySeed = (seed = 'pineapple') => {
  const rng = mulberry32(xmur3(seed)())

  const rnd = (lo: number, hi?: number, defaultHi = 1) => {
    let high = hi
    let low = lo

    if (hi == null) {
      high = lo == null ? defaultHi : lo
      low = 0
    }

    return rng() * (high - low) + low;
  }

  const rndInt = (lo: number, hi?: number) => Math.floor(rnd(lo, hi, 2))

  const shuffle = <T>(a: T[]): T[] => {
    const output = []
    for (let i = a.length - 1; i > 0; i--) {
      const j = rndInt(i + 1)
      output.push(a[j])
    }
    return output
  }

  return { rnd, rndInt, shuffle }
}

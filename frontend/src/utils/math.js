/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const generateInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

/**
 * Ported from https://www.codeproject.com/Articles/1221341/The-Vogel-Spiral-Phenomenon
 * @param {number} n amount of elements
 * @param {number} size diameter of a circle
 * @param {number} offset change the rotation of the spirals
 * @returns {Array<Record<'x' | 'y', number>>}
 */
export const distributeRandomPoints = (n, size, offset = 0) => {
  const cc = size / 2
  const sc = 140
  return Array.from({ length: n }).fill(0).map((_, i) => {
    const t = (Math.PI*(1-Math.sqrt(3)) * i) + offset
    const r = Math.sqrt(i / n)
    const x = sc * r * Math.cos(t) + cc
    const y = sc * r * Math.sin(t) + cc
    return { x, y }
  })
};

// src/utils/helpers.js
export const withinLimit = s => (s.length > 9 ? s.slice(0, 9) : s)

export const clamp = n => Number(n.toString().slice(0, 9))

export const toErrorIfNeeded = n =>
  n < 0 || n > 999999999 ? 'ERROR' : withinLimit(String(n))

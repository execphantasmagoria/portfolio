// src/lib/storage.test.ts
import { describe, it, expect } from 'vitest'
import { getPublicFileUrl } from './storage'

describe('getPublicFileUrl', () => {
  it('returns public URL from supabase storage', () => {
    const url = getPublicFileUrl('portfolio-assets', 'bg/bg1.png')
    expect(url).toBe('https://sjqtbwdzhvbdtgiqwjab.supabase.co/storage/v1/object/public/portfolio-assets/bg/bg1.png')
  })
})

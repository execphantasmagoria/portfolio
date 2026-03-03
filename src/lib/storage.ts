import { supabase } from './supabaseClient'

export function getPublicFileUrl(bucket:string, path: string) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

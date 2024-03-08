import { supabase } from '@/utils/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
    if (error) {
        res.status(500).json({ message: 'Error fetching posts' })
        return
    }
    return res.status(200).json(data)
}
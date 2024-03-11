import { supabase } from '@/utils/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id, title, content } = req.body
    const { data, error } = await supabase
        .from('posts').insert({ id, title, content, createdAt: new Date().toISOString() })
    if (error) {
        res.status(500).json({ message: 'Error fetching posts' })
        return
    }
    return res.status(200).json(data)
}
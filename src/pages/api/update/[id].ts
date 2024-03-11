import { supabase } from '@/utils/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { notFound } from 'next/navigation';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { id } = req.query
    const { title, content } = req.body
    const { data, error } = await supabase
        .from('posts').update({ title, content, createdAt: new Date().toISOString() }).eq("id", id);
    if (error) {
        res.status(500).json({ message: 'Error fetching posts' })
        return
    }
    return res.status(200).json(data)
}
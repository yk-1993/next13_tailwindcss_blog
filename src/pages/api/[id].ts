import { supabase } from '@/utils/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { notFound } from 'next/navigation';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { id } = req.query
    switch (req.method) {
        case 'GET':
            const { data, error } = await supabase
                .from('posts')
                .select('*').eq("id", id).single();
            if (error) {
                res.status(500).json({ message: 'Error fetching posts' })
                return
            }
            if (!data) {
                notFound()
            }
            return res.status(200).json(data)
        case 'DELETE':
            const { error: deleteError } = await supabase
                .from('posts')
                .delete()
                .eq("id", id)
            if (deleteError) {
                res.status(500).json({ message: deleteError.message })
                return
            }
            return res.status(200).json({ message: '削除に成功しました。' })
        default:
            res.status(405).end()
            break
    }
}
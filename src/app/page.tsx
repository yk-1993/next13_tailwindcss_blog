import Image from 'next/image';
import ArticlesHome from './articles/page';
import { supabase } from '@/utils/supabaseClient';

export default function Home() {
  return <ArticlesHome />;
}

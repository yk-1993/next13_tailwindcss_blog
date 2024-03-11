'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EditBlogPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();
  const [url, setUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      setLoading(true);
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/${id}`);
      const data = await res.json();
      setUrl(data.id);
      setTitle(data.title);
      setContent(data.content);
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify({ title, content }),
    });

    setLoading(false);
    router.push('/');
    router.refresh();
  };
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">{title}の編集</h2>
      <form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            value={url}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
          <input
            type="text"
            value={title}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            value={content}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`py-2 px-4 border rounded-md ${
            loading
              ? 'bg-orange-300 cursor-not-allowed rounded-full'
              : 'bg-orange-400 hover:bg-orange-500'
          }`}
          disabled={loading}
        >
          編集
        </button>
      </form>
    </div>
  );
};

export default EditBlogPage;

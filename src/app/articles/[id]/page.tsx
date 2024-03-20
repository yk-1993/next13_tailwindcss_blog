import DeleteButton from '@/app/components/DeleteButton';
import EditButton from '@/app/components/EditButton';
import Image from 'next/image';
import React from 'react';

const Article = async ({ params }: { params: { id: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/blog/${params.id}`, { cache: 'no-store' });
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center m-10">{detailArticle.title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="flex gap-3 justify-end mt-3">
        <EditButton id={detailArticle.id} />
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;

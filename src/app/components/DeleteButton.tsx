'use client';

import { deleteArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React from 'react';

type DeleteButtonProps = {
  id: string;
};
const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const onHandleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API_URL}/api/${id}`, {
      method: 'DELETE',
    });
    const detailArticle = await res.json();

    router.push('/');
    router.refresh();
  };
  return (
    <button
      className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 cursor-pointer"
      onClick={onHandleDelete}
    >
      削除
    </button>
  );
};

export default DeleteButton;

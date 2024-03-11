'use client';

import { deleteArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React from 'react';

type EditButtonProps = {
  id: string;
};
const EditButton = ({ id }: EditButtonProps) => {
  const router = useRouter();
  const onHandleEdit = () => {
    router.push(`/articles/edit/${id}`);
  };

  return (
    <button
      className="bg-blue-400 text-white rounded-md px-4 py-2 hover:opacity-75 cursor-pointer"
      onClick={onHandleEdit}
    >
      編集
    </button>
  );
};

export default EditButton;

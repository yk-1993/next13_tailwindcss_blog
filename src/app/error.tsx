"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 my-4 rounded shadow-md max-w-md mx-auto p-2">
      <h3 className="font-bold mb-2">エラーが発生しました。</h3>
      <button onClick={reset} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-500">
        もう一度試す
      </button>
    </div>
  );
}

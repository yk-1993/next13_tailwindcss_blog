import Link from "next/link";
import React from "react";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="" width={1280} height={300} />
        </Link>
      </article>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="#" className="text-blue-700 pb-4 font-bold">
          Technology
        </Link>
        <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
          Next.js 勉強中
        </Link>
        <p className="text-sm pb-3 text-slate-900">By yk code, Published on 2024/02/29</p>
        <Link href="#" className="text-slate-900 pb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates inventore odio officiis, minus reprehenderit, dolorem, distinctio dolore dicta consectetur deleniti illum cum laboriosam ex velit quaerat nisi veritatis culpa architecto?
        </Link>
        <Link href="#" className="text-pink-800 hover:text-black">
          続きを読む
        </Link>
      </div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" alt="" width={1280} height={300} />
        </Link>
      </article>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="#" className="text-blue-700 pb-4 font-bold">
          Technology
        </Link>
        <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
          Next.js 勉強中
        </Link>
        <p className="text-sm pb-3 text-slate-900">By yk code, Published on 2024/02/29</p>
        <Link href="#" className="text-slate-900 pb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates inventore odio officiis, minus reprehenderit, dolorem, distinctio dolore dicta consectetur deleniti illum cum laboriosam ex velit quaerat nisi veritatis culpa architecto?
        </Link>
        <Link href="#" className="text-pink-800 hover:text-black">
          続きを読む
        </Link>
      </div>
    </div>
  );
};

export default ArticleList;

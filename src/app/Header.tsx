import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Next.js 13 blog</Link>
        </h1>
      </div>
      <nav className="text-sm font-medium">
        <Link href="/articles/new" className="bg-orange-300 p-3 rounded-md">
          記事を書く
        </Link>
      </nav>
    </header>
  );
};

export default Header;

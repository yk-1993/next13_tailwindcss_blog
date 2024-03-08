import { notFound } from "next/navigation";
import { Article } from "./types";
export const getAllArticles = async (): Promise<Article[]> => {
    /**
     * cache: "no-store" 毎回最新の情報を取得する
     * cache: "force-cache" キャッシュがあればをそれを利用する。ない場合は取得する。つまり最新情報を取得できない(default)
     * next: { revalidate: 10 } 指定した数値秒ごとに最新情報を再取得する
     */
    const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("error");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const articles = res.json();
    return articles;
}


export const getDetailArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`,
        { next: { revalidate: 60 } });
    console.log("res.status", res.status)
    if (res.status === 404) {
        notFound();
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const article = res.json();
    return article;
}

export const createArticle = async (id: string, title: string, content: string): Promise<Article> => {
    const currentDateTime = new Date().toISOString();
    const res = await fetch(`http://localhost:3001/posts/`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, title, content, createdAt: currentDateTime })
        });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (res.status === 404) {
        notFound();
    }

    const newArticle = res.json();
    return newArticle;
}

export const deleteArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`,
        {
            method: "DELETE",
        });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (res.status === 404) {
        notFound();
    }

    const deleteArticle = res.json();
    return deleteArticle;
}

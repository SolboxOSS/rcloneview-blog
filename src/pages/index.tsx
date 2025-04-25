// src/pages/support.tsx (Support Center 페이지 컴포넌트)
import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import SearchBar from "@theme/SearchBar";
import Link from "@docusaurus/Link";

export default function SupportCenter() {
  return (
    <Layout title="Support Center">
      {/* 헤더 영역 */}
      <header className="bg-[#F9F9F9] text-[#3333333] py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">RcloneView Support Center</h1>
        {/* Algolia 검색창 컴포넌트 */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-xl px-4">
            <SearchBar /> {/* Docusaurus Algolia 검색바 삽입 */}
          </div>
        </div>
        {/* Docusaurus Algolia 검색바 삽입 
        <div className="max-w-xl mx-auto">
          <SearchBar /> 
        </div>
*/}
      </header>

      {/* ...이하 본문 영역... */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* 3개 카드 그리드 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Tutorials 카드 */}
          <Link
            href="/tutorials/intro"
            className="block border rounded-lg p-6 shadow hover:bg-gray-50 hover:shadow-md transition"
          >
            <div className="text-5xl mb-4">📖</div>{" "}
            {/* 아이콘 (예시로 책 이모지) */}
            <h2 className="text-2xl font-semibold mb-2">Tutorials</h2>
            <p className="text-gray-700">
              Step-by-step guides to master RcloneView.
            </p>
          </Link>
          {/* Help Guides 카드 */}
          <Link
            href="/guides/intro"
            className="block border rounded-lg p-6 shadow hover:bg-gray-50 hover:shadow-md transition"
          >
            <div className="text-5xl mb-4">❓</div>{" "}
            {/* 아이콘 (물음표 이모지) */}
            <h2 className="text-2xl font-semibold mb-2">Help Guides</h2>
            <p className="text-gray-700">Learn how to use RcloneView.</p>
          </Link>
          {/* Community 카드 (외부 링크) */}
          <a
            href="https://forum.rcloneview.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-6 shadow hover:bg-gray-50 hover:shadow-md transition"
          >
            <div className="text-5xl mb-4">💬</div>{" "}
            {/* 아이콘 (커뮤니티 이모지) */}
            <h2 className="text-2xl font-semibold mb-2">Community</h2>
            <p className="text-gray-700">
              Join discussions and share your ideas.
            </p>
          </a>
        </div>

        {/* ...이하 Popular Articles 섹션... */}
        {/*
        <section className="mt-12">
          <h3 className="text-xl font-bold mb-4">🚀 Popular Articles</h3>
          <ul className="list-disc list-inside columns-2 gap-x-8">
            {popularArticles.map((article) => (
              <li key={article.url} className="mb-2">
                <a href={article.url} className="text-blue-600 hover:underline">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        */}
      </main>
    </Layout>
  );
}

/* eslint-disable react/no-array-index-key */
import React, { useState, useRef, useCallback } from 'react';

import usefetchLatestNews from './useFetchLatestNews';

import './index.css';

const LatestNewsPage = () => {
  const [pageNum, setPageNum] = useState(1);
  // eslint-disable-next-line prettier/prettier
  const { isLoading, error, newsArticles, hasMore } = usefetchLatestNews(pageNum);

  const observer = useRef();

  // Calculates if the last list ref is in view and if it is call the next page number
  const lastArticleRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  const renderItemContent = article => (
    <>
      <img src={article.urlToImage} alt="News Article" />
      <div>
        <strong>Author</strong>: {article.author}
      </div>
      <div>
        <strong>Content</strong>: {article.content}
      </div>
      <div>
        <strong>Description</strong>: {article.description}
      </div>
    </>
  );

  return (
    <div className="news-list-container">
      <h1>Latest News</h1>

      <ul>
        {newsArticles.map((article, i) => {
          if (newsArticles.length === i + 1) {
            return (
              <li key={i} ref={lastArticleRef}>
                {renderItemContent(article)}
              </li>
            );
          }
          return <li key={i}>{renderItemContent(article)}</li>;
        })}
      </ul>
      <div style={{ textAlign: 'center' }}>{isLoading && 'Loading...'}</div>
      <div style={{ textAlign: 'center' }}>{error && 'Error...'}</div>
    </div>
  );
};

export default LatestNewsPage;

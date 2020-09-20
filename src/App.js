import React, { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7b24a8abed7a43b8bbe4a133865154ba';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, []) 
  return (
    <div className="App">
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;

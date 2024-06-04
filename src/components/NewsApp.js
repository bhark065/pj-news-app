import { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import '../styles/global.css'
import newsAppStyle from '../styles/NewsApp.module.css'
// 뉴스 데이터 가져오기
import data from './news.json'

const NewsApp = function(props) {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        // fake API fetch
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(data.articles)
                setArticles(data.articles)
            }, 3000)
        })
    }, [])

    return (
        <div className={newsAppStyle['news_app']}>
            {
                articles.length === 0
                    ? <h1>표시할 뉴스가 없습니다.</h1>
                    :
                    <ul className={newsAppStyle['news_app_list']}>
                        {
                            articles.map((article, idx) => {
                                return (<li key={idx}>
                                    <NewsItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default NewsApp

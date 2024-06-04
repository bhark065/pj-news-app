import { Component } from 'react'
import newsItemStyle from '../styles/NewsItem.module.css'
import styled from 'styled-components'

const CircledImage = styled.img`
    border: 2px solid red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

const NewsItem = function({ article }) {    
    return (
        <div>
            <h1 className={newsItemStyle.title}><a className={newsItemStyle["title-link"]} href={article.url} target='_blank'>{article.title}</a></h1>
            <CircledImage src={article.urlToImage} />
            <p>{article.description}</p>
        </div>
    )
}

export default NewsItem
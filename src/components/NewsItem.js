import { Component } from 'react'
import style from './NewsItem.module.css'
import styled from 'styled-components'

const CircledImage = styled.img`
    border: 2px solid red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

const NewsItem = function(props) {
    const { title, description, url, urlToImage } = props.article
    
    return (
        <div>
            <h1 className={style.title}><a className={style.titleLink} href={url} target='_blank'>{title}</a></h1>
            <CircledImage src={urlToImage} />
            <p>{description}</p>
        </div>
    )
}

export default NewsItem
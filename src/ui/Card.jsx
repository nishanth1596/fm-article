import React, { useState } from 'react'
import iconFacebook from '/images/icon-facebook.svg'
import iconPinterest from '/images/icon-pinterest.svg'
import iconTwitter from '/images/icon-twitter.svg'

export default function Card({title, image, content, published, author}) {
    const [tooltipIsVisible, setTooltipIsVisible] = useState(false)

    return (
        <article className={`article ${tooltipIsVisible && 'active'}`}>
            <img className='article__img' src={image} alt={title} />
            <div className="article__body">
                <div className='article__main'>
                    <h2 className='title'>{title}</h2>
                    <p className='content'>{content}</p>
                </div>
                <footer className='article__footer'>
                    <div className="author-info">
                        <img className='avatar' src={author.avatar} alt="author avatar" />
                        <div className='text-wrapper'>
                            <p className='author-name'>{author.name}</p>
                            <p className='published-date'>{published}</p>
                        </div>
                    </div>
                    <div className="share-tooltip">
                        <span>SHARE</span>
                        <a href="#facebook">
                            <img src={iconFacebook} alt="share on facebook" />
                        </a>
                        <a href="#twitter">
                            <img src={iconTwitter} alt="share on twitter" />
                        </a>
                        <a href="#pinterest">
                            <img src={iconPinterest} alt="sahre on pinterest" />
                        </a>
                    </div>
                    <button onClick={() => setTooltipIsVisible(!tooltipIsVisible)} className='share-btn' aria-label="Share" type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                    </button>
                </footer>
            </div>
        </article>
  )
}

import React from 'react'

const AllNews = ({allNews, deleteNews}) => {
    const newsList = allNews.length ? (
        allNews.map(news => {
            if (news.truth === "False") {
                return (
                    <div className='collection-item' key={ news.id }>
                        <span onClick={() => {deleteNews(news.id)}}>{ news.content }
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                        <span className='notTrue'>{ news.truth }</span>
                        </span>
                    </div>
                )
            }

            else {
                return (
                    <div className='collection-item' key={ news.id }>
                        <span onClick={() => {deleteNews(news.id)}}>{ news.content }
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        <span className='notFalse'>{ news.truth }</span>
                        </span>
                    </div>
                )
            }
            
        })
    ) :(
        <p className='empty'> No News Currently!</p>
    )
    return (
        <div className='list todos'>
            {newsList}
        </div>
    )
}

export default AllNews
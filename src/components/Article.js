import React from 'react'


class Article extends React.Component{


    render() {

        const {articleId, articleImg, articleTitle, articleContent} = this.props

        return (
        
             <article id={articleId} className="newsArticles">

             <img src={require(`../img/${articleImg}`)} alt="actualité" /> 

                <h2 className="newsTitle"> 
                    {articleTitle}
                </h2>

                <p className="newsContent"> 
                    {articleContent}
                </p>

            </article>
        )
    }
}

export default (Article)

import React from 'react'

class Article extends React.Component{


    render() {

        const {articleId, articleImg, articleTitle, articleContent} = this.props

        return (
             <article id={articleId} className="trois-cols-space col-text-itt cols-article">

                <img src={require(`../img/${articleImg}`)} alt="actualité" />

                <h2> 
                    {articleTitle}
                </h2>

                <div className="article-content">
                    <p> 
                        {articleContent}
                    </p>
                </div>

            </article>
        )
    }
}

export default (Article)

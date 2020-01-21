import React from 'react'

class Article extends React.Component{


    render() {

        const {articleId, articleImg, articleTitle, articleContent} = this.props

        return (
             <article id={articleId} className="trois-cols-space col-text-itt">

                <img src={require(`../img/${articleImg}`)} alt="actualité" />

                <h2> 
                    {articleTitle}
                </h2>

                <p> 
                    {articleContent}
                </p>

            </article>
        )
    }
}

export default (Article)

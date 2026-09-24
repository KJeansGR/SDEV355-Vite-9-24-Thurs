
export default function BookCard({title, author, pages, rating}){

    return(
        <article className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-author">Author: {author}</p>
            {pages &&
                <p className="card-author">Pages: {pages}</p>
            } 
            {rating &&
                <p className="card-author">Rating: {"★".repeat(rating)}</p>
            }
            <span>This is a span</span> 
            

        </article>
    )
}
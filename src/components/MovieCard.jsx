/* eslint-disable react/prop-types */
const MovieCard = (props) => {
    const { title, director, hasOscars, _id } = props.movie;
    return (
        <li >
            <h2>{title}</h2>
            <h3>{director}</h3>
            {/* If we have oscars I want to display 🏆 */}
            <p>{hasOscars ? "🏆" : "🚫"}</p>
            <button onClick={() => props.deleteMovie(_id)}>DELETE</button> 
        </li>
    )
}

export default MovieCard;
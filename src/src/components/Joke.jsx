export default function Joke({setup, punchline, upvotes, downvotes}){
    return <article className="joke">
        <h3>Joke</h3>
        {/* If setup and punchline is truthy value, only then render it */}
        {setup && <p><span>Setup:</span> {setup}</p>}
        {punchline && <p><span>Punchline:</span> {punchline}</p>}
        <p><span>Up Votes: {upvotes}</span></p>
        <p><span>Down Votes: {downvotes}</span></p>
    </article>
}
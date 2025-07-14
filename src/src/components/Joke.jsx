import {useState} from 'react'

export default function Joke({setup, punchline, upvotes, downvotes}){
    
    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown(prevState => !prevState);
    }
    
    return <article className="joke">
        <h3>Joke</h3>
        {/* If setup and punchline is truthy value, only then render it */}
        {setup && <p><span>Setup:</span> {setup}</p>}
        {isShown && punchline && <p><span>Punchline:</span> {punchline}</p>}
        <button onClick={handleClick}>{isShown? "Hide": "Show"} Punchline</button>
        <p><span>Up Votes: {upvotes}</span>{"   "}<span>Down Votes: {downvotes}</span></p>
    </article>
}
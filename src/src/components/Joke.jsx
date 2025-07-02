export default function Joke({setup, punchline}){
    return <article class="joke">
        <h3>Joke</h3>
        <p><span>Setup:</span> {setup}</p>
        <p><span>Punchline:</span> {punchline}</p>
    </article>
}
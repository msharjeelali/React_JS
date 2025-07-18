import Joke from "./Joke"
import JokesData from "./JokesData";
import "./Joke.css"

export default function JokeProject(){
    const jokesElement = JokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} upvotes={joke.upvotes} downvotes={joke.downvotes} />
    })
    
    return (<section>
        <h2>Jokes Challenge (Scrimba)</h2>
        {jokesElement}
        <p>This is a challenge from <a href="https://scrimba.com/home">Scrimba</a> <a href="https://scrimba.com/learn-react-c0e">Learn React</a> course.</p>
    </section>);
}
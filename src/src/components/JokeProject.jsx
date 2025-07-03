import Joke from "./Joke"
import jokesData from "./jokesData";
import "./Joke.css"

export default function JokeProject(){
    const jokesElement = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} upvotes={joke.upvotes} downvotes={joke.downvotes} />
    })
    
    return (<section>
        <h2>Jokes Challenge</h2>
        {jokesElement}
        <p>This is a challenge from <a href="https://scrimba.com/home">Scrimba</a> <a href="https://scrimba.com/learn-react-c0e">Learn React</a> course.</p>
    </section>);
}
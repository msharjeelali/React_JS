import Joke from "./Joke"
import "./Joke.css"

export default function JokeProject(){
    const jokes = [{
        "setup": "I got my daughter a fridge for her birthday.",
        "punchline": "I can't wait to see her face light up when she opens it."
    }, {
        "setup": "How did the hacker escape the police?",
        "punchline": "He just ransomware!"
    }, {
        "setup": "Why don't pirates travel on mountain roads?",
        "punchline": "Scurvy."
    }, {
        "setup": "Why do bees stay in the hive in the winter?",
        "punchline": "Swarm."
    }, {
        "setup": "What's the best thing about Switzerland?",
        "punchline": "I don't know, but the flag is a big plus!"
    }];

    return (<section>
        <h2>Jokes Challenge</h2>
        {jokes.map(element => (
            <Joke setup={element.setup} punchline={element.punchline} />
        ))}
        <p>This is a challenge from <a href="https://scrimba.com/home">Scrimba</a> <a href="https://scrimba.com/learn-react-c0e">Learn React</a> course.</p>
    </section>);
}
import React from "react"
import Joke from "./Components/Joke.js"

function App() {
    return (
        <div className="Jokes">
            <Joke 
                punchline="Punchline1"
            />
            <Joke 
                question="Question2" 

            />
            <Joke 
                question="Question3" 
                punchline="Punchline3"
            />
            <Joke 
                question="Question4" 
                punchline="Punchline4"
            />
            <Joke 
                question="Question5" 
                punchline="Punchline5"
            />
        </div>
    )
}

export default App
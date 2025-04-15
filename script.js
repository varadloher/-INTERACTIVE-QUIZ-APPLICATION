const questions = {
    cricket: [
        { q: "Who has scored the most runs in international cricket?", options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"], answer: 2 },
        { q: "Which country won the first Cricket World Cup?", options: ["India", "West Indies", "Australia", "England"], answer: 1 },
        { q: "Who holds the record for the fastest century in ODI cricket?", options: ["AB de Villiers", "Chris Gayle", "Virender Sehwag", "Shahid Afridi"], answer: 0 },
        { q: "What does LBW stand for?", options: ["Leg Ball Wicket", "Leg Before Wicket", "Long Ball Wide", "Left Batting Way"], answer: 1 },
        { q: "Which player has taken 10 wickets in a Test match innings?", options: ["Anil Kumble", "Jim Laker", "Shane Warne", "Muttiah Muralitharan"], answer: 1 },
        { q: "What is the maximum number of overs in an ODI match?", options: ["20", "50", "40", "60"], answer: 1 },
        { q: "Who is known as the 'God of Cricket'?", options: ["MS Dhoni", "Virat Kohli", "Sachin Tendulkar", "Rahul Dravid"], answer: 2 }
    ],
    football: [
        { q: "Which country won the FIFA World Cup in 2018?", options: ["Germany", "Brazil", "France", "Argentina"], answer: 2 },
        { q: "Who has won the most Ballon d'Or awards?", options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"], answer: 1 },
        { q: "Which club has won the most UEFA Champions League titles?", options: ["Manchester United", "FC Barcelona", "Real Madrid", "Bayern Munich"], answer: 2 },
        { q: "Who scored the famous 'Hand of God' goal in the 1986 World Cup?", options: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Ronaldinho"], answer: 1 },
        { q: "What is the term used when a player scores three goals in a single match?", options: ["Triple Goal", "Hat-trick", "Golden Strike", "Power Shot"], answer: 1 },
        { q: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: 3 },
        { q: "What is the duration of a standard football match?", options: ["60 minutes", "70 minutes", "80 minutes", "90 minutes"], answer: 3 }
    ],
    tennis: [
        { q: "Who has won the most Grand Slam singles titles in men's tennis?", options: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras"], answer: 0 },
        { q: "Which tournament is played on clay courts?", options: ["Wimbledon", "US Open", "French Open", "Australian Open"], answer: 2 },
        { q: "How many sets does a player need to win in a Grand Slam men's singles match?", options: ["2", "3", "4", "5"], answer: 1 },
        { q: "Who was the first female tennis player to win 23 Grand Slam titles in the Open Era?", options: ["Serena Williams", "Martina Navratilova", "Steffi Graf", "Venus Williams"], answer: 0 },
        { q: "Which country hosts the Australian Open?", options: ["USA", "UK", "Australia", "France"], answer: 2 },
        { q: "What is the name of the trophy given to the Wimbledon Men's Singles champion?", options: ["Claret Jug", "Musketeers' Cup", "Norman Brookes Challenge Cup", "Gentlemen's Singles Trophy"], answer: 3 },
        { q: "What is the maximum number of challenges allowed per set in Grand Slam matches?", options: ["3", "4", "5", "6"], answer: 0 }
    ],
    kabaddi: [
        { q: "How many players are there in a kabaddi team on the field?", options: ["5", "6", "7", "8"], answer: 2 },
        { q: "Which country has won the most Kabaddi World Cup titles?", options: ["Pakistan", "India", "Iran", "Bangladesh"], answer: 1 },
        { q: "What is the duration of a standard kabaddi match?", options: ["30 minutes", "40 minutes", "50 minutes", "60 minutes"], answer: 1 },
        { q: "Which term is used when a raider successfully touches the opponent and returns?", options: ["Super Raid", "Touchpoint", "Bonus Point", "Tackle"], answer: 0 },
        { q: "In kabaddi, what is the minimum number of players required to continue a match?", options: ["3", "5", "7", "9"], answer: 1 },
        { q: "Which team won the first-ever Pro Kabaddi League?", options: ["U Mumba", "Patna Pirates", "Jaipur Pink Panthers", "Bengal Warriors"], answer: 2 },
        { q: "What is the maximum number of points a raider can score in a single raid?", options: ["3", "4", "5", "6"], answer: 2 }
    ]
};

let sport = localStorage.getItem("selectedSport");
let currentQuestion = 0;
let score = 0;

document.getElementById("sport-title").textContent = sport.toUpperCase() + " Quiz";

function loadQuestion() {
    const q = questions[sport][currentQuestion];
    document.getElementById("question").textContent = q.q;
    document.getElementById("options").innerHTML = q.options.map((opt, i) => `<button onclick="checkAnswer(${i})">${opt}</button>`).join("");
    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(selected) {
    if (selected === questions[sport][currentQuestion].answer) {
        score++;
    }
    document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
    if (++currentQuestion < questions[sport].length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    
    let feedback = "";
    if (score === questions[sport].length) {
        feedback = "🏆 Excellent! You got all answers correct!";
    } else if (score >= 5) {
        feedback = "👍 Great job! You did really well!";
    } else if (score >= 3) {
        feedback = "🙂 Good effort! Keep practicing!";
    } else {
        feedback = "😢 Better luck next time! Keep learning!";
    }

    document.getElementById("score").innerHTML = `Your Score: <b>${score}/${questions[sport].length}</b><br>${feedback}`;
    document.getElementById("nextBtn").style.display = "none";
}

loadQuestion();

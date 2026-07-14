import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MockTest.css";
import { API_URL } from "../config";

const MockTest = () => {

    const { subject } = useParams();

    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {

        fetch(`${API_URL}/api/mock/${subject}`,{
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                setQuestions(data);
            })
            .catch(err => console.log(err));

    }, [subject]);

    function nextQuestion(correct) {

        let newScore = score;

        if (correct) {
            newScore = score + 1;
            setScore(newScore);
        }

        if (current < questions.length - 1) {

            setCurrent(current + 1);
            setShowAnswer(false);
            setUserAnswer("");

        } else {

            alert(`Mock Test Finished!\n\nYour Score: ${newScore}/${questions.length}`);

        }
    }

    if (questions.length === 0) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="mock-container">

            <h1>{subject} Mock Test</h1>

            <h3>
                Question {current + 1} / {questions.length}
            </h3>

            <div className="question-card">

                <h2>{questions[current].question}</h2>

                <textarea
                    rows="6"
                    placeholder="Type your answer here..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                />

                <br /><br />

                {!showAnswer && (
                    <button onClick={() => setShowAnswer(true)}>
                        Show Answer
                    </button>
                )}

                {showAnswer && (
                    <>
                        <h3>Correct Answer</h3>

                        <p>{questions[current].answer}</p>

                        <h4>Did you answer correctly?</h4>

                        <button onClick={() => nextQuestion(true)}>
                            ✔ Yes
                        </button>

                        <button
                            onClick={() => nextQuestion(false)}
                            style={{ marginLeft: "10px" }}
                        >
                            ✖ No
                        </button>
                    </>
                )}

            </div>

        </div>
    );
};

export default MockTest;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Questions.css";
import jsPDF from "jspdf";

const Questions = () => {

    const { subject } = useParams();

    const [que, setQue] = useState([]);

    useEffect(() => {

        async function fetchQuestions() {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/questions/${subject}`,
                    {
                        credentials: "include"
                    }
                );

                const data = await response.json();

                if (Array.isArray(data)) {
                    setQue(data);
                } else {
                    alert(data.msg);
                    setQue([]);
                }

            } catch (err) {
                console.error("Error fetching questions:", err);
            }

        }

        fetchQuestions();

    }, [subject]);

    function downloadPdf() {
        const doc = new jsPDF();

        let text = "";

        que.forEach((q, index) => {
            text += `${index + 1}. ${q.question}\n`;
            text += `Answer: ${q.answer}\n\n`;
        });

        doc.text(text, 10, 10);

        doc.save("Questions.pdf");
    }

    return (

        <div className='questions-container'>

            <div className='questions-heading'>
                <h1>Interview Questions</h1>
                <button className="download-btn" onClick={downloadPdf}>PDF</button>
            </div>

            <div className='questions-list'>

                {que.length > 0 ? (

                    que.map((q) => (

                        <div key={q._id} className='questions-card'>

                            <h2>Question: {q.question}</h2>

                            <p>Answer: {q.answer}</p>

                        </div>

                    ))

                ) : (

                    <h3>No Questions Found</h3>

                )}

            </div>

        </div>

    );
};

export default Questions;
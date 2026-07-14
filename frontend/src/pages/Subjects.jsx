import React from 'react';
import './Subjects.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';

const Subjects = () => {

  const navigate = useNavigate();

  return (
    <>

      <Navbar />

      <div className="subject-container">

        <h1 className="heading">Subjects</h1>

        {/* Individual Subjects */}

        <div className="section">

          <h2 className="section-title">
            Individual Subjects
          </h2>

          <div className="subject-grid">

            <div className="subject-card">
              <h2>HTML</h2>
              <p>Learn HTML interview questions.</p>
              <button onClick={() => navigate("/subjects/HTML")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/HTML`)}
              >
                Mock Test
              </button>

            </div>

            <div className="subject-card">
              <h2>CSS</h2>
              <p>Master CSS concepts and interviews.</p>
              <button onClick={() => navigate("/subjects/CSS")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/CSS`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>JavaScript</h2>
              <p>ES6, DOM and interview questions.</p>
              <button onClick={() => navigate("/subjects/JavaScript")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/JavaScript`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>React JS</h2>
              <p>Hooks, Router, Redux and projects.</p>
              <button onClick={() => navigate("/subjects/ReactJS")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/ReactJS`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>Node JS</h2>
              <p>Backend development and APIs.</p>
              <button onClick={() => navigate("/subjects/NodeJS")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/NodeJS`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>MongoDB</h2>
              <p>Database concepts and queries.</p>
              <button onClick={() => navigate("/subjects/MongoDB")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/MongoDB`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>Python</h2>
              <p>python is Future.</p>
              <button onClick={() => navigate("/subjects/Python")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/Python`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>Django</h2>
              <p>python backend .</p>
              <button onClick={() => navigate("/subjects/Django")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/Django`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>Java</h2>
              <p>core java .</p>
              <button onClick={() => navigate("/subjects/Java")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/Java`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card">
              <h2>Springboot</h2>
              <p>java backend.</p>
              <button onClick={() => navigate("/subjects/Spring Boot")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/Spring Boot`)}
              >
                Mock Test
              </button>
            </div>
          </div>

        </div>



        <div className="section">

          <h2 className="section-title">
            Career Paths
          </h2>

          <div className="subject-grid">

            <div className="subject-card stack">
              <h2>MERN Stack</h2>
              <p>MongoDB • Express • React • Node</p>
              <button onClick={() => navigate("/subjects/MERN")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/MERN`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card stack">
              <h2>Java Full Stack</h2>
              <p>Java • Spring Boot • React • MySQL</p>
              <button onClick={() => navigate("/subjects/JFS")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/JFS`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card stack">
              <h2>Python Full Stack</h2>
              <p>Python • Django • React • PostgreSQL</p>
              <button onClick={() => navigate("/subjects/PFS")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/PFS`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card stack">
              <h2>Data Analytics</h2>
              <p>Excel • SQL • Python • Power BI</p>
              <button onClick={() => navigate("/subjects/DA")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/DA`)}
              >
                Mock Test
              </button>
            </div>

            <div className="subject-card stack">
              <h2>Data Engineering</h2>
              <p>Python • Spark • Kafka • AWS</p>
              <button onClick={() => navigate("/subjects/DE")}>Start Preparation</button>

              <button
                onClick={() => navigate(`/mock/DE`)}
              >
                Mock Test
              </button>
            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default Subjects;
import { useState, useEffect } from 'react'
import Latex from 'react-latex-next'
import ProblemContent from './ProblemContent';
import { Problem as ProblemModel } from '../../models/Problem'
import { getProblemAsync } from '../../actions/problem';

const Problem = () => {
  const [problem, setProblem] = useState<ProblemModel>(new ProblemModel())
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getProblemAsync('1')
      .then(problemResponse => {
        setProblem(problemResponse);
        setLoading(false)
      })
      .catch(e => console.log(e))
  }, [loading]);

  return (
    <div className="problem-page-container">
      <div className="jumbotron text-center bg-dark text-white">
        <h1>  <Latex>\(\gamma\)</Latex> Online Judge</h1>
        <p>Problemas e eventos de programação competitiva</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-2">
          <Latex>{'\\(x_1\\)'}</Latex>
        </div>
        <ProblemContent
          className="col-8"
          problem={problem}
        />
      </div>
    </div>
  );
};
export default Problem;


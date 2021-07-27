import { useState, useEffect } from 'react'
import Latex from 'react-latex-next'
import ProblemContent from './ProblemContent';
import { Problem as ProblemModel } from '../../models/Problem'
import { getProblemAsync } from '../../actions/problem';
import { RouteComponentProps, useParams } from "react-router-dom";
import Header from '../Header';
import ProblemSideBar from './ProblemSideBar';

const Problem = ({ match }: RouteComponentProps<ProblemRouteParams>) => {
  const [problem, setProblem] = useState<ProblemModel>(new ProblemModel())
  const [isFeatching, setFeching] = useState<boolean>(true)

  useEffect(() => {
    getProblemAsync(match.params.problemId)
      .then(problemResponse => {
        setProblem(problemResponse);
        setFeching(false)
      })
  }, [isFeatching]);

  return (
    <div>
      <Header />
      <div className="row justify-content-center">
        <ProblemSideBar className="col-2" />
        <ProblemContent className="col-8" problem={problem} />
      </div>
    </div>
  );
};
export default Problem;

type ProblemRouteParams = { problemId: string };
import { useState, useEffect } from 'react'
import ProblemContent from './ProblemContent';
import { Problem as ProblemModel } from '../../models/Problem'
import { getProblemAsync } from '../../actions/problem';
import { RouteComponentProps } from "react-router-dom";
import Header from '../Header';
import ProblemSideBar from './ProblemSideBar';
import LoadingSpinner from '../LoadingSpinner';

const Problem = ({ match }: RouteComponentProps<ProblemRouteParams>) => {
  const [problem, setProblem] = useState<ProblemModel>(new ProblemModel())
  const [isFetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    setFetching(false);
    getProblemAsync(match.params.problemId)
      .then(problemResponse => {
        setProblem(problemResponse);
        setFetching(false)
      })
  }, [match.params.problemId]);

  return (
    <div>
      <Header />
      {(isFetching) ? <LoadingSpinner /> :
        <div className="row justify-content-center">
          <ProblemSideBar className="col-2" />
          <ProblemContent className="col-8" problem={problem} />
        </div>
      }

    </div>
  );
};
export default Problem;

type ProblemRouteParams = { problemId: string };
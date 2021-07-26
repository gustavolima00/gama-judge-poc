import Latex from 'react-latex-next'
import ProblemContent from './ProblemContent';

const statement = 'You are given a person\'s systolic blood pressure, $A$, and diastolic blood pressure, $B$.\nFind the mean arterial pressure, $C$, which we define as follows:\n $C = \\frac{A-B}{3} + B$';
const sampleInputs =
  [
    {
      title: "Sample input 1",
      input: "1 2 3",
      output: "a b c"
    },
    {
      title: "Sample input 2",
      input: "2 3 4",
      output: "c d e"
    }
  ]
const constraints = [
  '$50$ $\\le$ $B$ $\\leq$ $A$ $\\leq$ $300$ ',
  'All values in input are integers.'
]

const Problem = () => {
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
          title="A. Problem Title"
          statement={statement}
          constraints={constraints}
          sampleInputs={sampleInputs}
        />
      </div>
    </div>
  );
};
export default Problem;


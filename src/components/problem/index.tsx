import Latex from 'react-latex-next'
import ProblemContent from './ProblemContent';

const content = 'Lorem ipsum \\(x_1\\) dolor \\[\\sin(\\alpha) + \\cos(\\theta)\\] sit amet, consectetur adipisicing elit...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...\nLorem ipsum dolor \\(x^2\\) sit amet, consectetur adipisicing elit...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...';
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
  '1 $\\le$ A $\\leq$ $10^5$',
  '1 $\\le$ B $\\leq$ $10^5$',
  '1 $\\le$ C $\\leq$ $10^{18}$',
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
          context={content}
          constraints={constraints}
          sampleInputs={sampleInputs}
        />
      </div>
    </div>
  );
};
export default Problem;


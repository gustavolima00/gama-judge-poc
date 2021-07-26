import Latex from 'react-latex-next'
import "bootstrap/dist/css/bootstrap.min.css";

const content = 'Lorem ipsum \\(x_1\\) dolor \\[\\sin(\\alpha) + \\cos(\\theta)\\] sit amet, consectetur adipisicing elit...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...\nLorem ipsum dolor \\(x^2\\) sit amet, consectetur adipisicing elit...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris...';

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
          constraints={["a>b"]}
          sampleInputs={
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
          }
        />
      </div>
    </div>
  );
};
export default Problem;

const ProblemContent = ({ className, title, context, constraints = [], sampleInputs = [] }: ProblemContentProps) => {
  return (
    <div className={className}>

      <h1>{title}</h1>
      <hr />
      <p><Latex>{context}</Latex></p>
      {(constraints.length !== 0) &&
        <div>
          <h2>Contrains</h2>
          <div>
            {constraints.map((constraint, i) => {
              return (
                <li key={i}><Latex>{constraint}</Latex></li>
              )
            })}
          </div>
        </div>
      }
      {
        sampleInputs.length !== 0 &&
        <div>
          <hr />
          {
            sampleInputs.map((sample, i) => {
              return (
                <div key={i}>
                  <h3>{sample.title}</h3>
                  <div className="panel panel-default">
                    <div className="panel-heading">Input</div>
                    <div className="panel-body">{sample.input}</div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">Output</div>
                    <div className="panel-body">{sample.output}</div>
                  </div>
                </div>
              )
            })}
        </div>
      }
      <hr />
    </div>
  )
}

type ProblemContentProps = {
  className?: string
  title: string
  context: string
  constraints?: string[]
  sampleInputs?: SampleInput[]
}

type SampleInput = {
  title: string
  input: string
  output: string
}
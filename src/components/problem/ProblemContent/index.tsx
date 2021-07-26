import Latex from 'react-latex-next'

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
  
  export default ProblemContent;

  export type ProblemContentProps = {
    className?: string
    title: string
    context: string
    constraints?: string[]
    sampleInputs?: SampleInput[]
  }
  
  export type SampleInput = {
    title: string
    input: string
    output: string
  }
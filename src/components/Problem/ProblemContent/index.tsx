import Latex from 'react-latex-next'
import { Problem } from '../../../models/Problem'

const ProblemContent = ({ className, problem }: ProblemContentProps) => {
    const { title, statement, constraints, sampleInputs } = problem

    return (
        <div className={className}>
            <h1>{title}</h1>
            <hr />
            <h3>Problem Statement</h3>
            {
                statement.split('\n').map((line, i) =>
                    <p key={i}><Latex>{line}</Latex></p>)
            }
            {(constraints.length !== 0) &&
                <div>
                    <h3>Constrains</h3>
                    <div>
                        {constraints.map((constraint, i) =>
                            <li key={i}><Latex>{constraint}</Latex></li>
                        )}
                    </div>
                </div>
            }
            {
                sampleInputs.length !== 0 &&
                <div>
                    <hr />
                    {
                        sampleInputs.map((sample, i) =>
                            <div key={i}>
                                <h4>{`Test case ${i + 1}`}</h4>
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
                    }
                </div>
            }
            <hr />
        </div>
    )
}

export default ProblemContent;

export type ProblemContentProps = {
    className?: string
    problem: Problem
}
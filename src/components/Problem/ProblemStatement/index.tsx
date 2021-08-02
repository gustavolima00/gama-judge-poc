import Latex from 'react-latex-next'

const ProblemStatement = ({ statement }:ProblemStatementProps) => {
    return (
    <div>
        {statement.split('\n').map(renderLine)}
    </div>
    )
}
export default ProblemStatement;

const renderLine = (line:string, key:number) => {
    if(line.startsWith('\\image')){
        const image_url = line.slice('\\image'.length).trim()
        return(
            <img src={image_url}/>
        )
    }
    else{
        return(
            <p key={key}><Latex>{line}</Latex></p>
        )
    }
}
export type ProblemStatementProps = {
    statement:string
}
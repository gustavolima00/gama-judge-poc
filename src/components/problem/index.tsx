import Latex from 'react-latex-next'

const LaTex = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.'

const Problem = () => {
  return (
    <div className="problem-page-container">
      <div className="jumbotron text-center bg-dark text-white">
        <h1>  <Latex>\(\gamma\)</Latex> Online Judge</h1>
        <p>Problemas e eventos de programação competitiva</p>
      </div>
      <p><Latex>{LaTex}</Latex></p>
    </div>
  );
};
export default Problem;

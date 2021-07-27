
const ProblemSideBar = ({ className }: ProblemSideBarProps) => {
    return (
        <div className={className}>
            <h1> SideBar </h1>
        </div>
    )
}
export default ProblemSideBar;

export type ProblemSideBarProps = {
    className?: string
}
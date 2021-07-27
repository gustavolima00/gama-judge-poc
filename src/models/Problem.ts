export class Problem {
    constructor(data: any = {}) {
        this.title = data.title || ''
        this.statement = data.statement || ''
        this.constraints = data.constraints || []
        this.sampleInputs = data.sampleInputs || []
    }
    title: string
    statement: string
    constraints: string[]
    sampleInputs: SampleInput[]
}

export class SampleInput {
    constructor(data: any = {}) {
        this.input = data.input || ''
        this.output = data.output || ''
        this.hint = data.hint || ''
    }
    input: string
    output: string
    hint: string
}
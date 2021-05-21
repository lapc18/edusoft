
export class Columns {
    constructor(
        public label: string,
        public name: string,
        public width: number = 300,
        public isAction: boolean = false,
        public isLink: boolean = false,
        public isStatus: boolean = false,
    ) { }
}
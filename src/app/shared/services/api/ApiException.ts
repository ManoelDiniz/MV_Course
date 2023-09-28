export class ApiException extends Error {
    public readonly message:string = ''
    constructor(message:string){        
        super();
        this.name = 'ErrorException'
    }
}
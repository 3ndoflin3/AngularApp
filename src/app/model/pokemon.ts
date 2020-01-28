export class Pokemon {

    private _id: number;
    private _nombre: string;
    private _imagen: string;
            
    
    constructor( _nombre: string){
        this._id = 0;
        this._nombre = _nombre;
        this._imagen = 'https://pbs.twimg.com/media/DrhSSbNVAAALbRu.jpg';
    }


    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = (value !== undefined && value !== '') ? value : 'sin nombre parsero';
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get imagen(): string {
    return this._imagen;
    }

    public set imagen(value: string) {
    this._imagen = value;
    }


}

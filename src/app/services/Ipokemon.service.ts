import { Observable } from "rxjs";

export interface IPokemonService{

    /**
     * Recuperamos los datos en JSON de un Pokemon por su nombre
     * @param nombre: string, nombre del pokemon a buscar
     */
    getPokemon(nombre: string): Observable<any>;


    /**
     * Recupera un JSON de las caracteristicas de un Pokemon
     * 
     * @param id: number, identificador del pokemon
     * @see GET /api/v2/characteristic/{id}/
     */
    getCaracteristicas(id: number): Observable<any>;

}
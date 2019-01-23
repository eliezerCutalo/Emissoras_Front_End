import { Emissora } from "./emissora.model";

export class TotalAudienciaEmissora{
    constructor(
        public emissora?: Emissora,
        public data?: Date,
        public totalPontos_Audiencia?: Number
    ){}
}
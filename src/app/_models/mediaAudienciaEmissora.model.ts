import { Emissora } from "./emissora.model";

export class MediaAudienciaEmissora{
    constructor(
        public Emissora?: Emissora,
        public Data?: Date,
        public MediaPontos_Audiencia?: Number
    ){}
}
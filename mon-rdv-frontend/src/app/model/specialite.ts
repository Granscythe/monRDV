

export class Specialite {
  id: number;
  version: number;
  nom: string;
  description: string;


  constructor(id?: number, version?: number, nom?: string, description?: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.description = description;
  }
}

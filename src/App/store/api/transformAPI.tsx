import { Character } from "../../../utils/interface/Character"

export interface NewInterfaceForData {
  id: string
  name: string
  house: string
  yearOfBirth: number | string
  actor: string
  image: string
}

export const transformData = (response: Character[]): NewInterfaceForData[] => {
  return response.map(character => ({
    id: character.id,
    name: character.name,
    house: character.house || "not specified",
    yearOfBirth: character.yearOfBirth || " not specified",
    actor: character.actor || "not specified",
    image: character.image,
  }))
}

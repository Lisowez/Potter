import { createContext } from "react"
import { Character } from "../interface/Character"

export interface CharacterContextType {
  characters: Character[]
}

export const CharacterContext = createContext<CharacterContextType | null>(null)

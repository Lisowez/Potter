import { createContext } from "react"
import { NewInterfaceForData } from "../../App/store/api/transformAPI"

export interface CharacterContextType {
  characters: NewInterfaceForData[]
}

export const CharacterContext = createContext<CharacterContextType | null>(null)

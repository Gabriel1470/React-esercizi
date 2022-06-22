import { createContext } from "react";
import React from "react";
import { useContext } from "react";

export const Language = createContext('en') 

const strings = {
  it: {
      WELCOME: "Benvenuto! Prego visioni pure l'inventario delle armi"
  },
  en: {
      WELCOME: "Welcome! Please see the inventory of weapons as well?"
  }
}
export default function LanguageContext(){

const language = useContext(LanguageContext)

      return (
          <Language.Consumer>
              {((language) => {

                  return (
                      <h1>{strings[language].WELCOME}</h1>

                  )
              })}
          </Language.Consumer>
      )
  }






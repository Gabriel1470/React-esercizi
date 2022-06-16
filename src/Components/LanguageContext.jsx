import { createContext } from "react";
import React from "react";

export const Language = createContext('en') 

const strings = {
  it: {
      WELCOME: "Benvenuto! Prego visioni pure l'inventario delle armi"
  },
  en: {
      WELCOME: "Welcome! Please see the inventory of weapons as well?"
  }
}
export class LanguageContext extends React.Component {
  render() {


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
}





import React, { useEffect, useState } from 'react';
import TranslationItem from './Components/TranslationItem'
import AddTranslation from './Components/AddTranslation'
import Tabs from "./Components/tabs"
import Tab from "./Components/tab"
import { getTranslations, addTranslation, updateTranslation, deleteTranslation } from './API'
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [translations, setTranslations] = useState<ITranslation[]>([])

  useEffect(() => {
    fetchTranslations()
  }, [])

  const fetchTranslations = (): void => {
    getTranslations()
    .then(({ data: { translations } }: ITranslation[] | any) => setTranslations(translations))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveTranslation = (e: React.FormEvent, formData: ITranslation): void => {
    e.preventDefault()
    addTranslation(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Translation not saved")
        }
        setTranslations(data.translations)
      })
      .catch(err => console.log(err))
  }

  const handleUpdateTranslation = (translation: ITranslation): void => {
    updateTranslation(translation)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Translation not updated")
        }
        setTranslations(data.translations)
      })
      .catch(err => console.log(err))
  }
  
  const handleDeleteTranslation = (_id: string): void => {
    deleteTranslation(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Translation not deleted")
        }
        setTranslations(data.translations)
      })
      .catch(err => console.log(err))
  }

  return (
    <main className='App'>
      <h1>Translations</h1>
      <Tabs>
      <Tab title="Lemon">Lemon is yellow</Tab>
      <Tab title="Strawberry">Strawberry is red</Tab>
      <Tab title="Pear"> <AddTranslation saveTranslation={handleSaveTranslation} />
      {translations.map((translation: ITranslation) => (
        <TranslationItem
          key={translation._id}
          updateTranslation={handleUpdateTranslation}
          deleteTranslation={handleDeleteTranslation}
          translation={translation}
        />
      ))}</Tab>
      <Tab title='Statistics'>Hello Man</Tab>
    </Tabs>
    </main>
  )
}

export default App
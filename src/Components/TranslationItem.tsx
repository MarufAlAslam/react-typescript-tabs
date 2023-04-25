import React from "react"

type Props = TranslationProps & {
  updateTranslation: (translation: ITranslation) => void
  deleteTranslation: (_id: string) => void
}

const Translation: React.FC<Props> = ({ translation, updateTranslation, deleteTranslation }) => {
  const checkTranslation: string = translation.status ? `line-through` : ""
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTranslation}>{translation.english_string}</h1>
        <span className={checkTranslation}>{translation.translated_string}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateTranslation(translation)}
          className={translation.status ? `hide-button` : "Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTranslation(translation._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Translation
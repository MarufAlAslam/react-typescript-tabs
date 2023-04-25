import React, { useState } from 'react'

type Props = { 
  saveTranslation: (e: React.FormEvent, formData: ITranslation | any) => void 
}

const AddTranslation: React.FC<Props> = ({ saveTranslation }) => {
  const [formData, setFormData] = useState<ITranslation | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTranslation(e, formData)}>
      <div>
        <div>
          <label htmlFor='translator_id'>Name</label>
          <input onChange={handleForm} type='text' id='translator_id' />
        </div>
        <div>
          <label htmlFor='english_string'>Description</label>
          <input onChange={handleForm} type='text' id='english_string' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Translation</button>
    </form>
  )
}

export default AddTranslation
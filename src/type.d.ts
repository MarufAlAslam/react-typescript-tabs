interface ITranslation {
    _id: string
    translator_id: string
    english_string: string
    translated_string: string
    language: string
    flagged: boolean
    status: boolean
    createdAt?: string
    updatedAt?: string
  }
  
  interface TranslationProps {
    translation: ITranslation
  }
  
  type ApiDataType = {
    message: string
    status: string
    translations: ITranslation[]
    translation?: ITranslation
  }
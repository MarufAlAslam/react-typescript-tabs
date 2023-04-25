import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTranslations = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const translations: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/translations"
    )
    return translations
  } catch (error) {
    throw new Error("Failed to Get Translations")
  }
}

export const addTranslation = async (
    formData: ITranslation
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const translation: Omit<ITranslation, "_id"> = {
        translator_id: formData.translator_id,
        english_string: formData.english_string,
        translated_string: formData.translated_string,
        language: formData.language,
        flagged: false,
        status: false,
      }
      const saveTranslation: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + "/add-translation",
        translation
      )
      return saveTranslation
    } catch (error) {
      throw new Error("Failed to Add Translation")
    }
  }

  export const updateTranslation = async (
    translation: ITranslation
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const translationUpdate: Pick<ITranslation, "status"> = {
        status: true,
      }
      const updatedTranslation: AxiosResponse<ApiDataType> = await axios.put(
        `${baseUrl}/edit-translation/${translation._id}`,
        translationUpdate
      )
      return updatedTranslation
    } catch (error) {
      throw new Error("Failed to Update Translation")
    }
  }

  export const deleteTranslation = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const deletedTranslation: AxiosResponse<ApiDataType> = await axios.delete(
        `${baseUrl}/delete-translation/${_id}`
      )
      return deletedTranslation
    } catch (error) {
      throw new Error("Failed to Delete Translation")
    }
  }


import React from 'react'

type Props = {
  title: string
  children?: React.ReactNode
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div className='tab-contents'>{children}</div>
}

export default Tab
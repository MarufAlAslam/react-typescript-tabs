import { useEffect } from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  useEffect(() => {
    const tabButtons = document.querySelectorAll(".tab-button")
    tabButtons[0].classList.add("active")
  }, [index])

  const handleClick = () => {
    setSelectedTab(index)

    console.log("index", index)

    // toggle active class
    const tabButtons = document.querySelectorAll(".tab-button")
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove("active")
    }
    )
    tabButtons[index].classList.add("active")
  }

  return (
    <li>
      <button className={`tab-button`} onClick={handleClick}>{title}</button>
    </li>
  )
}

export default TabTitle
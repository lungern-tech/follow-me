import { useEffect, useState } from 'react';
import { getTextFromSelection } from "get-selection-more"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function App() {

  const [name, setName] = useState("");

  const [ timer, setTimer ] = useState(-1)

  const [ showLink, setShowLink ] = useState(false)

  const [ mousePosition, setMousePosition ] = useState({x: 0, y: 0})

  useEffect(() => {
    
    return document.addEventListener("selectionchange", (ev) => {
      console.log(ev)
      const selection = window.getSelection();
      const text = getTextFromSelection(selection)
      setName(text)
      confirmSelect(text)
    })
  }, []);

  useEffect(() => {
    return document.addEventListener("mouseup", (ev: MouseEvent) => {
      console.log('mouse: ', ev.clientX, ev.pageY)
      setMousePosition({
        x: ev.pageX,
        y: ev.pageY
      })
    })
  }, [])


const confirmSelect = (text: string) => {
  clearTimeout(timer)
  if (text) {
    const timerPointer = setTimeout(() => {
      setShowLink(true)
    }, 300)
    setTimer(timerPointer)
  } else {
    setShowLink(false)
  }
}

  return (
    <div className="flex gap-1 text-blue-500 px-2 py-1 bg-white shadow-lg border rounded-md" style={{ 
      position: 'absolute',
      zIndex: 10000,
      left: `${mousePosition.x + 20}px`,
      top: `${mousePosition.y + 20}px`,
      display: showLink ? 'flex' : 'none'
     }}>
      <a onMouseUp={ (e) => e.stopPropagation() } target='_blank' href={`https://x.com/${name}`} rel="noreferrer">
        <FontAwesomeIcon className='text-blue-500 w-5' icon={ faTwitter } />
      </a>
    </div>
  );
}

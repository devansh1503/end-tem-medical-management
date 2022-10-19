
import React, { useRef } from 'react'

function Uploadimg(props) {
    const img = useRef()
    const handleClick = (event)=>{
        event.preventDefault()
        localStorage.setItem('image',img.current.value)
        props.editimg(true)
    }
    const style = {
        width:"300px",
        margin:"20px"
    }
  return (
    <div>
      <form>
        <input ref={img} placeholder='Enter The Image link' style={style} />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default Uploadimg

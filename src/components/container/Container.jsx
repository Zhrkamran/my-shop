
import styled from './container.module.css'

function Container({children}) {
  return (
    <div className={styled['container-wrapper']}>
        {children}
    </div>
  )
}

export default Container
import styled from './spinner.module.css'

function Spinner() {
  return (
    <div className={styled['spinner']}>
        <span className={styled['loader']}></span>
    </div>
  )
}

export default Spinner
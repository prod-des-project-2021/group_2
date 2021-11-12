const { useState } = require('react')

const useModal = (data = false, defvalue = null) => {
  const [isShowing, setIsShowing] = useState(data)
  const [value, setValue] = useState(defvalue)
  function toggle(val, callback) {
    setIsShowing(!isShowing)
    setValue(val)
    if (callback && typeof callback === 'function') {
      callback()
    }
  }

  const getVal = () => value

  const toggleCheckShowing = () => {
    // eslint-disable-next-line no-unused-expressions
    isShowing && toggle()
  }
  return [isShowing, toggle, getVal, toggleCheckShowing]
}

export default useModal

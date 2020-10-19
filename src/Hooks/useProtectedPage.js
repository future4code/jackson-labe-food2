import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToLogin } from '../Router/Coordinator'

const useProtectedPage = () => {
  const history = useHistory()


  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      goToLogin(history)
    }
  }, [history])
}

export default useProtectedPage

import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { goToHome } from '../Router/Coordinator';

export const useUnprotectedPage = () => {
  const history = useHistory()

  const token = localStorage.getItem('token')

  useEffect(() => {

    if (token) {
      goToHome(history)
    }
  }, [history])
}

export default useUnprotectedPage

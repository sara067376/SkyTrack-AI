// src/hooks/useRedux.js
import { useDispatch, useSelector } from 'react-redux'

export const useRedux = () => {
  const dispatch = useDispatch()
  const selector = useSelector
  return { dispatch, selector }
}

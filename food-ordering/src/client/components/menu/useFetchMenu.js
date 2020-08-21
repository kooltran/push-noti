import { useAppContext } from '../../AppContext'
import {
  getMenuRequest,
  getMenuSuccess,
  getMenuFail
} from '../../actions/getMenuAction'
import { fetchMenuApi } from '../../api/fetchMenuApi'
import { useCallback } from 'react'

export const useFetchMenu = () => {
  const [, dispatch] = useAppContext()

  const fetchMenuList = useCallback(async () => {
    dispatch(getMenuRequest())
    try {
      const res = await fetchMenuApi()
      dispatch(getMenuSuccess(res))
    } catch (error) {
      dispatch(getMenuFail(error))
    }
  }, [dispatch])

  return fetchMenuList
}

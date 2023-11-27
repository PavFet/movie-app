import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

type DispatchFunc = () => AppDispatch
export const UseAppDispatch: DispatchFunc = useDispatch
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector
// Inside any component
import { useRedux } from '../hooks/useRedux'
import { increment } from '../features/counter/counterSlice'

const MyComponent = () => {
  const { dispatch, selector } = useRedux()
  const count = selector((state) => state.counter.value)

  return <button onClick={() => dispatch(increment())}>Increase {count}</button>
}

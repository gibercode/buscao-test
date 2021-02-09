// import { useSelector } from 'react-redux';
import { wrapper } from '../store'
import { getLocation } from '../store/actions'

const Testv = () => {

  return (
    <div>

    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getLocation())
)

export default Testv

import { FeaturedSlider } from '../components';
import { wrapper } from '../store'
import { getFeatured } from '../store/actions'

const Page = () => {
  return(
    <FeaturedSlider />
  )
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getFeatured())
)

export default Page;

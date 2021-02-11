import { FeaturedSlider } from '../components';
import { wrapper } from '../store';
import { getResources } from '../store/actions';

const Page = () => {
  return(
    <FeaturedSlider />
  )
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Page;

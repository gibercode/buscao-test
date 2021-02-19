import { getResources } from '../store/actions'
import { wrapper } from '../store'
import { FeaturedSlider } from "../components";

const FeturedSliderPage = () => (
  <FeaturedSlider />
);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default FeturedSliderPage;

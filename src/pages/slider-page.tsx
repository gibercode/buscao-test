
import { Slider } from '../components';
import { getResources } from '../store/actions'
import { wrapper } from '../store'

const SliderPage = () => (
  <Slider />
);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default SliderPage;

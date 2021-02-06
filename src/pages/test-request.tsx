import { getCategories } from '../graphql/querys'

const TestRequest = ({ categories }) => {
  return (
    <div>
      {
        categories.map((category, index) => (
          <ul key={index}>{category.name}</ul>
        ))
      }
    </div>
  )
}

export const getServerSideProps = async () => {
  const categories = await getCategories()
  return { props: { categories } }
}

export default TestRequest

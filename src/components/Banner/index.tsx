import { memo } from 'react'

const Banner = ({ section }) => (
  console.log(section),

  <>
    <div className="_container">

    </div>

    <style jsx>{`
      ._container {
        background-image: url(${section?.background?.sourceUrl});
        width: 100%;
        height: 490px;
      }
    `}</style>
  </>
)

export default memo(Banner)

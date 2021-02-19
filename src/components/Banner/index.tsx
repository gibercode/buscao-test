import { memo } from 'react'
import styles from './styles.module.scss'

const Banner = ({ section }) => (
  <>
    <div className="_container">
      <div className={styles._textContainer}>
        <div dangerouslySetInnerHTML={{__html: section?.content}} className={styles._content} />
      </div>
    </div>

    <style jsx>{`
      ._container {
        background-image: url(${section?.background?.sourceUrl});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 490px;
      }
    `}</style>
  </>
)

export default memo(Banner)

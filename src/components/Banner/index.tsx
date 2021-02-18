import { memo } from 'react'
import styles from './styles.module.scss'

const Banner = ({ section }) => (
  console.log(section.content),

  <>
    <div className="_container">
      <div style={{ display: 'flex', height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
        <div dangerouslySetInnerHTML={{__html: section?.content}} style={{ width: '80%' }} className={styles._content} />
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

import styles from './styles.module.scss'
import Search from '../Search'

const Welcome = ({ section }) => {

  return (
    <>
      <div className={"_main"}>
        <div className={styles._container}>
          <div className={styles._centerContainer}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>{section.title}</p>
            </div>
            <div className={styles._descriptionContainer}>
              <p className={styles._description}>{section.subtitle}</p>
            </div>
          </div>
        </div>
        <div className={styles._searchBuild}>
          <div>
            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles._blackfloor}>

        </div>
      </div>

      <style jsx>{`
        ._main {
          background-image: url(${section?.background?.sourceUrl});
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
          height: 80vh;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Welcome;

import Head from 'next/head';
import styles from '../../assets/styles/Home.module.css';
import Link from 'next/link';
import { changeState } from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = ({ test, action }) => {

  const changeTitle = () => {
    action.changeState('Hello world!');
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{test.title}</h1>
        <div>
          <button onClick={changeTitle}> Redux! </button>
        </div>

        <p>
          You can find more articles on the{' '}
          <Link href='/blog'>
            <a>blog articles page</a>
          </Link>
        </p>

      </main>
    </div>
  )
}

const mapStateToProps = ({ test }) => ({ test });

const mapDispatchToProps = dispatch => {
  const actions = {
    changeState
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
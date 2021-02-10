import { getStatePosts } from '../../store/actions';
import styles from './styles.module.scss'

const Search = ({ selects }) => {

    const { categories, states } = selects;

    return (
        <div className={styles._searchContent}>
            <div className={styles._selectContainer}>
                <div className={styles._pointContent}>
                    <div className={styles._point}></div>
                </div>
                <div className={styles._select}>
                    <label htmlFor="state">Ubicacion</label>
                    <select name="state">
                        <option value="">Todos</option>
                        {states.map((state) => (<option value={state.slug}>{state.name}</option>))}
                    </select>
                </div>
            </div>
            <div className={styles._selectContainer}>
                <div className={styles._pointContent}>
                    <div className={styles._point}></div>
                </div>
                <div className={styles._select}>
                    <label htmlFor="category">Categorias</label>
                    <select name="category" >
                        <option value="">Todos</option>
                        {categories.map((category) => (<option value={category.slug}>{category.name}</option>))}
                    </select>
                </div>
            </div>
            <div className={styles._inputContainer}>
                <input placeholder="Que estas buscando" />
                <button className={styles._goButton}>Ir</button>
            </div>
        </div>
    )
}

export default Search;
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { filterPosts } from '../../store/actions';
import styles from './styles.module.scss'

const Search = () => {
    const dispatch = useDispatch()
    const { categories, currentStates } = useSelector(state => state.resource);
    const [filter, setFilter] = useState(
        {
            category: '',
            title: ''
        }
    );

    const changeState = (event) => {
        dispatch(filterPosts(event.target.value, 'state'))
        setFilter({ ...filter, ...{ category: '', title: '' } })
    }

    const changeCategory = (event) => {
        dispatch(filterPosts(event.target.value, 'categories'))
        setFilter({ ...filter, ...{ category: event.target.value, title: '' } })
    }

    const changeTitle = (event) => {
        dispatch(filterPosts(event.target.value, 'title'))
        setFilter({ ...filter, ...{ title: event.target.value } })
    }


    return (
        <div className={styles._searchContent}>
            <div className={styles._selectContainer}>
                <div className={styles._pointContent}>
                    <div className={styles._point}></div>
                </div>
                <div className={styles._select}>
                    <label htmlFor='state'>Ubicacion</label>
                    <select name='state' onChange={changeState}>
                        <option value=''>Todos</option>
                        {currentStates.map((state, index) => (<option value={state.slug} key={index}>{state.name}</option>))}
                    </select>
                </div>
            </div>
            <div className={styles._selectContainer}>
                <div className={styles._pointContent}>
                    <div className={styles._point}></div>
                </div>
                <div className={styles._select}>
                    <label htmlFor='category'>Categorias</label>
                    <select name='category' value={filter.category} onChange={changeCategory} >
                        <option value=''>Todos</option>
                        {categories.map((category, index) => (<option value={category.slug} key={index}>{category.name}</option>))}
                    </select>
                </div>
            </div>
            <div className={styles._inputContainer}>
                <input placeholder='Que estas buscando' value={filter.title} />
                <button className={styles._goButton} onClick={changeTitle}>Ir</button>
            </div>
        </div>
    )
}

export default Search;

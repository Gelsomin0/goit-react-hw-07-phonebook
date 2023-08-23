import { useDispatch } from "react-redux";
import { changeFilterState } from "redux/filterSlice";
import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.filter_section}>
            <p>Search contact by keyword:
                <input
                    className={css.filter_input}    
                    type='text'
                    onChange={({ target: { value } }) => dispatch(changeFilterState(value))}
                />
            </p>
        </div>
    );
}
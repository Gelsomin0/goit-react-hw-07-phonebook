import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilterState } from "redux/filterSlice";
import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const handleInputText = ({ target: { value } }) => {
        setFilter(value);
        dispatch(changeFilterState());
    }

    return (
        <div className={css.filter_section}>
            <p>Search contact by keyword:
                <input
                    className={css.filter_input}    
                    type='text'
                    onChange={({ target: { value } }) => dispatch(changeFilterState(value))}
                    // value={filter}
                />
            </p>
        </div>
    );
}
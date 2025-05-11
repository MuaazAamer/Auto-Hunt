import { useState } from 'react';
import styles from './FilterBox.module.css';
import { useRouter } from 'next/router';


export default function FilterBox(props) { 
    const r=useRouter();
    const [filters, setFilters] = useState({
        Seats: 0,
        Engine_Type: '',
        Colours: '',
        Price: '',
    });

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const applyFilters = () => {
        r.push("car/filter/"+filters.Colours+"/"+filters.Engine_Type+"/"+filters.Price+"/"+filters.Seats)
    };

    return (
        <div className={styles.filterBox}>
            <button className={styles.closeButton} onClick={props.onClose}>×</button>
            <h2>Filter Cars</h2>
            <div className={styles.filterOption}>
                <label htmlFor="Seats">Seats:</label>
                <select name="Seats" id="Seats" value={filters.Seats} onChange={handleChange}>
                    <option value="">Any</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div className={styles.filterOption}>
                <label htmlFor="Engine_Type">Engine Type:</label>
                <select name="Engine_Type" id="Engine_Type" value={filters.Engine_Type} onChange={handleChange}>
                    <option value="">Any</option>
                    <option value="V8">V8</option>
                    <option value="V10">V10</option>
                    <option value="V12">V12</option>
                </select>
            </div>

            <div className={styles.filterOption}>
                <label htmlFor="Colours">Colours:</label>
                <select name="Colours" id="Colours" value={filters.Colours} onChange={handleChange}>
                    <option value="">Any</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Silver">Silver</option>
                </select>
            </div>

            <div className={styles.filterOption}>
                <label htmlFor="Price">Price:</label>
                <select name="Price" id="Price" value={filters.Price} onChange={handleChange}>
                    <option value="">Any</option>
                    <option value="50000">{"< 50000"}</option>
                    <option value="100000">{"< 100000"}</option>
                    <option value="300000">{"< 300000"}</option>
                </select>
            </div>

            <button className={styles.applyButton} onClick={applyFilters}>Apply Filters</button>
        </div>
    );
}

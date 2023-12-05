import React, { useState } from 'react';

const OrderByComponent = () => {
 const [orderBy, setOrderBy] = useState('');
 const [checkedAsc, setCheckedAsc] = useState(true);
 const [checkedDesc, setCheckedDesc] = useState(false);

 const handleOrder = (e) => {
    setOrderBy(e.target.value);
 };

 const handleCheckAsc = () => {
    setCheckedAsc(!checkedAsc);
    setCheckedDesc(false);
 };

 const handleCheckDesc = () => {
    setCheckedDesc(!checkedDesc);
    setCheckedAsc(false);
 };

 const orderOptions = ['Name', 'Population'];
 const directionOptions = ['Asc', 'Desc'];

 return (
    <div>
        <div>
            <label>
                Order By:
                <select value={orderBy} onChange={handleOrder}>
                    <option value="">None</option>
                    {orderOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
        <div>
            <input
                type="checkbox"
                id="asc"
                checked={checkedAsc}
                onChange={handleCheckAsc}
            />
            <label htmlFor="asc">Ascending</label>
        </div>
        <div>
            <input
                type="checkbox"
                id="desc"
                checked={checkedDesc}
                onChange={handleCheckDesc}
            />
            <label htmlFor="desc">Descending</label>
        </div>
    </div>
 );
};

export default OrderByComponent;


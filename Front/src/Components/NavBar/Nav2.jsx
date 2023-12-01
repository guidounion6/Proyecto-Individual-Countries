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



// import React, { useState } from 'react';

// function App() {
//  const [filter, setFilter] = useState('ALL');

//  const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//  };

//  return (
//     <div className="App">
//       <input value="ALL" type="radio" id="ALL" name="filter" onChange={handleFilterChange} />
//       <input value="CATEGORY_1" type="radio" id="CATEGORY_1" name="filter" onChange={handleFilterChange} />
//       <input value="CATEGORY_2" type="radio" id="CATEGORY_2" name="filter" onChange={handleFilterChange} />

//       {filter === 'ALL' && <p>Se muestra el contenido para todas las categorías</p>}
//       {filter === 'CATEGORY_1' && <p>Se muestra el contenido para la categoría 1</p>}
//       {filter === 'CATEGORY_2' && <p>Se muestra el contenido para la categoría 2</p>}
//     </div>
//  );
// }

// export default App;
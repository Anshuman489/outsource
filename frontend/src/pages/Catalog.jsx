import { useEffect, useState } from 'react';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [sortDir, setSortDir] = useState('asc');
  const nav = useNavigate();

  useEffect(() => {
    api.get('/products', { params: { sort: sortDir } })
       .then(r => setItems(r.data));
  }, [sortDir]);

  return (
    <div className="page-wrap">
      <h2>Farm Machinery Catalog</h2>

      <label style={{fontWeight:600}}>Sort by price:&nbsp;</label>
      <select value={sortDir} onChange={e => setSortDir(e.target.value)}>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      <div className="card-grid" style={{marginTop:'1.5rem'}}>
        {items.map(p => (
          <div key={p._id} className="card">
            <img 
              src={p.image} 
              alt={p.description}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/350x200?text=No+Image';
              }}
            />
            <h4>{p.description}</h4>
            <p>₹{p.price.toLocaleString()}</p>
            <button onClick={() => nav(`/beneficiary?pid=${p._id}`)}>
              Assign to VLE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

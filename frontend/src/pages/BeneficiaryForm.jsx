import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

export default function BeneficiaryForm() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [prod, setProd] = useState(null);
  const [form, setForm] = useState({ vleName:'', vlePhone:'', village:'' });

  useEffect(() => {
    const id = params.get('pid');
    if (id) api.get(`/products/${id}`).then(r => setProd(r.data));
  }, [params]);

  const submit = async e => {
    e.preventDefault();
    await api.post('/allocations', { productId: prod._id, ...form });
    alert('Saved!');
    navigate('/');
  };

  return (
    <div className="form-box">
      <h3>Beneficiary Details</h3>
      {prod && (
        <p style={{lineHeight:1.5}}>
          Assigning: <strong>{prod.description}</strong><br />
          Machine No: {prod.machineNumberPlate}
        </p>
      )}

      <form onSubmit={submit}>
        {['vleName','vlePhone','village'].map(k => (
          <input key={k} required placeholder={k.replace('vle','VLE ')}
            value={form[k]}
            onChange={e => setForm({...form, [k]: e.target.value})}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

import { useState } from 'react';
const fetchIATACode = async (city) => {
  const tokenRes = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET
    })
  });

  const tokenData = await tokenRes.json();
  const token = tokenData.access_token;

  const locationRes = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations?keyword=${city}&subType=AIRPORT`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const locationData = await locationRes.json();
  return locationData.data?.[0]?.iataCode || '';
};


export default function Flights() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/flights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        const originCode = await fetchIATACode(origin);
const destinationCode = await fetchIATACode(destination);

body: JSON.stringify({
  origin: originCode,
  destination: destinationCode,
  date
})


      });

      if (!res.ok) {
        throw new Error('Eitthvað fór úrskeiðis við flugleit');
      }

      const data = await res.json();
      setResults(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Leita að flugi ✈️</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input placeholder="Frá (t.d. KEF)" value={origin} onChange={e => setOrigin(e.target.value)} />
        <input placeholder="Til (t.d. CDG)" value={destination} onChange={e => setDestination(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Leita...' : 'Leita'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {loading && <p>⏳ Leita að flugi...</p>}

      {!loading && results.length === 0 && <p>Engin flug fundust. Prófaðu aðra dagsetningu eða flugvelli.</p>}

      {results.map((flight, i) => (
        <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <p><strong>Frá:</strong> {flight.itineraries[0].segments[0].departure.iataCode}</p>
          <p><strong>Til:</strong> {flight.itineraries[0].segments.slice(-1)[0].arrival.iataCode}</p>
          <p><strong>Verð:</strong> {flight.price.total} {flight.price.currency}</p>
        </div>
      ))}
    </div>
  );
}

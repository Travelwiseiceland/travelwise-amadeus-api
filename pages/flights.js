import { useState } from 'react';

export default function Flights() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch('/api/flights', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ origin, destination, date })
    });
    const data = await res.json();
    setResults(data.data || []);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Leita að flugi með Amadeus</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input placeholder="Frá (e.g. KEF)" value={origin} onChange={e => setOrigin(e.target.value)} />
        <input placeholder="Til (e.g. LHR)" value={destination} onChange={e => setDestination(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={handleSearch}>Leita</button>
      </div>
      {results.length === 0 && <p>Engin flug fundust...</p>}
      {results.map((flight, i) => (
        <div key={i} style={{ background: '#f0f0f0', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem' }}>
          <p><strong>Frá:</strong> {flight.itineraries[0].segments[0].departure.iataCode}</p>
          <p><strong>Til:</strong> {flight.itineraries[0].segments.slice(-1)[0].arrival.iataCode}</p>
          <p><strong>Fargjald:</strong> {flight.price.total} {flight.price.currency}</p>
        </div>
      ))}
    </div>
  );
}
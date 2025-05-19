export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Velkomin í TravelWise ✈️</h1>
      <p>Smelltu hér til að leita að flugum:</p>

      <a
        href="/flights"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        ➡️ Fara í flugleitarvél
      </a>
    </div>
  );
}

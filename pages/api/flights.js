export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { origin, destination, date } = req.body;

  if (!origin || !destination || !date) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const tokenRes = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET,
      }),
    });

    if (!tokenRes.ok) {
      throw new Error('Failed to fetch access token');
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const flightsRes = await fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=1`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!flightsRes.ok) {
      throw new Error('Failed to fetch flights');
    }

    const flightsData = await flightsRes.json();

    return res.status(200).json(flightsData);
  } catch (error) {
    console.error('API handler villa:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

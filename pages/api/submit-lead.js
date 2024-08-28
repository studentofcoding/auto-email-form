import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, company, location } = req.body;
      const response = await axios.post(process.env.N8N_WEBHOOK_URL, {
        airtableBaseId: process.env.AIRTABLE_BASE_ID,
        body: {
          name,
          email,
          phone,
          company,
          location
        }
      });
      res.status(200).json({ message: 'Lead submitted successfully' });
    } catch (error) {
      console.error('Error submitting lead:', error);
      res.status(500).json({ message: 'Error submitting lead' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
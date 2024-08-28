import Airtable from 'airtable';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
      const records = await base('Contacts').select({
        maxRecords: 10,
        sort: [{ field: 'Created', direction: 'desc' }]
      }).firstPage();
      
      res.status(200).json(records);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ message: 'Error fetching contacts' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
async function insertDocument(email) {
  const data = await fetch('http://localhost:3001/emails', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const newEmail = await data.json();
  return newEmail;
}

export default async function handle(req, res) {
  switch (req.method) {
    case 'POST':
      const { email } = req.body;
      if (!email) {
        res.status(422).json({ message: 'Invalid email' });
        return;
      }

      try {
        const newEmail = await insertDocument(email);
        res.status(201).json({ message: 'Success', email: newEmail });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }

      break;
    default:
  }
}

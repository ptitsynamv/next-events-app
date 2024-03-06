export default function handler(req, res) {
  const { eventId } = req.query;

  switch (req.method) {
    case 'POST':
      const { email, name, text } = req.body;
      res.status(201).json({ message: 'Success', email, name, text });
      break;
    case 'GET':
      res.status(201).json([
        {
          id: 'comment-1',
          text: 'Comment 1',
          name: 'User 1',
          email: 'test@email.com',
        },
        {
          id: 'comment-2',
          text: 'Comment 2',
          name: 'User 2',
          email: 'test2@email.com',
        },
      ]);
      break;
    default:
  }
}

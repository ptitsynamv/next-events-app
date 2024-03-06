export default function handle(req, res) {
  switch (req.method) {
    case 'POST':
      const { email } = req.body;
      res.status(201).json({ message: 'Success', email });
      break;
    default:
  }
}

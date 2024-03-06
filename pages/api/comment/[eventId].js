async function insertDocument(comment) {
  const newCommentData = await fetch('http://localhost:3001/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const newComment = await newCommentData.json();
  return newComment;
}

async function fetchDocuments(eventId) {
  const commentsData = await fetch(
    `http://localhost:3001/comments?eventId=${eventId}`
  );
  const comments = await commentsData.json();
  return comments;
}

export default async function handler(req, res) {
  const { eventId } = req.query;

  switch (req.method) {
    case 'POST':
      const { email, name, text } = req.body;
      const comment = {
        eventId,
        email,
        name,
        text,
      };

      try {
        const newComment = await insertDocument(comment);
        res.status(201).json({ message: 'Success', comment: newComment });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }

      break;
    case 'GET':
      try {
        const comments = await fetchDocuments(eventId);
        res.status(201).json({ comments });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }

      break;
    default:
  }
}

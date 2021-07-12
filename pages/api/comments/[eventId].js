

async function handler(req, res) {
    const eventId = req.query.eventId;
    console.log(eventId)

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });

            return;
        }


        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }
        console.log(newComment);
        res.status(201).json({ message: 'added comment', comment: newComment })
    }

    if (req.method === 'GET') {
        const dummyList = [
            { id: 'c1', name: 'Max', text: 'A first Comment' },
            { id: 'c2', name: 'Manuel', text: 'A second Comment' },
        ]
        res.status(200).json({ comments: dummyList })
    }


}

export default handler;

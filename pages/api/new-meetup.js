// /api/mew-meetup

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data
        // connect to a database, store new-meetup data in there, and reponse the client that we did this
    }
}

export default handler;


// In the same NextJS project, we can create APIs
// pages folder => api folder => file of the api code, this is secure place to use credentials never sent to client-side
// path is simply: /api/[file-name]


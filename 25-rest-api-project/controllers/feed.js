exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: 1,
                title: 'First post',
                content: 'This is the first post!',
                image: 'images/duck.jpg',
                creator: {
                    name: 'Sekhar Misra'
                },
                createdAt: new Date()
            }
        ]
    });
};

exports.createPost = (req, res, next) => {
    //Create data into db..
    const title = req.body.title;
    const content = req.body.content;
    console.log(title);
    console.log(content);

    res.status(201).json({
        message: 'Post created succesfully',
        post: {
            _id: new Date().toISOString(),
            title: title, 
            content: content,
            creator: {
                name: 'Sekhar Misra'
            },
            createdAt: new Date()
        }
    });
};
exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'First post', Content: 'This is the first post!' }]
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
        post: {id: new Date().toISOString(), title: title, content: content}
    });
};
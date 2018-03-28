var books = [];
var id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        let bookObj = {}
        bookObj.title = req.body.title;
        bookObj.author = req.body.author;
        bookObj.id = id;
        books.push(bookObj);
        id++;
        res.status(200).send(books)
    },
    update: (req, res) => {
        let index = null;
    books.forEach((book, i) => {
      if(book.id === Number(req.params.id)) index = i;
    })
    books[ index ] = {
      id: books[ index ].id,
      title: req.body.title || books[ index ].title,
      author: req.body.author || books[ index ].author
    };
    res.status(200).send( books );
    },
    delete: (req, res) => {
        let index= null;
        books.forEach((val, i) => {
            if(val.id === +req.params.id){
                index = i
            }
        })
        books.splice(index, 1);
        res.status(200).send( books );
        
    }
}
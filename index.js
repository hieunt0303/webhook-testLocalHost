const express = require('express')
const app = express()
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./src/routes')
const port = 8080


app.use(express.json());

app.use(express.static(path.join(__dirname, 'src', 'public')))
console.log(__dirname)

// config handlebars
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sumIndex: (a, b) => (a + b)
    }
}
));
app.set('view engine', '.hbs');

// set lại route handlebars
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));
// cho phép http hiển thị json kiểu uncorder
app.use(express.urlencoded())


// route init
route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
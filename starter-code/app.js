const express = require('express')

const app = express()
app.use(express.static('public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    
    const data = {
        names: ['about', 'gallery']
    }
    res.render('home', data)
})

app.get('/about', (req, res) => {
    const data = {
        names: ['home', 'gallery'],
        text: ['One Piece (ワンピース Wan Pīsu?) es un manga escrito e ilustrado por Eiichirō Oda. Comenzó a publicarse en la revista japonesa Weekly Shōnen Jump el 22 de julio de 1997. Shueisha publica los capítulos en volúmenes.2​','Por otra parte, Toei Animation realiza el anime y se transmite en Fuji TV desde el 20 de octubre de 1999 el cual está en emisión actualmente. Larp Editores licenció el manga en Argentina y posteriormente fue retomado por Ivrea. En España principalmente la publicación estaba a manos de Planeta DeAgostini y después pasó a manos de Planeta Cómic el cual se encarga actualmente de su publicación. En México fue publicado por Editorial Toukan en un principio y, más tarde, por Panini Comics.3​','One Piece es uno de los mangas más extensos en la historia de la revista Shōnen Jump con más de 450 millones4​ de copias vendidas a nivel mundial. En la encuesta realizada por la Agencia de Cultura Japonesa sobre los cincuenta mejores animes y mangas de Japón, One Piece alcanzó el puesto número 11.5​ El anime también ha contado con varios reconocimientos. En el ranking publicado por TV Asahi de 2005 sobre los 100 animes más conocidos de todos los tiempos, basado a una encuesta en línea en Japón, One Piece alcanzó el puesto número 6.6​ En 2016 era el décimo anime más largo de la historia.7​8​ y el que más ganancias ha reportado a su autor ostentando el récord Guinness como el cómic más vendido de la historia.9​']
    }
    res.render('about', data)
})

app.get('/gallery', (req, res) => {
    const data = {
        names: ['home', 'about'],
        imgs: ['/images/luffy.jpg','/images/zorro.jpg', '/images/sanji.jpg', '/images/chopper.jpg', '/images/nami.jpg', '/images/ousoupp.jpg']
    }
    res.render('gallery', data)
})

app.get('/home', (req, res) =>{
    res.redirect('/')
})

app.listen(3000, ()=> {
    console.log('server on port 3000')
})
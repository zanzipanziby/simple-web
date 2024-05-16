export const mainPage = (res) => {
    let s = '<!doctype html>' +
        '<html>' +
        '   <head>' +
        '       <meta charset = "UTF-8">' +
        '       <title>Список запланированных дел</title>' +
        '   </head>' +
        '   <body>' +
        '       <h1>Запланированные дела</h1>' +
        '   </body>' +
        '</html>';
    res.end(s)
}

export const detailPage = (res, id) => {
    let s = '<!doctype html>' +
        '<html>' +
        '   <head>' +
        '       <meta charset = "UTF-8">' +
        '       <title>Дело :: Список запланированных дел</title>' +
        '   </head>' +
        '   <body>' +
        '       <h1>Дело</h1>'
        '   </body>' +
        '</html>';
    res.end(s)
}

export const errorPage = (res) => {
    res.statusCode = 404
    let s = '<!doctype html>' +
        '<html>' +
        '   <head>' +
        '       <meta charset = "UTF-8">' +
        '       <title>Ошибка</title>' +
        '   </head>' +
        '   <body>' +
        '       <h1>Ошибка, страницы не существует</h1>' +
        '   </body>' +
        '</html>';
    res.end(s)
}
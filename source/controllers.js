import { loadItem, loadList } from "./model.js";

export const mainPage = async (res) => {
    let s = '<!doctype html>' +
        '<html>' +
        '   <head>' +
        '       <meta charset = "UTF-8">' +
        '       <title>Список запланированных дел</title>' +
        '   </head>' +
        '   <body>' +
        '       <h1>Запланированные дела</h1>';
        const list = await loadList();
        for(let t of list)
        s+= `<h2><a href="/${t._id}/">${t.title}</a></h2>`+
            `<p>${t.desc}</p>` +
            `<p>&nbsp<p/>`;
        s+='   </body>' +
        '</html>';
    res.end(s)
}

export const detailPage = async (res, id) => {
    const t = await loadItem(id)
    if(!t) {
        errorPage(res)
        return
    }
    let s = '<!doctype html>' +
        '<html>' +
        '   <head>' +
        '       <meta charset = "UTF-8">' +
        `       <title>${t.title} :: Список запланированных дел</title>` +
        '   </head>' +
        '   <body>' +
        `       <h1>${t.title}</h1>` +
        `       <p>${t.desc}</p>` +
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
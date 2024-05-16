import {dirname, join} from 'node:path'
import {fileURLToPath} from 'node:url'
import {readFile} from 'node:fs/promises'

const currentDir = dirname(dirname(fileURLToPath(import.meta.url))) //находим путь к корню проекта
const dataFileName = join(currentDir, 'data', 'todos.json') // получаем путь к модулю

export const loadList = async () => {
    const rawData = (await readFile(dataFileName, 'utf8')) // чтение содержимого модуля с указанием обозначения кордировки для прочтения в виде строки
    const data = JSON.parse(rawData) // парсим полученную строку в объект
    return data.todos
}

export const loadItem = async (id) => {
    const rawData = await readFile(dataFileName, 'utf8') // чтение содержимого модуля с указанием обозначения кордировки для прочтения в виде строки
    const data = JSON.parse(rawData) // парсим полученную строку в объект
    return data.todos.find(el => el._id === id) // находим нужную таску по id
}
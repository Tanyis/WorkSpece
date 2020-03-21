const http = require('http')
const context = require('./context')
const request = require('./require')
const response = require('./response')

class KKB {
    constructor() {
        this.middlewares = []
    }
}
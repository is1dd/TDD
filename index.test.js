const app = require('./index')
const supertest = require('supertest')
describe("My first Test" , ()=>{
    it('GET /' , ()=>{
        return supertest(app).get('/').expect("hello")
    })
    it('Get /', ()=>{
        return supertest(app).get('/ConsumerRouter').expect(res.staus).ToBe(201)
    })
    it('POST /' , ()=>{
        return supertest(app).post('/consumer/new').expect(res.staus).ToBe(201)
    })
    it('PATCH /' , ()=>{
        return supertest(app).patch('/consumer/update').expect(res.staus).ToBe(201)
    })
    it('DELETE /' , ()=>{
        return supertest(app).delete('/consumer/delete').expect(res.staus).ToBe(201)
    })

})
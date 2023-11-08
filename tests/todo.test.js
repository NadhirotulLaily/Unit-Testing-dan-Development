const app = require('../app')
const request = require('supertest');
const { response } = require('../app');

describe('Todo Unit Test', () => {
    test('Create Todo Successfully', (done) => {
        const newTodo = {
            title: "Todo"
        }
        
        request(app)
            .post('/api/v1/todo/create')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Todo created!')
                done()
            })
            .catch(done)
    })

    
    test('Get all list', (done) => {
        request(app)
            .get('/api/v1/todo')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.data.length).toBe(3)
                done()
            })
            .catch(done)
    })
        
    test('Get Detail Todo', (done) => {
        request(app)
            .get(`/api/v1/todo/1`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
              expect(response.body.data.title).toBe("Todo 1")
              done()
        }).catch(done)
    })

    test('Delete Todo', (done) => {
        const id = 100
        request(app)
            .delete(`/api/v1/todo/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe("Todo deleted!")
                done()
        })
        .catch(done)
    })
}) 
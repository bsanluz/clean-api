import {SignUpController} from './signup'
describe('Signup Controller', ()=>{
    test('Should return 400 if no name is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: 'mail@mail.com',
                password: 'senha',
                passwordConfirmation: 'senha'
            }
        }
       const httpResponse = sut.handle(httpRequest)
       expect(httpResponse.statudCode).toBe(400)
    })
})
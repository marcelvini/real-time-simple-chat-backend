'use strict'
const User = use('App/Models/User')
class AuthenticationController {
    async login({ request, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token

    }
    async register({ request, auth }) {
        const data = request.all()
        const user = await User.create(data)

        return 'Logged in successfully'
    }
}

module.exports = AuthenticationController

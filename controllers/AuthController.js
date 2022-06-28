const User = require('../models/User')
const flash = require('connect-flash')

const bcrypt = require('bcryptjs')

module.exports = class AuthController {

    static login(req, res) {
        res.render('auth/login')
    }

    static async loginPost(req, res) {
        const { email, password } = req.body

        // find user
        const user = await User.findOne({ where: { email: email } })

        if (!user) {
            req.flash('message', '')
            req.flash('message', 'Usuário não encontrado!')
            res.render('auth/register')
            return
        }

        // check If password math 
        const passwordMath = bcrypt.compareSync(password, user.password)

        if (!passwordMath) {
            req.flash('message', 'Senha inválida!')
            res.render('auth/register')
            return
        }

        // Inicialize Session
        req.session.userid = user.id
        req.flash('message', '')
        req.flash('message', 'Logado com sucesso!')

        req.session.save(() => {
            res.redirect('/toughts/dashboard')
        })
    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerPost(req, res) {
        const { name, email, password, confirmpassword } = req.body

        // passwords match validation
        if (password != confirmpassword) {
            req.flash('message', '')
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')

            return
        }

        // check if user exist 
        const checkIfUserExist = await User.findOne({ where: { email: email } })
        if (checkIfUserExist) {
            req.flash('message', '')
            req.flash('message', 'O e-mail já está em uso!')
            res.render('auth/register')

            return
        }

        // create a password
        const salt = bcrypt.genSaltSync(10) //Criptografia com 10 caracteres
        const hashedPassword = bcrypt.hashSync(password, salt) // Gera criptografia hash

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try {
            const createUser = await User.create(user)

            // Inicialize Session
            req.session.userid = createUser.id

            req.flash('message', '')
            req.flash('message', 'Cadastro Realizado com sucesso!')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })

        } catch (err) {
            console.log(err)
        }


    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/login')
    }


}
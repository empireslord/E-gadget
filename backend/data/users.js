import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'King pronto',
    email: 'king@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dr Pronto',
    email: 'pronto@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

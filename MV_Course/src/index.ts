// import { AppDataSource } from "./data-source"
// import { Users } from "./entity/User"

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new Users()
//     user.login = "admin"
//     user.Password = "1234"
//     user.cpf_user = '05375536145'
//     user.email_user = 'teste@teste.com'
//     user.name_user = 'Manoel'
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.name_user)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(Users)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))

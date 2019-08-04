# GA-Project-2-DSCS-API

This api is for the Digimon included in the game Digimon Story: Cyber Sleuth.
The user will be able to see a digimons digivolutions and their support skills,
as well as a list of all attacks present in the game.

## Getting Started

1. Clone the repo
1. Run `npm install`

### Prerequisites

You will need

- mongodb
- postman
- node

### Installing

1. Start the mongo server

```cmd
sudo service mongod start
```

2. From the project's root directory, seed the database by using the commands:

```cmd
node db/seeding/seed-data.js
node db/seeding/seed-reference.js
```

3. Open the connection to the database by running `node index.js`

## Running the tests

Youtube link: <https://youtu.be/o4hJTz6Ez4k>

this project is deployed
[here](https://digimon-cyber-sleuth-api.herokuapp.com/api/digimon)

REST routes for the Digimon model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/digimon`           | `/`                     | `GET`    | #index  | List all to Digimon                         |
| `/digimon/name`      | `/name/:name`           | `GET`    | #show   | Displays a single Digimon by name           |
| `/digimon/stage`     | `/stage/:stage`         | `GET`    | #show   | Lists all Digimon with the same stage       |
| `/digimon/attribute` | `/attribute/:attribute` | `GET`    | #show   | Lists all Digimon with the same attribute   |
| `/digimon/type`      | `/type/:type`           | `GET`    | #show   | Lists all Digimon with the same type        |
| `/digimon`           | `/`                     | `POST`   | #create | Creates a new Digimon in the database       |
| `/digimon`           | `/:name`                | `PUT`    | #update | Updates specified Digimon in the database   |
| `/digimon`           | `/:name`                | `DELETE` | #delete | Deletes specified Digimon from the database |

REST routes for the Move model:

| URL                | Path                    | Method   | Action  | Description                              |
| ------------------ | ----------------------- | -------- | ------- | ---------------------------------------- |
| `/moves`           | `/`                     | `GET`    | #index  | List of all Moves                        |
| `/moves/name`      | `/name/:name`           | `GET`    | #show   | Displays a single Move by name           |
| `/moves/type`      | `/type/:type`           | `GET`    | #show   | Lists all moves with the same type       |
| `/moves/attribute` | `/attribute/:attribute` | `GET`    | #show   | Lists all moves with the same attribute  |
| `/moves`           | `/`                     | `POST`   | #create | Creates a new Move in the database       |
| `/moves`           | `/moves/:name`          | `PUT`    | #update | Updates specified Move in the database   |
| `/moves`           | `/moves/:name`          | `DELETE` | #delete | Deletes specified Move from the database |

REST routes for the Skill model:

| URL            | Path          | Method   | Action  | Description                               |
| -------------- | ------------- | -------- | ------- | ----------------------------------------- |
| `/skills`      | `/`           | `GET`    | #index  | List of all Skills                        |
| `/skills/id`   | `id/:id`      | `GET`    | #show   | Displays a single Skill by ID             |
| `/skills/name` | `/name/:name` | `GET`    | #show   | Displays a single Skill by name           |
| `/skills`      | `/`           | `POST`   | #create | Creates a new Skill in the database       |
| `/skills`      | `/:name`      | `PUT`    | #update | Updates specified Skill in the database   |
| `/skills`      | `/:name`      | `DELETE` | #delete | Deletes specified Skill from the database |

## Built With

- [Heroku](https://www.heroku.com/home)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Nodejs](https://nodejs.org/en/)

## Authors

- **Kyle Clabogh** - _Initial work_ -
  [SirAirdude](https://github.com/SirAirdude)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Dataset created by [Mark Korsak](https://www.mkorsak.com/projects/6948546)
- Dataset obtained from: https://www.kaggle.com/rtatman/digidb

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

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Authors

- **Kyle Clabogh** - _Initial work_ -
  [SirAirdude](https://github.com/SirAirdude)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Dataset created by [Mark Korsak](https://www.mkorsak.com/projects/6948546)
- Dataset obtained from: (https://www.kaggle.com/rtatman/digidb)

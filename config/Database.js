import { Sequelize } from "sequelize";

const db = new Sequelize('product_manage', 'root', '',{
    host :"localhost",
    dialect: "mysql"
});

export default db;
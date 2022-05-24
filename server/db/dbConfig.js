const { Sequelize } = require('sequelize');
const { getDbPort, getDbPassword, getDbName, getDbHost, getDbUser } = require('../../utils/envFile');



const sequelize = new Sequelize(getDbName(), getDbUser(), getDbPassword(), {
  host: getDbHost(),
  port:getDbPort(),
  dialect: 'postgres' 
});


try {
  sequelize.authenticate();
  console.log('DB Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports=sequelize;
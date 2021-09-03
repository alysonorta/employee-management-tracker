const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection
    }
    //put queries in here and helpers in index
    addEmployee(employee){
        return this.connection.promise().query(INSERT QUERY)
    }

}

module.exports=new DB(connection);
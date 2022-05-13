const pool = require("../../config/database");

module.exports = {
    //create user profile
    createUser: (data, callback) => {
        pool.query(
            `INSERT INTO passenger_profile(profile_id, first_name, last_name, email_id, phone_number, address, gender, password)
                VALUES(?,?,?,?,?,?,?,?)`,
            [
                data.profile_id,
                data.first_name,
                data.last_name,
                data.email_id,
                data.phone_number,
                data.address,
                data.gender,
                data.password,
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, result)
            }
        );
    },
    

    getUserByEmail: (email,callback) => {
        pool.query(
            `SELECT * FROM passenger_profile WHERE email_id =?`,
            [email],
            (error,results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },

};
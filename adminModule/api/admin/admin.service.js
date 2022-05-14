const pool = require("../../config/database");

module.exports = {
    //create admin user
    createAdminProfile: (data, callback) => {
        pool.query(
            `INSERT INTO admin_profile(id, name, email, password)
                VALUES(?,?,?,?)`,
            [
                data.id,
                data.name,
                data.email,
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
    
    //Admin Login
    getAdminByEmail: (email,callback) => {
        pool.query(
            `SELECT * FROM admin_profile WHERE email =?`,
            [email],
            (error,results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },

    //Search flights
    searchFlights: (data,callback) => {
        pool.query(
            `SELECT * from flight where date = ? OR  origin = ? OR destination =? `,
            [
                data.date,
                data.origin,
                data.destination,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    search: (data,callback) => {
        const result =  pool.request()
            .input('Name', req.query.name)
            .execute(`SearchEmployee`);
        const employees = result.recordset;
        pool.query(
            `exec flight_search @Date =  ? , @Origin= ? , @Destination = ? , @TripType = ?, @ReturnDate =?`,
            [
                data.date,
                data.origin,
                data.destination,
                data.tripType,
                data.returnDate,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    

};
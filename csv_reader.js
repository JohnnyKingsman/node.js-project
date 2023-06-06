const fs = require("fs");
const csv_data = fs.readFileSync("NewRolesAndUsers.csv", "utf-8");
const rows = csv_data.trim().split("\n");
const headers = rows[0].trim().split(",");

const users = [];

for (let i = 1; i < rows.length; i++) {
    const values = rows[i].trim().split(",");
    const user = {};
    for (let j = 0; j < headers.length; j++) {
        user[headers[j]] = values[j];
    }

    users.push(user);
}

console.log(users);

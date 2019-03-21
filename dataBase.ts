export function dataBase(result: any[]): void{
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('dateBase.db');
  
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS user (id INT, name TEXT, surname TEXT, mail Text, date TEXT, phone INT)");
        for(let i = 0; i < result.length; i++){
            var stmt = db.prepare("INSERT INTO user VALUES (?,?,?,?,?,?)");
            var id = result[i].ID;
            var name = result[i].Name;
            var surname = result[i].Surname;
            var mail = result[i].Mail;
            var date = result[i].Date;
            var phone = result[i].Phone;
        
            stmt.run(id, name, surname, mail, date, phone);
            stmt.finalize();
        }                           
    });
    db.each("SELECT id, name, surname, mail, date, phone FROM user", function(err, row) {
        console.log("User from db: " +row.id, row.name, row.surname, row.date, row.phone);
    });
    db.close();
}

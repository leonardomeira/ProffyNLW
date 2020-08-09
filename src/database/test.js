const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Leonardo Meira",
        avatar: "https://avatars1.githubusercontent.com/u/66309347?s=460&u=0fdd83ef4d43ff6418e993922d653df7cd57a11a&v=4",
        whatsapp: "021989898989",
        bio: "Gearhead de carteirinha, óleo é o que corre pelas minhas veias.<br><br>Sendo um dos poucos mecânicos certificados pela BMW Academy no mundo, vou te ensinar tudo sobre motores, suspensões e câmbios."
    }

    classValue = {
        subject: 1,
        cost: "40"
        //O proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //Consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectedClassesSchedules)
})
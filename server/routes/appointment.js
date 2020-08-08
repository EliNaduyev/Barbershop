const router = require('express').Router();
const NewAppointment = require('../models/Appointment');
const Users = require('../models/User');



router.post('/appointment', async (req, res)=>{
    console.log('makeing appointment')

    const appointmentExists = await NewAppointment.find({userID:req.body.userID}) // return array of objects
    if(appointmentExists[0]) return res.send({error:'You alreay have appointment'})

    const timeExists = await NewAppointment.find({appointmentKey:req.body.key}) // return array of objects
    if(timeExists[0]) return res.send({error:'Sorry try another time'})

    const user = await Users.findOne({_id:req.body.userID})
    if(!user) return res.send({error:'user dosent exists'})

    let {userID, key, name, date, time, phone, day, timeInMS} = req.body

    const newAppointment = new NewAppointment({   
        userID,
        appointmentKey:key,
        name,
        date,
        time,
        phone,
        day,
        timeInMS
      })
      newAppointment.save()

      user.phone = phone
      user.save()

    res.status(200).send('Appointment scheduled successfully!')
})

router.post('/changeappointment', async (req, res)=>{
  console.log('changing appointment')

  const appointmentExists = await NewAppointment.find({userID:req.body.userID}) // return array of objects
  if(!appointmentExists[0]) return res.send({error:'Appointment not found'})

  let {key, date, time, day, timeInMS} = req.body

  appointmentExists[0].appointmentKey = key
  appointmentExists[0].date = date
  appointmentExists[0].time = time
  appointmentExists[0].day = day
  appointmentExists[0].timeInMS = timeInMS

  appointmentExists[0].save()
  res.status(200).send('appointment changed!')
})


router.get('/userappointment', async(req, res) =>{

  const appointmentExists = await NewAppointment.find({userID:req.query.id}) // return array of objects
  if(!appointmentExists[0]) return res.send({error:'Appointment not found'})

  console.log('user appointment')

  let obj = {}
  obj.day = appointmentExists[0].day
  obj.time = appointmentExists[0].time
  obj.date = appointmentExists[0].date
  
  res.send(obj)

})

router.get('/getappointments', async(req, res) => {

  console.log('get appointments')
  const appointmentExists = await NewAppointment.find() // return array of objects
  if(!appointmentExists[0]) return res.send({error:'You have no appointments'})

  res.send(appointmentExists)
})


router.post('/cancelappointment', async(req, res) =>{

  console.log('cancel appointment', req.body)

  const appointmentExists = await NewAppointment.find({userID:req.body.id}) // return array of objects
  if(!appointmentExists[0]) return res.send({error:'Appointment not found'})

  try{
    let deleteRes = await NewAppointment.deleteOne({_id:appointmentExists[0]._id})
    console.log('deleteRes: ',deleteRes)

  }catch(e){
    console.log(e)
  }



  res.send('canceling appointment...')


})

router.get('/getusers', async(req, res) => {
  console.log('get users')
  const usersExists = await Users.find()
  if(!usersExists[0]) return res.send({error:'No Users'})

  res.send(usersExists)

})


module.exports = router;
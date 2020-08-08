const router = require('express').Router();
const NewUser = require('../models/User');

var key = 'real secret keys should be long and random';
var encryptor = require('simple-encryptor')(key);


router.get('/', async (req, res) => {

    // var encrypted = encryptor.encrypt('eliiii');
    // console.log('encrypted: %s', encrypted);

    // var decrypted = encryptor.decrypt(encrypted);
    // console.log('decrypted: %s', decrypted);

    res.send('hi from the server')
})


router.post('/register', async (req, res) =>{
    let {email, pass, confirmPass} = req.body

    console.log('register data: ',req.body)
    const userExists = await NewUser.find({ email: req.body.email })
    if (userExists[0]) return res.send({error:'The user already exists'})

    if( pass !== confirmPass) return res.send({error:'pass not match'})

    // if i will put extra data it will not added to the DB because Sechma
    // only the correct keys will added to the DB!
    let username = email.substring(0, email.indexOf('@'))

    const newUser = new NewUser({   
      email:email,
      password:pass,
      name:username
    })

    newUser.save()
    res.status(200).send('success')
})

router.post('/login', async (req, res) => {


    let {email, pass} = req.body
    console.log('login data: ',req.body)
    const userExists = await NewUser.find({email:email}) // return array of objects
    // const userExists2 = await NewUser.findOne({_id:"5f2040182747a520a4b7a8be"}) // work only with id and return one object
    if(!userExists[0]) return res.send({error:'Sorry user not found'})
    
    if(pass !== userExists[0].password) return res.send({error:'Sorry wrong password'})
    
    let username = email.substring(0, email.indexOf('@'))
    let userPhone = 'phone...'
    if(userExists[0].phone)
        userPhone = userExists[0].phone

    res.send({id:userExists[0]._id,
        status:'logged',name:username,
        admin:email.includes('admin'),
        phone:userPhone
        })
})


module.exports = router;

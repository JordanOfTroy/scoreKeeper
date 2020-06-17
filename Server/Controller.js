require('dotenv').config()

let session_id_count = 1

module.exports = {

  test: (req, res) => {
    let {teamList} = req.body 
    console.log('ctrl teamlist:', teamList)
    res.status(200).send('yay, this is working!')
  }

}
require('dotenv').config()

let session_id_count = 1

module.exports = {

  test: (req, res) => {
    let {players} = req.body 
    let playerObjs = []
    for (let i=0; i<players.length; i++) {
      playerObjs.push({
        name: players[i],
        score: 0
      })
    }
    res.status(200).send({playerObjs: playerObjs})
  }

}
const { exec } = require('child_process')

if (process.argv.length < 4) {
  console.error('Uso: node runScript.js <año> <challenge>')
  process.exit(1)
}

const año = process.argv[2]
const challenge = process.argv[3]

const path = `./${año}/challenge${challenge}/index.js`

exec(`node ${path}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`Error: ${stderr}`)
    return
  }
  console.log(stdout)
})

export let URL = "http://localhost:9999"

let dev = false

if (!dev) {
  URL = 'https://api.blitzapp.co'
}
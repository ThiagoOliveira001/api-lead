import app from './config/app'

const port = process.env.PORT

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port ?? 'default'}`)
})

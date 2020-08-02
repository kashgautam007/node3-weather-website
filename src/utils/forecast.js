const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=87d8856111c06ecffb1fe419a336a468&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather services.',undefined)
        }else if(body,error){
            callback('Unable to find loaction.',undefined)
        }else{
            callback(undefined, 'It is ' + body.current.weather_descriptions[0] + ' today.' + ' It is currently ' + body.current.temperature + ' degrees out. There is '+ body.current.precip + '% chances of rain.')
        }
    })
}


module.exports = forecast
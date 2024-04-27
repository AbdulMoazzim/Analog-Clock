let clock = ()=>{
      setInterval(()=>{
            let myTime = new Date()
            let hour = myTime.getHours()
            let min = myTime.getMinutes()
            let sec = myTime.getSeconds()
            let hCal = 30*hour + min/2
            let mCal = 6*min
            let sCal = 6*sec
            document.getElementById('hour').style.transform = `rotate(${hCal}deg)`
            document.getElementById('minute').style.transform = `rotate(${mCal}deg)`
            document.getElementById('second').style.transform = `rotate(${sCal}deg)`
      },1000)
}

setInterval(()=>{
      clock()
},1000)
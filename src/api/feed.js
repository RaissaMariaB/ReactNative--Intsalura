
const readPhotos = async (callBack) =>{
    const photoHttp = await fetch('http://192.168.0.5:3030/feed')
    const responsePhoto = await photoHttp.json()
    callBack(responsePhoto)
  }

  export default readPhotos


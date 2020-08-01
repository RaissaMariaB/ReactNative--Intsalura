const likeImg = ( like ) => {
  if( like ){
    return require("../../assets/s2-checked.png")
  }
    return require("../../assets/s2.png")
}

const likePhoto = ( like, moreLikes ) => {
  let heart = moreLikes
  if( like ){
    heart --
  } else{
    heart ++
  }
  return [ !like, heart ]

}

export { likeImg, likePhoto }

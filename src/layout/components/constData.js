const valiUserArr = [
  {account:'admin',password:'123456'}
]

function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

export {
  valiUserArr,
  generateRandomString
} 
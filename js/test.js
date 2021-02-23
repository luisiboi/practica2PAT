//TEST FETCH API

fetch('jsonfiles/psp.json')
    .then(res => {
      console.log(res)
      return res
    })
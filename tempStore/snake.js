const snake = function(num){
  const res = []
  let count = 1
  for(let i=0;i<num;i++){
    for(let j=i;j>=0;j--){
      if(!res[j]) {
        res[j] = []
      }
      res[j].push(count++)
    }
  }
  for(const e of res){
    console.log(e.join(' '));
  }

}

snake(5)
function delay(i, endTime) {
    if (i == endTime) {
      console.log(i);
      return 0;
    }
    setTimeout(function () {
      console.log(i);
      i++;
      delay(i, 5);
    }, 3000);
  }
  
  delay(1, 5);
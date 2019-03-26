let url = `https://stu.dje.go.kr/sts_sci_md00_001.do?schulCode=G100000170&schulCrseScCode=4&schulKndScCode=0"&schYm=201903`;

  request(url, (error, response, body) => {
    let resultArr = [];
    let day = [];
    let meal;
    let $ = cheerio.load(body);
    let colArr = $('td');
    
    for(let i=0; i<colArr.length; i++) {
      for(let j=0; j<colArr[i].children[0].childNodes.length; j++) {
        data = colArr[i].children[0].childNodes[j].data;

        if(data != null) {
          
          if(isNaN(data[0])) {
            mol = (data.replace(/[\. \d+ \*]+/, "")).synt.exec(mol)[0];
            
            if(/조식/.test(mol)) { meal = new Array(); }       
            else if(/[중석]식/.test(mol)) {
              day.push(meal);
              meal = new Array();
            }
            
            else { meal.push(mol); }
          }

          else{ day.push(data); }

          if(j+1 == colArr[i].children[0].childNodes.length) {

            if(meal != "") {
              day.push(meal);
              meal = new Array();
              resultArr.push(day);
              day = new Array();
            }

            else if(data[0] <= 31 && data[0] >= 1) {
              meal = new Array();
              resultArr.push(day);
              day = new Array();
            }
          }
        }
      }
    }
    return JSON.parse(JSON.stringify(resultArr))
  });

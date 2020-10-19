module.exports = function toReadable (number) {
  if (number == 0) return "zero";
  var dg = ['','one','two','three','four', 'five','six','seven','eight','nine'];
  var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  var tw = ["", "", 'twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let flag = false;
  let str = number.toString().split("");
  while (str.length < 3){
  	str.splice(0, 0, "0");
  }
  return  str.map((char,index) => {
  	let num = Number.parseInt(char);
  	switch (index) {
	  	case 2:
		  	if (flag){
	  			flag = false;
	  			return tn[num];
	  		}
	  		return dg[num];
	  	case 1:
	  		if (num == 0)
	  			return "";
	  		else if (num == 1){
	  			flag = true;
	  			return "";
	  		}
	  		return tw[num];
	  	case 0:
	   		return num == 0 ? "" : dg[num] + " hundred";
	  }
  }).filter(el => el).join(" ").trim();
}
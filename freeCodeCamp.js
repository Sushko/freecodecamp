function rot13(str) {

  return str.split('').map.call(str, function(char) {
      x = char.charCodeAt(0);
      if      (x < 65 || x > 90) return String.fromCharCode(x);
      else if (x < 78)           return String.fromCharCode(x + 13);
                                 return String.fromCharCode(x - 13);
    }).join('');
}

console.log(
  rot13("LBH QVQ VG!")
);

function rot13_my_modify(str) { // LBH QVQ VG!
  var retStr = '';
  for (var i=0;i<str.length;i++) 
    retStr += String.fromCharCode((str.charCodeAt(i) >= 'A'.charCodeAt(0))?
        ((str.charCodeAt(i) >= 'A'.charCodeAt(0) + 13)?str.charCodeAt(i) - 13:str.charCodeAt(i) + 13):
        (str.charCodeAt(i)));
  return retStr;
}

function rot13_my(str) { // LBH QVQ VG!
  var arr = [];
  for (var i=0;i<str.length;i++) {
    arr.push(str.charCodeAt(i));
    if (str.charCodeAt(i) >= 'A'.charCodeAt(0)) 
    {
      if (str.charCodeAt(i) >= 'A'.charCodeAt(0)+13) 
      {
        arr[i] = str.charCodeAt(i)-13;
      } 
      else
      {
        arr[i] = str.charCodeAt(i) + 13;
      }
    };
  }
  str = '';
  for (var i=0;i<arr.length;i++) str += String.fromCharCode(arr[i]);
  return str;
}

function getIndexToIns(arr, num) {
  var arr_s = arr.sort(function(a, b){return a - b;});
  for(var i=0;i<arr.length;i++){
    if(arr_s[i] < num) continue;
    return i;
  }
  return arr.length;
}

function destroyer_my(arr) {
	return arr.filter(function(e){return this.indexOf(e)<0;},[2,4]);
}

function destroyer_my(arr) {
  for(var i=1;i<arguments.length;i++)
  {
  	var filterVal = arguments[i];
    arr = arr.filter(function (value){return value != filterVal;});
  }
  return arr;
}

function repeatStringNumTimes(str, num) {
	var str2 = '';
  	if (num > 0) {
  		for(var i=0;i<num;i++) {
  			str2 += str;
		}
  	}
	return str2;
}

function confirmEnding(str, target) {
	var ending = str.substr(str.length - target.length)
	return (target == ending);
}

function truncateString(str, num) {
  if (num <= 3) str = str.slice(0, num)+'...';
  else if (num < str.length) str = str.slice(0, num-3)+'...';

  return str;
}

function truncateString_my(str, num) {
  var retStr = '';

  if (num <= 3) retStr = str.slice(0, num)+'...';
  else if ( num >= str.length) retStr = str;
  else retStr = str.slice(0, num-3)+'...';

  return retStr;
}

function largestOfFour(arr) {
	return arr.map(function(subArray) { 
		return Math.max.apply(null, subArray);
  	});
}

function largestOfFour_my(arr) {
	var max;
	var maxArr = [];
 	for (var i = 0; i < arr.length; i++) {
		max = 0;
 		for (var j = 0; j < arr[i].length; j++) {
 			if (arr[i][j] > max) max = arr[i][j];
 		}
 		maxArr.push(max);
 	}
 	return maxArr;
}

function titleCase(str) {
	return str.replace(/\b(^|\s)[a-z]/g,function(f){return f.toUpperCase();});
}

function titleCase_my(str) {
	var att = str.split(' ');
  	for (var i=0;i<att.length;i++) {
  		var tmp = att[i].toLowerCase().split('');
  		//
  		var s = tmp.shift().toUpperCase();
  		tmp.unshift(s);
  		//tmp[0] = tmp[0].toUpperCase();  // another solution
  		
  		att[i] = tmp.join('');
  	}
  	return att.join(' ');
}

function largestOfFour(arr) {
	return arr.map(function(subArray) { 
		return Math.max.apply(null, subArray);
  	});
}

function largestOfFour_my(arr) {
	var max;
	var maxArr = [];
 	for (var i = 0; i < arr.length; i++) {
		max = 0;
 		for (var j = 0; j < arr[i].length; j++) {
 			if (arr[i][j] > max) max = arr[i][j];
 		}
 		maxArr.push(max);
 	}
 	return maxArr;
}

function titleCase(str) {
	return str.replace(/\b(^|\s)[a-z]/g,function(f){return f.toUpperCase();});
}

function titleCase_my(str) {
	var att = str.split(' ');
  	for (var i=0;i<att.length;i++) {
  		var tmp = att[i].toLowerCase().split('');
  		//
  		var s = tmp.shift().toUpperCase();
  		tmp.unshift(s);
  		//tmp[0] = tmp[0].toUpperCase();  // another solution
  		
  		att[i] = tmp.join('');
  	}
  	return att.join(' ');
}

function findLongestWord(str) {
  	var arr = str.split(' ');
	return arr.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;
}

function findLongestWord_my(str) {
	var arr = [];
  	var result = 0;
  	arr = str.split(' ');
  	for(var i=0;i<arr.length;i++) {
    	if (arr[i].length > result) result = arr[i].length;
  	} 
	return result;
}

function palindrome(str,i) {
	str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
	return str == str.split('').reverse().join('');	
}

function palindrome_my(str) {
	str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
	var back = str.split('').reverse().join('');
	if (str === back) return true;
	else return false;
	// Good luck!
}

function factorialize(n) {
	if (n === 0) return 1;
	return n * factorialize(n - 1);
}

function factorialize_my(num) {
	var factorial = 1;
	for (var i = num; i > 0; i--) factorial *= i;
	return factorial;
}

function reverseString(str) {

	return str.split('').reverse().join('');
}

function reverseString_my(str) {
 	var arr = [];
	// 1. Convert to array
	for(var i=0; i<str.length; i++) arr.push(str[i]);
	// 2. Reverse array
	arr.reverse();
	// 3. Convert to string
	str = "";
	for(var i=0; i<arr.length; i++) str += arr[i];
	return str;
}

// console.log(
// 	palindrome("_+e y,e,%")
// );
// function isPalindrome(str,i) {
//  return(i=i||0)<0||i>=str.length>>1||str[i]==str[str.length-1-i]&&isPalindrome(str,++i);
// }

// function checkPalindrom(str) {
//     return str == str.split('').reverse().join('');
// }

// var dt = new Date();
// var i;
// var max = 1000000;
// for(i = 0; i < max; i++) isPalindrome('racecar');
// console.log(Date.now() - dt.getTime());

// dt = new Date();
// for(i = 0; i < max; i++) checkPalindrom('racecar');
// console.log(Date.now() - dt.getTime());


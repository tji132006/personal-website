var data = [];

var dataStr = 
`1、20-Stamp<br>\
<br>\
导演大量发生的连发家里地方<br>\
<br>\
<br>\
2、shadow<br>\
<br>\
发家里地方<br>\
<br>\
<br>\
3、post<br>\
<br>\
发家里地方<br>\
<br>\
<br>\
4、badge<br>\
<br>\
大大方<br>\
`;

var d = dataStr.split('<br><br><br>')
for(var i = 0; i < d.length; i++){
	var c = d[i].split('<br><br>');
	data.push({
		img: c[0].replace('、', ' ') + '.png',
		caption: c[0].split('、')[1],
		desc: c[1]
	});
	console.log(c[0].replace('、', ' ')+'.jpg');

}
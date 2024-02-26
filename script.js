//1
let items = document.querySelectorAll('li');
let arr1 = []
for (let item of items) {
	arr1.push(item.textContent)

}
let js = JSON.stringify(arr1);

console.log(js);
//2
let users = '["user1","user2","user3","user4","user5"]';
let arr = JSON.parse(users);
arr.push("user6")
arr = JSON.stringify(arr)
console.log(arr)
//3
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let user4 = {
	"name": "user4",
	"age": 28,
	"salary": 4000
}
json = JSON.parse(json);
json.push(user4);
json = JSON.stringify(json);
console.log(json);
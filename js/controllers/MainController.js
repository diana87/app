/*
* file to manage data of app
* when add {{title}} to html we define this title  like expression
* in html in our scope (div) we define ng-controller="MainController" as directive
* variable $scope communicate between the controller and the view. 
*
*/

(function () {
app.controller('MainController', ['$scope', function($scope) {
	
	$scope.books = [ 
		{ 
			title: 'The Greatest Show on Earth', 
			author: 'Richard Dawkins',
			image: 'http://www.usegoodbooks.com/ProductImage?isbn=9781416594796&width=133&sourceCountry=US',
			descr: "This book is my personal summary of the evidence that the 'theory' of evolution is actually a fact as incontrovertible a fact as any in science.",
			plr: 0
		},
		{ 
			title: 'JavaScript Patterns', 
			author: 'Stoayan Stefanov',
			image: 'images/1.jpg',
			descr: 'Patterns are solutions to common problems.One step further, patterns are templates for solving categories of problems.It is therefore important to identify and study patterns.',
			plr: 1
		},
		{ 
			title: 'A Game of Thrones', 
			author: 'George R.R. Martin',
			image: 'http://www.usegoodbooks.com/ProductImage?isbn=9780553593716&width=133&sourceCountry=US',
			descr: 'The first volume in an epic series by a master of contemporary fantasy, filled with mystery, intrigue, romance, and adventure. Nice book to spend time.Enjoy it',
			plr: 0
		},
		{ 
			title: 'Eloquent JavaScript', 
			author: 'Marijn Haverbeke',
			image: 'http://www.usegoodbooks.com/ProductImage?isbn=9781593275846&width=133&sourceCountry=US',
			descr: 'This is a book about getting computers to do what you want them to do. It intends to make you familiar enough with this language to be able to make a computer do what you want.',
			plr: 0
		},
		{ 
			title: 'JS for PHP Developers', 
			author: 'Stoayan Stefanov',
			image: 'images/php_stefanof.jpg',
			descr: 'The nice book about JavaScript programming with good patterns and examples. To get more power include JS to PHP',
			plr: 0
		},
		{ 
			title: 'Harry Potter and the Prisoner of Azkaban', 
			author: 'J.K.Rowling',
			image: 'images/potter.jpg',
			descr: 'For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent ...',
			plr: 0
		},
		{ 
			title: "Surely You're Joking, Mr. Feynman", 
			author: 'by Feynman, Richard Phillips',
			image: 'http://www.usegoodbooks.com/ProductImage?isbn=9780393316049&width=133&sourceCountry=US',
			descr: 'The Nobel Prize-winning physicist Richard P. Feynman recounts in his inimitable voice his adventures trading ideas on atomic physics with Einstein and Bohr and ideas on gambling with Nick the Greek, painting a naked female toreador, accompanying a ballet on his bongo drums and much else of an eyebrow-raising and hilarious nature.',
			plr: 0
		},
		{ 
			title: 'Death on the Nile', 
			author: 'Agatha Christie',
			image: 'images/agatha.jpg',
			descr: "A facsimile first edition hardback of one of Poirot's most famous cases, published to mark the 80th anniversary of his first appearance.",
			plr: 0
		},
		
		
	];
	$scope.addBook = function () {
		var newBook, 
			title = $('#title').val(),
			author = $('#auth').val(),
			url = $('#img').val(),
			descr = $('#descr').val();
		if(title == '' || author == '') alert("please add $this");
		else {
			newBook = {
			title: title,
			author: author,
			image: url || 'images/3.jpg',
			descr: descr || '',
			plr: 0
			};
		$scope.books.push(newBook);
		}
		
	};
}]);
	$("#sort").bind('change', sort);
})();


function sort () {
var res = $("#sort").val(),
	filter = '';
	if(res != 'nopopular') {
filter = "book in books | filter:test" + " | orderBy:'" + res + "'";
$('.col-xs-3').attr('ng-repeat', filter);
}
}

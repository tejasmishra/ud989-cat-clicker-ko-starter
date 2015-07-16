var ViewModal = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );
	
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

	
}

var initialCats = [
	{
		clickCount : 0,
		name : 'Tabby',
		imgSrc : "img/434164568_fea0ad4013_z.jpg",
		imgAttribution : "http://www.google.com",
		nickname : ['Bert', 'Charles', 'Denise']
	},
	{
		clickCount : 0,
		name : 'Tiger',
		imgSrc : "img/4154543904_6e2428c421_z.jpg",
		imgAttribution : "http://www.google.com",
		nickname : ['Tigger']
	},
	{
		clickCount : 0,
		name : 'Scaredy',
		imgSrc : "img/22252709_010df3379e_z.jpg",
		imgAttribution : "http://www.google.com",
		nickname : ['Casper']
	},
	{
		clickCount : 0,
		name : 'Shadow',
		imgSrc : "img/1413379559_412a540d29_z.jpg",
		imgAttribution : "http://www.google.com",
		nickname : ['Shooby']
	},
	{
		clickCount : 0,
		name : 'Sleepy',
		imgSrc : "img/9648464288_2516b35537_z.jpg",
		imgAttribution : "http://www.google.com",
		nickname : ['Zzzzz']
	}	
]


var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickname = ko.observableArray(data.nickname);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = "Newborn";
		} else if (clicks < 50){
			title = "Infant";
		} else if (clicks < 100){
			title = "Child";
		} else if (clicks < 200){
			title = "Teen";
		} else if (clicks < 300){
			title = "Adult";
		} else {
			title = "Ninja";
		}
		return title;
	},this);
}


ko.applyBindings(new ViewModal());


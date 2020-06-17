var app = new Vue({
	el: '#app',
	data: {
		karname: [
			{dars: 'ریاضی', nomredigit: 15, nomrealpha: 'چهارده'},
			{dars: 'فیزیک', nomredigit: 16, nomrealpha: 'شانزده'},
			{dars: 'زیست', nomredigit: 18, nomrealpha: 'هجده'},
		],
		darsName : '',
		darsDigit : '',
		darsAlpha : '',
	},

	methods: {
		insertData() {
			this.karname.push({dars: this.darsName, nomredigit: parseInt(this.darsDigit), nomrealpha: this.darsAlpha})
		}
	},

	computed: {
		pga() {
			sum = 0
			for (var i = this.karname.length - 1; i >= 0; i--) {
				sum += this.karname[i].nomredigit
			}
			return (sum / this.karname.length).toFixed(2)
		}
	}
})
let app = new Vue({
	el:"#app",
	data:{
		current: '',
		isOperatorClicked: false,
		operator: null,
		previous: null
	},
	methods:{
		setPrevious: function(){
			this.previous = this.current;
			this.isOperatorClicked = true;
		},
		clearDisplay: function(){
			this.current = '';
			this.previous = null;
		},
		setSign: function(){
			if(this.current.charAt(0) === '-'){
				this.current = this.current.slice(1);
			}
			else{
				this.current = `-${this.current}`;
			}
		},
		getPercent: function(){
			this.current = `${parseFloat(this.current) / 100}`;
		},
		divide: function(){
			this.operator = (firstOperand, secondOperand) => firstOperand / secondOperand;
			this.setPrevious();
		},
		multiply: function(){
			this.operator = (firstOperand, secondOperand) => firstOperand * secondOperand;
			this.setPrevious();
		},
		add: function(){
			this.operator = (firstOperand, secondOperand) => firstOperand + secondOperand;
			this.setPrevious();
		},
		subtract: function(){
			this.operator = (firstOperand, secondOperand) => firstOperand - secondOperand;
			this.setPrevious();
		},
		getResult: function(){
			this.current = `${this.operator(
				parseFloat(this.previous),
				parseFloat(this.current)
			)}`;
			this.previous = null;
		},
		setDot:function(){
			if(this.current.indexOf('.') === -1){
				this.appendSymbol('.');
			}
		},
		appendSymbol: function(number){
			if(this.isOperatorClicked){
				this.current = '';
				this.isOperatorClicked = false;
			}
			this.current = `${this.current}${number}`;
		}
	}
})
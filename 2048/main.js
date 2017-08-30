var board=[];
var score=0;
var checkBoard=[];
$(function(){
	newgame();
})


//newgame
function newgame(){
	init();
	getRendom();
	getRendom();
	keyAnimation();
}

function init(){
	for(var i=0;i<4;i++){
		checkBoard[i]=[];
		for(var j=0;j<4;j++){
			checkBoard[i][j]=true;
		}
	}
	for(var i=0;i<4;i++){
		board[i]=[];
		for(var j=0 ;j<4;j++){
			board[i][j]=0;
		}
	}
	for(var i= 0;i<4;i++){
		for(var j=0;j<4;j++){
			var grid_num=$("#grid-cell-"+i+"-"+j);
			grid_num.css({
				left:getLeft(i,j),
				top:getTop(i,j)
			})
		}
	}

	updateGridCell()
}

function updateGridCell(){
	$(".number-cell").remove();
	for(var i=0;i<4;i++){
		checkBoard[i]=[];
		for(var j=0;j<4;j++){
			checkBoard[i][j]=true;
		}
	}
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'><div>");
			var number_cell=$("#number-cell-"+i+"-"+j);
			if(board[i][j]==0){
				number_cell.css({
					width:0,
					height:0,
					left:getLeft(i,j)-50+"px",
					top:getTop(i,j)-50+"px"
				})
			}else{
				number_cell.css({
					width:"100px",
					height:"100px",
					color:getNumberColor(board[i][j]),
					background:getNumberBackgroundColor(board[i][j]),
					left:getLeft(i,j),
					top:getTop(i,j)
				}).text(board[i][j])
			}
		}
	}

}

function getRendom(){
	if(nospace()){
		return false
	}
	var rendex=Math.floor(Math.random()*4);
	var rendey=Math.floor(Math.random()*4);
	var rendNumber=Math.random()>0.5?2:4;
	console.log(rendex,rendey);
	while(true){
		if(board[rendex][rendey]==0){
			break
		}else{
			rendex=Math.floor(Math.random()*4);
			rendey=Math.floor(Math.random()*4);
		}
	}
	board[rendex][rendey]=rendNumber;
	$("#number-cell-"+rendex+"-"+rendey).css({
		background:getNumberBackgroundColor(rendNumber),
		color:getNumberColor(rendNumber)
	})
	$("#number-cell-"+rendex+"-"+rendey).animate({
		width:"100px",
		height:"100px",
		top:getTop(rendex,rendey),
		left:getLeft(rendex,rendey),
	},50).text(rendNumber);
}

function  keyAnimation(){
	$(document).keyup(function(e){
		switch (e.keyCode){
			case 37:moveLeft();
			break;
			case 38:moveUp();
			break;
			case 39:moveRight();
			break;
			case 40:moveDown();
			break;
			default:break;
		}
	})
}
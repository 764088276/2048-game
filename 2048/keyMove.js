function moveLeft(){
	if(!canMove("left")){
		return false
	}
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j]!=0){
				for(var k=0;k<j;k++){
				if(board[i][k]==0&&noBlockHorizonal(i,j,k)){
					showAnimation(i,j,i,k);
					board[i][k]=board[i][j];
					board[i][j]=0;
				}else if(board[i][k]==board[i][j]&&noBlockHorizonal(i,j,k)&&checkBoard[i][k]==true){
					showAnimation(i,j,i,k);
					board[i][k]+=board[i][j];
					board[i][j]=0;
					score+=board[i][k];
					checkBoard[i][k]=false;
					updateScore();
				}
			}
			}
			
		}
	}
	setTimeout(updateGridCell,200);
	setTimeout(getRendom,210);
}

function moveRight(){
	if(!canMove("right")){
		return false
	}
	for(var i=0;i<4;i++){
		for(var j=2;j>=0;j--){
			if(board[i][j]){
				for(var k=3;k>j;k--){
				if(board[i][k]==0&&noBlockHorizonal(i,k,j)){
					showAnimation(i,j,i,k);
					board[i][k]=board[i][j];
					board[i][j]=0;	
					
				}else if(board[i][k]==board[i][j]&&checkBoard[i][k]==true&&noBlockHorizonal(i,k,j)){
					showAnimation(i,j,i,k);
					board[i][k]+=board[i][j];
					board[i][j]=0;
					score+=board[i][k];
					checkBoard[i][k]=false;
					updateScore();
				}
			}
			}
			
		}
	}
	setTimeout(updateGridCell,200);
	setTimeout(getRendom,210);
}


function moveUp(){
		if(!canMove("up")){
		return false
	}
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]){
				for(var k=0;k<i;k++){
				if(board[k][j]==0&&noBlockVertical(i,j,k)){
					showAnimation(i,j,k,j);
					board[k][j]=board[i][j];
					board[i][j]=0;	
					
				}else if(board[k][j]==board[i][j]&&checkBoard[k][j]==true&&noBlockVertical(i,j,k)){
					showAnimation(i,j,k,j);
					board[k][j]+=board[i][j];
					board[i][j]=0;
					score+=board[k][j];
					checkBoard[k][j]=false;
					updateScore();
				}
			}
			}
			
		}
	}
	setTimeout(updateGridCell,200);
	setTimeout(getRendom,210);
}


function moveDown(){
	if(!canMove("down")){
		return false
	}
	for(var i=2;i>=0;i--){
		for(var j=0;j<4;j++){
			if(board[i][j]){
				for(var k=3;k>i;k--){
				if(board[k][j]==0&&noBlockVertical(k,j,i)){
					showAnimation(i,j,k,j);
					board[k][j]=board[i][j];
					board[i][j]=0;	
					checkBoard[k][j]==false;

				}else if(board[k][j]==board[i][j]&&checkBoard[k][j]==true&&noBlockVertical(k,j,i)){
					showAnimation(i,j,k,j);
					board[k][j]+=board[i][j];
					board[i][j]=0;
					score+=board[k][j];
					checkBoard[k][j]==false;
					updateScore();
				}
			}
			}
			
		}
	}
	setTimeout(updateGridCell,200);
	setTimeout(getRendom,210);
}
//判断是否能够运动
function canMove(direction){
	switch(direction){
		case "left":
		for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j]!=0&&board[i][j-1]==0){
				return true
			}else if(board[i][j]!=0&&board[i][j-1]==board[i][j]){
				return true
			}
		}
	}
	return false;break;
	case "right":
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){
			if(board[i][j]!=0&&board[i][j+1]==0){
				return true
			}else if(board[i][j]!=0&&board[i][j+1]==board[i][j]){
				return true
			}
		}
	}
	return false;break;
	case "up":
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			console.log(i,j);
			if(board[i][j]!=0&&board[i-1][j]==0){
				return true
			}else if(board[i][j]!=0&&board[i-1][j]==board[i][j]){
				return true
			}
		}
	}
	return false;break;
	case "down":
	for(var i=0;i<3;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]!=0&&board[i+1][j]==0){
				return true
			}else if(board[i][j]!=0&&board[i+1][j]==board[i][j]){
				return true
			}
		}
	}
	return false;break;
	default:break;
	}
	
}

function noBlockHorizonal(i,j,k){
	for(var t=k+1;t<j;t++){
		if(board[i][t]!=0){
			return false
		}
	}
	return true
}

function noBlockVertical(i,j,k){
	for(var t=k+1;t<i;t++){
		if(board[t][j]!=0){
			return false
		}
	}
	return true
}

function showAnimation(fromx,fromy,tox,toy){
	var numberCell=$("#number-cell-"+fromx+"-"+fromy);
	numberCell.animate({
		left:getLeft(tox,toy),
		top:getTop(tox,toy)
	},200)
}


function updateScore(){
	$("#score").text(score)
}
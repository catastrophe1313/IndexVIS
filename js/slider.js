function slider(obj,num){
	var box = document.getElementById(obj);
     	var hd = box.children[0];
     	var hdt = box.children[1];
     	//鼠标按下事件  只要鼠标按下时是在hd上触发就可以
     	hd.onmousedown = function(event){
     		var event = event || window.event;
     		//event.clientX 鼠标按下时的x坐标
     		//this.offsetLeft 圆点到box的距离
     		//leftval box距离左边边界的距离
     		var leftval = event.clientX - this.offsetLeft;
     		var _this = this;
     		//滑动事件 作用在document上，因为如果是作用在hd.onmousemove，滑动时可能会出现鼠标脱离hd范围（范围太小）而停止滑动，但是此时鼠标按下还没有弹起还处于滑动状态，所以就产生了bug
     		document.onmousemove = function(event){
     			var event = event || window.event;
     			//hd.style.left = _this.offsetLeft + "px";
     			//offsetLeft 是要有left值的前提下才产生，不能offsetLeft先赋值给left
     			hd.style.left = event.clientX - leftval + "px";

     			var far = parseInt(hd.style.left);
     			  
     			//临界值判断
     			if(far < 0){
     				hd.style.left = 0;
     			}
     			else if(far > 195){
     				hd.style.left = 195+"px";
     			}
     			
     			hdt.style.width = hd.style.left;
     			//保留两位小数
//   			var result = Math.floor((parseInt(hdt.style.width)/195 * num) * 100) / 100;
               //取整
     			var result = parseInt(parseInt(hdt.style.width)/195 * num);
     			//效果图上的476
     			box.nextSibling.nextSibling.value = result;
//   			console.log(box.nextSibling.nextSibling);
     			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();//清除选中的文本
     		}
		//当鼠标弹起时清除滑动时运行的函数，因为滑动结束时鼠标可能不在hd上，所以用document监听弹起事件
	     	document.onmouseup = function(){
	     		document.onmousemove = null;
	     	}

     	}
     	//点击选择位置
     	box.onclick = function(event){
     		var event = event || window.event;
     		var boxWidth = event.clientX-this.offsetLeft;
     		if(boxWidth > 195){
     				boxWidth = 195;
     		}
     		hdt.style.width = hd.style.left = boxWidth + 'px';
     		var result = parseInt(parseInt(hdt.style.width)/195 * num);
     		box.nextSibling.nextSibling.value = result;
     		console.log(event.clientX-this.offsetLeft);
     	}
}

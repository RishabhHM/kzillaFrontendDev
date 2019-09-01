box=document.getElementById('id0');

box.addEventListener('mousemove', (e) => {
var el,i=0,x1,y1,h,w;
	for(i=1;i<=12;i++)
	{
        el=$('#id'+i)
        x1 = e.pageX - el.offset().left;
        y1 = e.pageY - el.offset().top;
        h = parseInt(el.css("height").slice(0, -2));
        w = parseInt(el.css("width").slice(0, -2));
        if(x1>w &&  y1>h)
        	el.attr("src","se.jpg")
        else if(x1>w && y1<0)
        	el.attr("src","ne.jpg")
        else if(x1<0 && y1>h)
        	el.attr("src","sw.jpg")
        else if(x1<0 && y1<0)
        	el.attr("src","nw.jpg")
        else if(x1<0)
        	el.attr("src","w.jpg")
        else if(x1>w)
        	el.attr("src","e.jpg")
        else if(y1>h)
        	el.attr("src","s.jpg")
        else if(y1<0)	
        	el.attr("src","n.jpg")
        else
        	el.attr("src","hover.jpg")


       // console.log(x1+" "+y1+" "+x2+" "+y2);

	}
});

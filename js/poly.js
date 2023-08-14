function PolyFit(x,y,n,a,m)
 {
  var i, j, k, z, p, c, g, q = 0, d1, d2; 
  var s=[];
  var t=[];
  var b=[];
  var dt=[];
  for (i = 0; i <= m-1; i++)
  {
   a[i] = 0.0;
  }
  if (m > n)
  {
   m = n;
  }
  if (m > 20)
  {
   m = 20;
  }
  z = 0.0;
  for (i = 0; i <= n-1; i++)
  {
   z = z+x[i]/(1.0 *n);
  }
  b[0] = 1.0;
  d1 = 1.0 * n;
  p = 0.0;
  c = 0.0;
  for (i = 0; i <= n-1; i++)
  {
   p = p+(x[i]-z);
   c = c+y[i];
  }
  c = c/d1;
  p = p/d1;
  a[0] = c * b[0];
  if (m > 1)
  {
   t[1] = 1.0;
   t[0] = -p;
   d2 = 0.0;
   c = 0.0;
   g = 0.0;
   for (i = 0; i <= n-1; i++)
   {
    q = x[i]-z-p;
    d2 = d2+q * q;
    c = c+y[i] *q;
    g = g+(x[i]-z) *q * q;
   }
   c = c/d2;
   p = g/d2;
   q = d2/d1;
   d1 = d2;
   a[1] = c * t[1];
   a[0] = c * t[0]+a[0];
  }
  for (j = 2; j <= m-1; j++)
  {
   s[j] = t[j-1];
   s[j-1] = -p * t[j-1]+t[j-2];
   if (j >= 3)
    for (k = j-2; k >= 1; k--)
       {
     s[k] = -p * t[k]+t[k-1]-q * b[k];
       }
   s[0] = -p * t[0]-q * b[0];
   d2 = 0.0;
   c = 0.0;
   g = 0.0;
   for (i = 0; i <= n-1; i++)
   {
    q = s[j];
    for (k = j-1; k >= 0; k--)
    {
     q = q *(x[i]-z)+s[k];
    }
    d2 = d2+q * q;
    c = c+y[i] *q;
    g = g+(x[i]-z) *q * q;
   }
   c = c/d2;
   p = g/d2;
   q = d2/d1;
   d1 = d2;
   a[j] = c * s[j];
   t[j] = s[j];
   for (k = j-1; k >= 0; k--)
   {
    a[k] = c * s[k]+a[k];
    b[k] = t[k];
    t[k] = s[k];
   }
  }
  dt[0] = 0.0;
  dt[1] = 0.0;
  dt[2] = 0.0;
  for (i = 0; i <= n-1; i++)
  {
   q = a[m-1];
   for (k = m-2; k >= 0; k--)
   {
    q = a[k]+q *(x[i]-z);
   }
   p = q-y[i];
   if (Math.abs(p) > dt[2])
   {
    dt[2] = Math.abs(p);
   }
   dt[0] = dt[0]+p * p;
   dt[1] = dt[1]+Math.abs(p);
  }
  return a;
 }

function ave(x)
 {
  var ave=0;
  var sum=0;
  if(x!=null)
  {
   for(var i=0;i<x.length;i++)
   {
    sum+=x[i];
   }
   console.log("sum-->"+sum);
   ave=sum/x.length;
   console.log("ave"+ave+"x.length"+x.length);
  }
  return ave;
 }
 
 function getY(x,xx,a,m)
 {
  var y=0;
  var av=ave(xx);
  
  var l=0;
  for(var i=0;i<m;i++)
  {
   l=a[0];
   if(i>0)
   {
    y+=a[i]*Math.pow((x-av),i );
    console.log(i+"--|-->"+y+"--a[i]--"+a[i]);
   }
   console.log("a[0]|"+a[0]);
  }
  console.log("l--|"+(l));
  return (y+l);
 }
//--------------------------------------------测试代码

function poly(){
  var x=[1,2,3,4,5,6];
  var y=[51,53,54,55,69,71];
  var a=[];
  var aa= PolyFit(x,y,6,a,4);
    var yy=0;
    console.log("拟合-->"+getY(7,x,aa,3));
    console.log(aa);
}
poly();
/*--- Avanquest WebEasy Document Script ---*/

IE=(navigator.appName.indexOf('Microsoft') >= 0);
NS=(navigator.appName.indexOf('Netscape') >= 0);
SF=(navigator.appName.indexOf('Safari') >= 0);
FF=(navigator.userAgent.indexOf('Firefox') >= 0);
OP=(navigator.userAgent.indexOf('Opera') >= 0);
GK=(navigator.userAgent.indexOf('Gecko') >= 0);
V4=(parseInt(navigator.appVersion) >= 4);
if((V5=navigator.appVersion.indexOf('MSIE '))<0) V5=-5;
V5=(parseInt(navigator.appVersion.charAt(V5+5))>=5);
MAC=(navigator.userAgent.indexOf('Mac')!=-1);


IDP={}; IDP[0]=0;

function DoBlink(obj,val,sunk,rise,hold,fall,loop)
{	var tm;
	eval(obj+'='+((val)?'"visible"':'"hidden"'));
	if(val)
	{	if(fall < 0) return;
		tm=(sunk)?loop:hold;
		if(tm < 0) return;
	}else
	{	if(rise < 0) return;
		tm=(sunk)?hold:loop;
		if(tm < 0) return;
	}
	window.setTimeout('DoBlink("'+obj+'",'+(!val)+','+sunk+','+rise+','+hold+','+fall+','+loop+')',tm);
}


/*--- EndOfFile ---*/

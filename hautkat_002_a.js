/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP[1]=(V5)?'document.getElementById(\'e8\').style.visibility':(IE)?'e8.style.visibility':'document.e8.visibility';
	if(IE) e34.style.filter='revealtrans(transition=6,duration=1.80)';
	if(IE) window.setTimeout('DoTrans(e34,4000,0,2000)',0);
	else { if(V5) document.getElementById('e34').style.visibility='visible'; else document.e34.visibility='visible'; }
	window.setTimeout('DoBlink(IDP[1],0,1,-1,-1,0,-1)',1000);
}


/*--- EndOfFile ---*/

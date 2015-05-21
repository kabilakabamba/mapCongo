/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP[1]=(V5)?'document.getElementById(\'e3\').style.visibility':(IE)?'e3.style.visibility':'document.e3.visibility';
	window.setTimeout('DoBlink(IDP[1],0,1,-1,-1,0,-1)',1000);
}


/*--- EndOfFile ---*/

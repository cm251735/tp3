document.getElementById("input").addEventListener("keyup",(event)=>
{
	if ( event.code == "Enter" )
	{
		exc = false ;
		inp = document.getElementById("input").value ;
		
		for ( let cpt = 0 ; cpt < inp.length ; cpt++ )
		{
			if ( inp.charAt(cpt) == '+' ||
				 inp.charAt(cpt) == '-' ||
				 inp.charAt(cpt) == '*' ||
				 inp.charAt(cpt) == '/'    )
			{
				operator = inp.charAt(cpt) ;
			}
		}
		
		console.log(operator);
		
		nbAcalc = inp.split(operator) ;
		
		switch ( operator )
		{
			case '+' : res = Number(nbAcalc[0]) + Number(nbAcalc[1]) ; break
			case '-' : res = Number(nbAcalc[0]) - Number(nbAcalc[1]) ; break
			case '*' : res = Number(nbAcalc[0]) * Number(nbAcalc[1]) ; break
			case '/' : res = Number(nbAcalc[0]) / Number(nbAcalc[1]) ; break
			default  : exc = true ;
		}
		
		
		if ( ! exc ) { document.getElementById("output").innerHTML = res ; }
		if (   exc ) { document.getElementById("output").innerHTML = "Exeception" ; }
	}
})

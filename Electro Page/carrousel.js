var posicion = 0;
     var numeroImatges = 4;
	 var imagenes = new Array();
	 $(document).ready(function() {
	   
         
         $(".izquierda_flecha").css("display", "none");

	     $('.izquierda_flecha').on('click',function(){
            if (!$(".derecha_flecha").is(":visible")) {
                $('.derecha_flecha').css('display','block');
            } 
             
	        if(posicion>0){
	            posicion = posicion-1;
	        }else{
	            posicion = numeroImatges-3;
	        }
	        $(".carrusel").animate({"left": -($('#product_'+posicion).position().left)}, 600);
             
             if (posicion == 0) {
                $(".izquierda_flecha").css("display", "none");
             }

             $(".carrusel").css("left", $(".carrusel").position().left + 10);
	     });

	     $('.izquierda_flecha').hover(function(){
	         $(this).css('opacity','0.5');
	     },function(){
	         $(this).css('opacity','1');
	     });

	     $('.derecha_flecha').hover(function(){
	         $(this).css('opacity','0.5');
	     },function(){
	         $(this).css('opacity','1');
	     });

	     $('.derecha_flecha').on('click',function(){
             posicion += 1;
             
            if (!$(".izquierda_flecha").is(":visible")) {
                $('.izquierda_flecha').css('display','block');
            }
             
	        $(".carrusel").animate({"left": -($('#product_'+posicion).position().left)}, 610);
	        //return false;
             
             if (posicion == numeroImatges - 1) {
                 $('.derecha_flecha').css('display','none');
             }

             //$(".carrusel").css("left", $(".carrusel").position().left - 10);
	     });

	 });
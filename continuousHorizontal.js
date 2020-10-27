Reveal.on('slidechanged', event =>
	{
	
		lastSlide = Reveal.getHorizontalSlides().length - 1;
		horizonSlides = Reveal.getHorizontalSlides();
		if (lastSlide == event.indexh)
		{
            console.log("Last Slide");
            //change 1st slide to future
			horizonSlides[0].className = "stack future";

		}
		else if (event.indexh == 0)
		{  	
            console.log("This is the First slide");
            //change last slide class
			horizonSlides[lastSlide].className = "stack past";
			
		}
	});
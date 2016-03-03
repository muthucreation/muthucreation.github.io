# muthucreation.github.io
my personal web

Create popup for works 

Copy paste the below code

<h3>HTML</h3>

    <div id="work-1-modal" class="modal-wrapper">
    		<div class="modal">
    			<a class="close-modal">X</a>	
    				<div class="work-screen">
    					<h3 class="work-detail">Reader App Design</h3>
    					<img src="img/work1.png">
    				</div>
    		</div>
    </div>

Change the id of the modal to work-2-modal likewise

<h3>JS</h3>
    			
	$("#work-1").click(function(){
		$("#work-1-modal").css("display","block");
	});
	
make sure #work-'number' and #work-'number'-modal are added correctly in links and modal

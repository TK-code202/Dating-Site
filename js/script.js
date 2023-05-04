$(document).ready(function() {
    $("#formOne").submit(function(event) {
        const gender  = $("input:radio[name=Gender]:checked").val();
        const nameInput = $("input#Name").val();

        if (gender === 'Male' ) {
            alert("💗💗Welcome " + nameInput);
            window.location = "./quiz.html"
        } else {
            alert("💗💗Welcome " + nameInput);
            window.location = "./quiz2.html"
        }
      
        event.preventDefault();
    });

    $(".formTwo").submit(function(event) {
        const attributeInput = $("select#character").val();
        const colorInput = $("input:radio[name=Color]:checked").val();
        const petInput = $("select#pet").val();
        const musicInput = $("select#music").val();
        const shapeInput = $("select#body-shape").val();
        const heightInput = $("select#height").val();
        const skinInput = $("select#skin").val();

        if ( attributeInput === "Social" && (colorInput === "Red" ||  colorInput === "Blue"||  colorInput === "Green") && petInput === "Cat" && shapeInput === "Slim" && musicInput === "Afro" && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Dark") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-eight").show(1000);
        } else if ( (attributeInput === "Calm" || attributeInput === "Humorous" ) && (colorInput === "Red" ||  colorInput === "Blue"||  colorInput === "Green") && petInput === "Dog" && shapeInput === "Slim" && musicInput === "Afro" && (heightInput === "Average" || heightInput === "Short"  ) && (skinInput === "Dark" || skinInput === "Medium") ) {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-nine").show(1000);
        } else if ( (attributeInput === "Social" || attributeInput === "Humorous" ) && (colorInput === "Red" ||  colorInput === "Blue"||  colorInput === "Green") && petInput === "Dog" && shapeInput === "Slim" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Light") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-seven").show(1000);
        } else if ( (attributeInput === "Humorous" || attributeInput === "Social" ) && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Dog" && shapeInput === "Slim" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Average" || heightInput === "Tall"  ) && skinInput === "Medium") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-three").show(1000);
        } else if ( (attributeInput === "Social" || attributeInput === "Humorous" ) && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Dog" && shapeInput === "Slim" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Average" || heightInput === "Short"  ) && (skinInput === "Medium" || skinInput === "Dark") ) {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-four").show(1000);
        } else if ( (attributeInput === "Social" || attributeInput === "Humorous" || attributeInput === "Calm"   )&& (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Cat" && shapeInput === "Curvy" && musicInput === "Afro" && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Dark") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-eleven").show(1000);
        } else if ( (attributeInput === "Calm" || attributeInput === "Social" || attributeInput === "Humorous" ) && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Dog" && shapeInput === "Curvy" && musicInput === "Afro" && (heightInput === "Average" || heightInput === "Short"  ) && (skinInput === "Light" || skinInput === "Medium") ) {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-one").show(1000);
        } else if ( (attributeInput === "Calm" || attributeInput === "Humorous" || attributeInput === "Social" ) && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Dog" && shapeInput === "Curvy" && musicInput === "Afro" && (heightInput === "Average" || heightInput === "Short"  ) && (skinInput === "Dark" || skinInput === "Medium") ) {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-two").show(1000);
        } else if ( (attributeInput === "Calm" || attributeInput === "Humorous" || attributeInput === "Social" ) && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Cat" && shapeInput === "Curvy" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Light") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-five").show(1000);
        } else if ( (attributeInput === "Calm" || attributeInput === "Humorous" || attributeInput === "Social") && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Dog" && shapeInput === "Curvy" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Light") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-six").show(1000);
        } else if ( (attributeInput === "Calm" || attributeInput === "Humorous" || attributeInput === "Social") && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Cat" && shapeInput === "Slim" && (musicInput === "Pop" || musicInput === "Afro" ) && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Light") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-ten").show(1000);
        } else if ( (attributeInput === "Social" || attributeInput === "Humorous" || attributeInput === "Calm") && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Dog" && shapeInput === "Slim" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Light") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-twelve").show(1000);
        } else if ( (attributeInput === "Social" || attributeInput === "Humorous" || attributeInput === "Calm") && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Dog" && shapeInput === "Curvy" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Average" || heightInput === "Short"  ) && (skinInput === "Dark" ||skinInput === "Medium")) {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-fourteen").show(1000);
        } else if ( ( attributeInput === "Humorous" || attributeInput === "Calm") && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Cat" && shapeInput === "Slim" && (musicInput === "Pop" || musicInput === "RB") && (heightInput === "Tall"  ) && (skinInput === "Dark" ||skinInput === "Light")) {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-sixteen").show(1000);
        } else if ( (attributeInput === "Humorous" || attributeInput === "Calm"  || attributeInput === "Social" ) && (colorInput === "Red" ||  colorInput === "Blue"|| colorInput === "Green") && petInput === "Cat" && shapeInput === "Slim" && musicInput === "Afro" && (heightInput === "Average" || heightInput === "Short"  ) && skinInput === "Dark") {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-thirteen").show();
        } else {
            $(".formTwo").hide();
            $(".instruction").hide();
            $(".pic-fifteen").show(1000);
        }

        event.preventDefault();
    });

    $(".formThree").submit(function(event) {
        const attribute = $("select#Character").val();
        const faveColor = $("input:radio[name=color]:checked").val();
        const favePet = $("select#Pet").val();
        const faveMusic = $("select#genre").val();
        const buildInput = $("select#build").val();
        const inputtedHeight = $("select#Height").val();
        const complexionInput = $("select#complexion").val();

        if ( (attribute === "social" || attribute === "humorous") && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "dog") && buildInput === "muscular" && faveMusic === "afro" && (inputtedHeight === "average" || inputtedHeight === "tall"  ) && (complexionInput === "dark" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picEleven").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && favePet === "cat" && buildInput === "muscular" && faveMusic === "afro" && ( inputtedHeight === "tall" || inputtedHeight === "average"  ) && (complexionInput === "dark" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picTen").show();
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )  && buildInput === "slim" && faveMusic === "afro" && inputtedHeight === "tall"   && (complexionInput === "dark" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picTwelve").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )  && buildInput === "slim" && (faveMusic === "afro" || faveMusic === "r and b" ) && ( inputtedHeight === "tall" || inputtedHeight === "average" ) && (complexionInput === "dark" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picThree").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )  && buildInput === "slim" && (faveMusic === "afro" || faveMusic === "r and b" ) && ( inputtedHeight === "short" || inputtedHeight === "average" ) && (complexionInput === "light" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picSeventeen").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )  && buildInput === "muscular" && (faveMusic === "pop" || faveMusic === "r and b" ) && inputtedHeight === "average" && (complexionInput === "dark" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picOne").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )  && buildInput === "muscular" && (faveMusic === "afro" || faveMusic === "pop" ) &&  inputtedHeight === "tall" && (complexionInput === "dark" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picSixteen").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )  && buildInput === "slim" && (faveMusic === "r and b" || faveMusic === "pop" ) &&  (inputtedHeight === "tall" ||inputtedHeight === "average") && (complexionInput === "dark" || complexionInput === "medium") ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picFifteen").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && favePet === "cat"   && buildInput === "slim" && (faveMusic === "r and b" || faveMusic === "pop" ) &&  (inputtedHeight === "tall" ||inputtedHeight === "average") && complexionInput === "light"  ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picSeven").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && favePet === "dog"   && buildInput === "slim" && (faveMusic === "r and b" || faveMusic === "pop" ) &&  inputtedHeight === "average" && complexionInput === "light"  ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picSix").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && favePet === "dog"   && buildInput === "slim" && (faveMusic === "r and b" || faveMusic === "pop" ) &&  inputtedHeight === "short" && complexionInput === "light"  ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picFourteen").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && favePet === "cat"   && buildInput === "slim" && (faveMusic === "r and b" || faveMusic === "pop" ) &&  inputtedHeight === "short" && complexionInput === "light"  ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picNine").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )    && buildInput === "muscular" &&  faveMusic === "pop"  &&  inputtedHeight === "tall" && complexionInput === "light"  ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picFour").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )    && buildInput === "muscular" &&  faveMusic === "r and b"  &&  inputtedHeight === "tall" && complexionInput === "light"  ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picFive").show(1000);
        } else if ( (attribute === "calm" || attribute === "humorous" || attribute === "social" ) && (faveColor === "Pink" ||  faveColor === "Yellow"||  faveColor === "Purple") && (favePet === "cat" ||favePet === "dog" )    && buildInput === "muscular" &&  (faveMusic === "r and b" || faveMusic === "pop")  &&  inputtedHeight === "short" && (complexionInput === "dark" || complexionInput === "medium" ) ) {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picTwo").show(1000);
        }
        else {
            $(".formThree").hide();
            $(".Instruction").hide();
            $(".picThirteen").show(1000);
        }
        event.preventDefault();
    });

    $(".clickableOne").click(function() {
        $(".excessiveOne").slideToggle(1000);
    });

    $(".clickableTwo").click(function() {
        $(".excessiveTwo").slideToggle(1000);
    });

    $(".clickableThree").click(function() {
        $(".excessiveThree").slideToggle(1000);
    });

    $(".clickableFour").click(function() {
        $(".excessiveFour").slideToggle(1000);
    });

    $(".clickableFive").click(function() {
        $(".excessiveFive").slideToggle(1000);
    });

    $(".clickableSix").click(function() {
        $(".excessiveSix").slideToggle(1000);
    });

    $(".clickableSeven").click(function() {
        $(".excessiveSeven").slideToggle(1000);
    });

    $(".clickableEight").click(function() {
        $(".excessiveEight").slideToggle(1000);
    });

    $(".clickableNine").click(function() {
        $(".excessiveNine").slideToggle(1000);
    });
});

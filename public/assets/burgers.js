$(function(){
    $.ajax("/burgers",{
        type: "get"
    }).then(function(data){
        var notDevourEl = $("#notdev");
        var devourEl = $("#devburgs");
       
        var burgers = data.burgers;
        var leng = burgers.length;

        for (var i = 0; i < leng; i++) {
            var newel =
            "<li>" +
            burgers[i].id +
            ". "+burgers[i].name +
            "<button class='eaten' data-id='" +
            burgers[i].id +
            "' data-digest='" +
            !burgers[i].devoured +
            "'>";

            if (burgers[i].devoured) {
                newel += "Yum!";
            } else {
                newel += "Ggrrgrrrg (thats a stomach noise, and not me having a stroke at my keyboard)";
            }

            newel += "</button>";

            newel +=
            "<button class='delete-burger' data-id=" +
            burgers[i].id +
            "'Delete!</button></li>";

            if (burgers[i].devoured) {
                devourEl.append(newel);
            } else {
                notDevourEl.append(newel);
            }
        }
    });

    $(document).on("click", ".eaten", function (event){
        var id = $(this).data("id");
        var fulltum = $(this).data("digest") ===true;

        var newtummy = {
            devoured: fulltum
        };

        $.ajax("/burgers/" + id, {
            type: "put",
            data: JSON.stringify(newtummy),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function(){
            console.log(fulltummy);
            location.reload();
        });

    });

    $(".addburger").on("submit", function (event){
        event.preventDefault();

        var newburg = {
            name: $("#burger_name")
            .val()
            .trim(),

            // note to self: figure out the devoured/notdevoured part, 
            // cat activity is possibly different than the layout you want
        };

        $.ajax("/burgers", {
            type: "post",
            data: JSON.stringify(newburg),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function(){
            console.log("made new burger");
            location.reload();
        });
    });

    $(document).on("click", ".delete-burger", function(event){
        var id = $(this).data("id");

        $.ajax("/cats/" + id, {
            type: "delete"
        }).then(function(){
            console.log("deleted burger", id);
            location.reload();
        });
    });

});
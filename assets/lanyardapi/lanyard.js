$(document).ready(function(){
    setInterval(() => {
        $.get("https://api.lanyard.rest/v1/users/591865042996297729", function({ data }){
            $(".discord-user").text(`${data.discord_user.username}#${data.discord_user.discriminator}`)
            if(data.active_on_discord_desktop === true){
                $(".discord").html('Dan is currently on <span class="fw-bold">Desktop</span>');
            }else if(data.active_on_discord_mobile === true){
                $(".discord").html('Dan is curently on <span class="fw-bold">Mobile</span>');
            }else {
                $(".discord").html('Dan is currently <span class="fw-bold">Offline</span>');
            }

            if(data.listening_to_spotify === false){
                $(".spotify").html('Dan is currently listening to <span class="fw-bold">nothing</span>');
            }else {
                $(".spotify").html(`Dan is currently listening to <span class="fw-bold"><a target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}">${data.spotify.song}</a></span> by <span class="fw-bold"> ${data.spotify.artist}</span> on spotify!`);
            }

            if(data.activities.length > 0){
                data.activities.forEach(activity => {
                    $(".activity").html(`<span class="fw-bold">${activity.name}</span> -> ${activity.state}`);
                });
            }else {
                $(".activity").html(`Dan is currently doing <span class="fw-bold">nothing</span>`)
            }

            twemoji.parse(document.body);
        });
    }, 1000);
});
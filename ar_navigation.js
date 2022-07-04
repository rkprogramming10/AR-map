let coordinates={
    
}

$(document).ready(function(){
    get_coordinates();
})

function get_coordinates(){
    let search_pars = new URLSearchParams(window.location.search)

    if(search_pars.has('source')&&search_pars.has('destination')){
        let source = search_pars.get('source')
        let destination = search_pars.get('destination')
        coordinates.source_lat = source.split(';')[0]
        coordinates.source_lon = source.split(';')[1]
        coordinates.destination_lat = destination.split(';')[0]
        coordinates.destination_lon = destination.split(';')[1]

    }else{
        alert("Coordinates not Selected!..")
        window.history.back()
    }
}
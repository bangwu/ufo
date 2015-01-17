function data_to_view(foods) {
    var foods_div=_.map(foods,function(food){
        return food_to_div(food);
    });

    _.each(foods_div,function(food_div){
       $("#foods").append(food_div);
    });
}

function get_name(name) {
    return $("<h3>").attr("class","text-center").
        html(name);
}
function get_image(img) {
    return $("<img>").
        attr("class","img-rounded image").
        attr("src",img);
}
function get_price(price) {
    return $("<h4>").attr("class","text-center").
        html('价格:'+price);
}

function get_button(){
    return $("<button>").
        addClass("btn btn-primary add_food_button").
        html("add");
}

function food_to_div(food){
    return $("<div>").
        attr("class","food").
        attr("id",food.id).
        append(get_name(food.name)).
        append(get_image(food.img)).
        append(get_price(food.price)).append(get_button())
}
/**
 * Created by twer on 1/10/15.
 */
$(document).ready(function(){
    data_to_view(foods);
});

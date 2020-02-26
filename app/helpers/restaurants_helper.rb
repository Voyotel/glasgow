module RestaurantsHelper

    def restaurant_thumbnail restaurant
        img = restaurant.thumbnail.present? ? restaurant.photo.thumbnail.url : "placeholder.png"
        image_tag img, class: "restaurant-thumbnail"
      end
end

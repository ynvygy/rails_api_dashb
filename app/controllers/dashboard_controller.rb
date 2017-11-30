class DashboardController < ApplicationController
  def index
	if filter = params[:filter]
	  @orders = Order.public_send(filter)
	else
	  @orders = Order.all
	end
  end
end
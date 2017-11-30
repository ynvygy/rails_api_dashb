class DashboardController < ApplicationController
  def index
	@orders = Order.all
	respond_to do |format|
	  format.js
	end
  end
end
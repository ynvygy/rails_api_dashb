class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]

  def index
  	orders = Order.all
  	render json: orders, status: 200
  end

  def create
  	order = Order.create!(order_params)
  	if order.save
  	  render json: order, status: 201, location: order
    else
      render json: order.errors, status: 422
    end
  end

  def show
  	render json: order, status: 200
  end

  def update
  	if order.update(order_params)
  	  render json: order, status: 200
  	else
  	  render json: order.errors, status: 422
  	end
  end

  def destroy
  	order.destroy
  end

  private

  def order_params
  	params.permit(:status)
  end

  def set_order
  	order = Order.find(params[:id])
  end
end
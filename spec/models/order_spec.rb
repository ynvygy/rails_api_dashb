require "spec_helper"
require 'order'

RSpec.describe Order, type: :model do 
  it { should validate_presence_of(:status) }

  it "should create an order with a default status" do
    order=Order.create!
    expect(order.status).to eq("pending")
  end
  it "filters delivered orders" do
  	expect(Order.delivered).to include(Order.where("status = delivered"))
  end
  it "filters pending orders" do
  	expect(Order.pending).to include(Order.where("status = pending"))
  end
end
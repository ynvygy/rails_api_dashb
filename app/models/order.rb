class Order < ApplicationRecord
  STATUS = ["pending", "delivered"]

  validates :status, presence: true
  validates :status, inclusion: {in: STATUS}

  scope :delivered, -> {where(status: 'delivered')}
  scope :pending, -> {where(status: 'pending')}

end

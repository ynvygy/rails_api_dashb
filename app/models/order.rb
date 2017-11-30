class Order < ApplicationRecord
	validates :status, presence: true
	validates :status, inclusion: {in: ["delivered", "pending"]}
end

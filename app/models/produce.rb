class Produce < ApplicationRecord
  has_and_belongs_to_many :seasons
  belongs_to :user
end

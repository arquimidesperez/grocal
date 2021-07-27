class Season < ApplicationRecord
  has_and_belongs_to_many :produces

  # def self.with_produce
  #   Season.all.map{|season| season.produces}
  # end


end

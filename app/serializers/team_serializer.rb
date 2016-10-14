class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :division_id
  has_one :division
  has_many :players
end

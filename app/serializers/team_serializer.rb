class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :division_id
  has_one :division
end

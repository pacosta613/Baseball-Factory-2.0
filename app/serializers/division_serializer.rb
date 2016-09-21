class DivisionSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :teams
end

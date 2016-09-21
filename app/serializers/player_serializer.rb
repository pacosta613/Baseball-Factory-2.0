class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :jersey_number, :team_id
  has_one :team
end

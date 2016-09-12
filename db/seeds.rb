#create divisions
brooklyn = Division.create(name: 'Brooklyn')
queens = Division.create(name: 'Queens')
bronx = Division.create(name: 'Bronx')
manhattan = Division.create(name: 'Manhattan')

#create teams
tiger = Team.create(name: 'Tigers', division_id: 1)
rockies = Team.create(name: 'Rockies', division_id: 1)
royals = Team.create(name: 'Royals', division_id: 2)
mudhens = Team.create(name: 'Mudhens', division_id: 2)
afterdark = Team.create(name: 'Afterdark', division_id: 3)
riders = Team.create(name: 'Riders', division_id: 3)
bears = Team.create(name: 'Bears', division_id: 4)
bats = Team.create(name: 'Bats', division_id: 4)

#create players
pedro = Player.create(first_name: 'Pedro', last_name: 'Acosta', position: 'CenterField', team_id: 1, jersey_number: 6)
jason = Player.create(first_name: 'Jason', last_name: 'Z', position: 'P', team_id: 2, jersey_number: 15)
mike = Player.create(first_name: 'Mike', last_name: 'M', position: 'First Base', team_id: 3, jersey_number: 25)
manny = Player.create(first_name: 'Manny', last_name: 'Rameriz', position: 'LeftField', team_id: 4, jersey_number: 24)
david = Player.create(first_name: 'David', last_name: 'Ortiz', position: 'DH', team_id: 5, jersey_number: 35)
pedro_martinez = Player.create(first_name: 'Pedro', last_name: 'Martinez', position: 'P', team_id: 6, jersey_number: 45)
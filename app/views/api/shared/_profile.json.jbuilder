json.extract! user, :email, :full_name, :location_name, :location_zip, :bio, :id
json.group_ids user.joined_groups.pluck(:id)
json.profile_pic user.profile_pic.url

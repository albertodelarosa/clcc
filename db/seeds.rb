unless Rails.env.eql?("production")
  developer = User.new(email: 'developers@chicanolegacy.com', password: 'password')
  developer.skip_confirmation!
  developer.save!
end

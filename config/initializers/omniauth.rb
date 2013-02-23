OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['273663866011359'], ENV['ea88fea421b2a510d7b84bdbcd3982b7']
end

